import Notiflix from 'notiflix';
import { JsonPixabayApi } from './index';
import { createImgCard } from './gallery';

const jsonPixabayApi = new JsonPixabayApi();

//search needed elements

const searchForm = document.querySelector('.search-form');
const galleryListEl = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');


//fetch arr from request + render images to galleryListEl  

const onloadMoreClickFoo = e => {
    
    jsonPixabayApi.page += 1;
    jsonPixabayApi.fetchFromAPi()
        .then(images => { 
            galleryListEl.insertAdjacentHTML('beforeend', createImgCard(images.hits));
            loadMoreBtn.classList.remove('hidden');            
            if (jsonPixabayApi.page === images.totalHits) {
                return Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
                                
            }                   
        })
        .catch(err => {
            console.log(err);
    })
}

const onSubmitClickFoo = event => {
    event.preventDefault();    
    jsonPixabayApi.page = 1;   
    jsonPixabayApi.q = event.target.elements.searchQuery.value.trim();
    jsonPixabayApi.fetchFromAPi().then(images => {
        console.log(images);
        if (jsonPixabayApi.page === 0) {
            galleryListEl.innerHTML = ''
            return Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");{}
            
        }
        else if (jsonPixabayApi.page !== 1) {
            loadMoreBtn.classList.remove('hidden');
            galleryListEl.innerHTML = createImgCard(images.hits);
        }
        else {
        loadMoreBtn.classList.add('hidden');
            galleryListEl.innerHTML = createImgCard(images.hits);   
            
        }
                    
    }).catch(err => {
        console.log(err);
    })
}

loadMoreBtn.addEventListener('click', onloadMoreClickFoo);
searchForm.addEventListener('submit', onSubmitClickFoo);
