import { JsonPixabayApi } from './index';
import { createImgCard } from './gallery';

const jsonPixabayApi = new JsonPixabayApi();

//search needed elements

const searchForm = document.querySelector('.search-form');
const galleryListEl = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');


//fetch arr from request + render images to galleryListEl

jsonPixabayApi
    .fetchFromAPi()
    .then(images => {
    console.log(images);        
    galleryListEl.innerHTML = createImgCard(images.hits);
    })
    .catch(err => {
        console.log(err);
    });
    
const onloadMoreClickFoo = event => {   
    jsonPixabayApi.page += 1;
    jsonPixabayApi.fetchFromAPi()
        .then(images => {
            galleryListEl.insertAdjacentHTML('beforeend', createImgCard(images.hits))
        console.log(images);
        })
        .catch(err => {
            console.log(err);
    })
}
loadMoreBtn.addEventListener('click', onloadMoreClickFoo);

console.log(loadMoreBtn);