import Notiflix from 'notiflix';

import { JsonPixabayApi } from './index';
import { createImgCard } from './gallery';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let gallery = new SimpleLightbox('.gallery a', { /* options */
    enableKeyboard: true,
    docClose: true,
    scrollZoom: true
});


const jsonPixabayApi = new JsonPixabayApi();

//search needed elements

const searchForm = document.querySelector('.search-form');
const galleryListEl = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');


//on submit click

searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();   
    if (event.target.elements.searchQuery.value.trim() === '') {
        return Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
    }
    jsonPixabayApi.page = 1;   
    jsonPixabayApi.q = await event.target.elements.searchQuery.value.trim();
    await jsonPixabayApi.fetchFromAPi().then(({ data }) => {
        console.log(data);
        if (data.total === 0) {
            galleryListEl.innerHTML = ' ';
            loadMoreBtn.classList.add('hidden');
            return Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
            
        }
        else if (data.total <= 40) {
            Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
            loadMoreBtn.classList.add('hidden');
            galleryListEl.innerHTML = createImgCard(data.hits);
        }
        else {
        Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
        loadMoreBtn.classList.remove('hidden');
        galleryListEl.innerHTML = createImgCard(data.hits);  
        gallery.refresh();    
            
        }
                    
    }).catch(err => {
        console.log(err);
    })
})

//on loadMore click

loadMoreBtn.addEventListener('click', async (e) =>{
    
    jsonPixabayApi.page += 1;
    await jsonPixabayApi.fetchFromAPi()
        .then(({ data }) => { 
            
            if (data.totalHits < jsonPixabayApi.page * 40) {
                loadMoreBtn.classList.add('hidden'); 
                
                galleryListEl.insertAdjacentHTML('beforeend', createImgCard(data.hits));
                gallery.refresh();
                
               return Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
                                
            }   
            galleryListEl.insertAdjacentHTML('beforeend', createImgCard(data.hits));
            loadMoreBtn.classList.remove('hidden');
            gallery.refresh();
                            
        })
        .catch(err => {
            console.log(err);
    })
})





//backup code

// const onSubmitClickFoo = event => {
//     event.preventDefault();   
//     if (event.target.elements.searchQuery.value.trim() === '') {
//         return Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
//     }
//     jsonPixabayApi.page = 1;   
//     jsonPixabayApi.q = event.target.elements.searchQuery.value.trim();
//     jsonPixabayApi.fetchFromAPi().then(({ data }) => {
//         console.log(data);
//         if (data.total === 0) {
//             galleryListEl.innerHTML = ' ';
//             loadMoreBtn.classList.add('hidden');
//             return Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again.");
            
//         }
//         else if (data.total <= 40) {
//             Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
//             loadMoreBtn.classList.add('hidden');
//             galleryListEl.innerHTML = createImgCard(data.hits);
//         }
//         else {
//         Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
//         loadMoreBtn.classList.remove('hidden');
//         galleryListEl.innerHTML = createImgCard(data.hits);  
//         gallery.refresh();    
            
//         }
                    
//     }).catch(err => {
//         console.log(err);
//     })
// }

// //on loadMore click
// const onloadMoreClickFoo = e => {
    
//     jsonPixabayApi.page += 1;
//     jsonPixabayApi.fetchFromAPi()
//         .then(({ data }) => { 
//             // console.log(data);
//             if (data.totalHits < jsonPixabayApi.page * 40) {
//                 loadMoreBtn.classList.add('hidden'); 
//                 // console.log(data.hits);
//                 galleryListEl.insertAdjacentHTML('beforeend', createImgCard(data.hits));
//                 gallery.refresh();
//                 // console.log(1);
//                return Notiflix.Notify.failure("We're sorry, but you've reached the end of search results.");
                                
//             }   
//             galleryListEl.insertAdjacentHTML('beforeend', createImgCard(data.hits));
//             loadMoreBtn.classList.remove('hidden');
//             gallery.refresh();
                            
//         })
//         .catch(err => {
//             console.log(err);
//     })
// }

// //add eventListeners
// loadMoreBtn.addEventListener('click', onloadMoreClickFoo);
// searchForm.addEventListener('submit', onSubmitClickFoo);