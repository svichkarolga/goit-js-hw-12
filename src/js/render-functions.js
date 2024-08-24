
export const createGalleryCardTemplate = (pictureInfo) => {
    return ` <li class="gallery-card">
                <a class="gallery-link" href="${pictureInfo.largeImageURL}">
                    <img class="gallery-img"
                    src="${pictureInfo.webformatURL}" 
                    data-source="${pictureInfo.largeImageURL}"
                    alt="${pictureInfo.tags}"
                    />
                </a>
                <div class="wrapper">
                    <ul class="img-content-wrapper">
					    <li class="text-info">Likes<span class="number">${pictureInfo.likes}</span></li>
					    <li class="text-info">Views<span class="number">${pictureInfo.views}</span></li>
					    <li class="text-info">Comments<span class="number">${pictureInfo.comments}</span></li>
					    <li class="text-info">Downloads<span class="number">${pictureInfo.downloads}</span></li>
                    </ul>
                </div>
            </li>`

};
 


