import{a as f,S as w,i as c}from"./assets/vendor-38cc1e54.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const m of r.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&o(m)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();f.defaults.baseURL="https://pixabay.com/api";const p=async(s,t)=>{try{const a={params:{key:"45436198-db4764fd7ddf19e0d061d1cf8",q:s,image_type:"photo",orientation:"horizontal",safesearch:"true",page:t,per_page:15}};return await f.get("/",a)}catch(a){throw console.error("Error fetching images:",a),a}},y=s=>` <li class="gallery-card">
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
            </li>`,n=document.querySelector(".js-search-form"),d=document.querySelector(".js-gallery"),L=document.querySelector(".loader"),g=document.querySelector(".js-load-more");let l=1,u="",b=0;h();setTimeout(i,3e3);const v=new w(".js-gallery a",{overlay:!0,captionsData:"alt",overlayOpacity:.8,captionDelay:250,focus:!0});function h(){L.classList.remove("is-hidden")}function i(){L.classList.add("is-hidden")}const S=async s=>{h(),setTimeout(i,3e3);try{s.preventDefault(),u=n.elements.user_query.value,l=1;const t=await p(u,l);if(u===""){c.warning({title:"Caution",message:"Input field must not be empty",position:"topLeft"});return}if(t.data.hits.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"bottomRight"}),d.innerHTML="",n.reset();return}const a=t.data.hits.map(e=>y(e)).join("");d.innerHTML=a;const o=d.querySelector("li");console.log(o.getBoundingClientRect()),b=o.getBoundingClientRect().height,g.classList.remove("is-hidden"),v.refresh()}catch{c.error({title:"Error",message:"Illegal operation"})}finally{i()}n.reset()};n.addEventListener("submit",S);const T=async s=>{h(),setTimeout(i,3e3);try{l++;const t=await p(u,l);console.log(t);const a=t.data.hits.map(e=>y(e)).join("");d.insertAdjacentHTML("beforeend",a),scrollBy({top:b*2,behavior:"smooth"}),v.refresh();const o=Math.ceil(t.data.totalHits/15);l>=o&&(g.classList.add("is-hidden"),c.info({title:"Info",message:"We are sorry,but you have reached the end of search results"})),n.reset()}catch(t){console.log(t)}finally{i()}};g.addEventListener("click",T);
//# sourceMappingURL=commonHelpers.js.map
