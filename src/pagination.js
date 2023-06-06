import Notiflix from 'notiflix';
import { JsonPixabayApi } from './index';
import { createImgCard } from './gallery';


// import SimpleLightbox from 'simplelightbox';axios
// import 'simplelightbox/dist/simple-lightbox.min.css';

// let gallery = new SimpleLightbox('.gallery a', { /* options */enableKeyboard: true, });


const jsonPixabayApi = new JsonPixabayApi();

//search needed elements

const searchForm = document.querySelector('.search-form');
const galleryListEl = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');


const onSubmitClickFoo = event => {
    event.preventDefault();    
    jsonPixabayApi.page = 1;   
    jsonPixabayApi.q = event.target.elements.searchQuery.value.trim();
    jsonPixabayApi.fetchFromAPi().then(({ data }) => {
        console.log(data);
        if (data.total === 0) {
            galleryListEl.innerHTML = ' ';
            return Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");{}
            
        }
        else if (data.total <= 40) {
            loadMoreBtn.classList.add('hidden');
            galleryListEl.innerHTML = createImgCard(data.hits);
        }
        else {
        loadMoreBtn.classList.remove('hidden');
        galleryListEl.innerHTML = createImgCard(data.hits);   
            
        }
                    
    }).catch(err => {
        console.log(err);
    })
}

const onloadMoreClickFoo = e => {
    
    jsonPixabayApi.page += 1;
    jsonPixabayApi.fetchFromAPi()
        .then(({ data }) => { 
            console.log(data);
            galleryListEl.insertAdjacentHTML('beforeend', createImgCard(data.hits));
            loadMoreBtn.classList.remove('hidden');            
            if (jsonPixabayApi.page === data.totalHits) {
                return Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
                                
            }                   
        })
        .catch(err => {
            console.log(err);
    })
}


loadMoreBtn.addEventListener('click', onloadMoreClickFoo);
searchForm.addEventListener('submit', onSubmitClickFoo);
