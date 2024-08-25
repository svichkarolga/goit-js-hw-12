import{a as g,S as w,i}from"./assets/vendor-38cc1e54.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();g.defaults.baseURL="https://pixabay.com/api";const p=(s,t)=>{const a={params:{key:"45436198-db4764fd7ddf19e0d061d1cf8",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}};return g.get("/",a)},f=s=>` <li class="gallery-card">
                <a class="gallery-link" href="${s.largeImageURL}">
                    <img class="gallery-img"
                    src="${s.webformatURL}" 
                    data-source="${s.largeImageURL}"
                    alt="${s.tags}"
                    />
                </a>
                <div class="wrapper">
                    <ul class="img-content-wrapper">
					    <li class="text-info">Likes<span class="number">${s.likes}</span></li>
					    <li class="text-info">Views<span class="number">${s.views}</span></li>
					    <li class="text-info">Comments<span class="number">${s.comments}</span></li>
					    <li class="text-info">Downloads<span class="number">${s.downloads}</span></li>
                    </ul>
                </div>
            </li>`,n=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),h=document.querySelector(".loader"),m=document.querySelector(".js-load-more");let l=1,d="",y=0;const L=new w(".js-gallery a",{overlay:!0,captionsData:"alt",overlayOpacity:.8,captionDelay:250,focus:!0});function b(){h.classList.remove("is-hidden")}function v(){h.classList.add("is-hidden")}const S=async s=>{b();try{s.preventDefault(),d=n.elements.user_query.value,l=1;const t=await p(d,l);if(d===""){i.warning({title:"Caution",message:"Input field must not be empty",position:"topLeft"});return}if(t.data.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}),c.innerHTML="",n.reset();return}const a=t.data.hits.map(e=>f(e)).join("");c.innerHTML=a;const o=c.querySelector("li");console.log(o.getBoundingClientRect()),y=o.getBoundingClientRect().height,m.classList.remove("is-hidden"),L.refresh()}catch{i.error({title:"Error",message:"Illegal operation"})}finally{v()}n.reset()};n.addEventListener("submit",S);const q=async s=>{b();try{l++;const t=await p(d,l);console.log(t);const a=t.data.hits.map(e=>f(e)).join("");c.insertAdjacentHTML("beforeend",a),scrollBy({top:y*2,behavior:"smooth"}),L.refresh();const o=Math.ceil(t.data.totalHits/15);l===o&&(m.classList.add("is-hidden"),i.info({title:"Info",message:"We are sorry,but you have reached the end of search results"})),n.reset()}catch(t){console.log(t)}finally{v()}};m.addEventListener("click",q);
//# sourceMappingURL=commonHelpers.js.map
