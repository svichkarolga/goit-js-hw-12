import iziToast from "izitoast";
import { fetchPhotos } from "./js/pixabay-api";
import { createGalleryCardTemplate } from "./js/render-functions";
import SimpleLightbox from "simplelightbox";


const searchForm = document.querySelector(".js-search-form");
const galleryEl = document.querySelector('.js-gallery');
const loader = document.querySelector('.loader');
const btnLoadMore = document.querySelector('.js-load-more');

let currentPage = 1;
let searchedValue = '';
let cardHeight = 0;

const light = new SimpleLightbox('.js-gallery a', {
    overlay: true,
    captionsData: 'alt',
    overlayOpacity: 0.8,
    captionDelay: 250,
    focus: true,
});

function showLoader() {
    loader.classList.remove('is-hidden');
};
function hideLoader() {
    loader.classList.add('is-hidden');
};

const onSearch = async event => {
    showLoader();
    try {
        event.preventDefault();

        searchedValue = searchForm.elements.user_query.value;
        
        currentPage = 1; // значення поточної сторінки скидати в 0

        const response = await fetchPhotos(searchedValue, currentPage);
        
        if (searchedValue === "") {
            iziToast.warning({
                title: 'Caution',
                message: 'Input field must not be empty',
                position: 'topLeft',
            });
            return; // Перериваємо виконання функції, якщо поле порожнє
        }
        if (response.data.hits.length === 0) {
            iziToast.error({
                title: 'Error',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'bottomRight',
            });
            galleryEl.innerHTML = '';
            searchForm.reset();
            return;
        }

        const galleryCardsTemplate = response.data.hits.map(imgDetails => createGalleryCardTemplate(imgDetails)).join('');
        galleryEl.innerHTML = galleryCardsTemplate;
        
        // визначаємо вистоту карток для реалізації прокрутки
        const galleryCardEl = galleryEl.querySelector('li');
        console.log(galleryCardEl.getBoundingClientRect()); // дивимось розміри і розташевання карточки
        cardHeight = galleryCardEl.getBoundingClientRect().height; // зиписуємо висоту каточки, яку попередньо в консолі побачили

        btnLoadMore.classList.remove('is-hidden');
        
        light.refresh();
    }
    catch (err) {
        iziToast.error({
            title: 'Error',
            message: 'Illegal operation',
        });
    } finally {
        hideLoader();
    }
    searchForm.reset();
};
searchForm.addEventListener('submit', onSearch); 


// pagination==========================================================
const onLoadMoreBtn = async event => {
    
    showLoader();
    
    try {
        currentPage++; 
        const response = await fetchPhotos(searchedValue, currentPage);
        console.log(response);
        const galleryCardsTemplate = response.data.hits.map(imgDetails => createGalleryCardTemplate(imgDetails)).join('');
        galleryEl.insertAdjacentHTML('beforeend', galleryCardsTemplate);

        // реалізуємо прокрутку
        scrollBy({ 
            top: cardHeight * 2, // висоту карточки знайшли на 67 рядку
            behavior: 'smooth',
        });

        light.refresh();

        const totalPages = Math.ceil(response.data.totalHits / 15); // 15 - кількість зображень на сторінку
        if (currentPage === totalPages) {
            btnLoadMore.classList.add('is-hidden');
            iziToast.info({
                title: 'Info',
                message: 'We are sorry,but you have reached the end of search results',
            });
        }
        searchForm.reset();
    } catch (err) {
        console.log(err);
    }   finally {
        hideLoader();
    }
}
btnLoadMore.addEventListener('click', onLoadMoreBtn);






   
   






