import { JsonPixabayApi } from './index';
import { createImgCard } from './gallery';

const jsonPixabayApi = new JsonPixabayApi();

//search needed elements

const searchForm = document.querySelector('.search-form');
const galleryListEl = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load');

const onloadMoreclickFoo = event => {
    console.log('hello');
}

loadMoreBtn.addEventListener('click', onloadMoreclickFoo);

console.log(loadMoreBtn);

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
    
