// import Notiflix from 'notiflix';

// const request = {
//     URL: 'https://pixabay.com/api/',
//     API: '36975301-73934ce38cce9a2bf3ac84bc9',    
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
// }

export class JsonPixabayApi {
    static URL = 'https://pixabay.com/api/';
    static API = '36975301-73934ce38cce9a2bf3ac84bc9';

    constructor() {
        this.page = null;       
        this.q = null
    }
    fetchFromAPi() {
        const searchParams = new URLSearchParams({
         key: JsonPixabayApi.API,
         q: this.q,
         image_type: 'photo',              
         page: this.page,
         per_page: 40,         
         orientation: 'horizontal',
         safesearch: true,        
         
    });

        return fetch(`${JsonPixabayApi.URL}?${searchParams}`)
            .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json();
        })
    
    }
}

// https://pixabay.com/api/?key=36975301-73934ce38cce9a2bf3ac84bc9&q=yellow+flowers&image_type=photo


// export class UnsplashAPI {
//   static BASE_URL = 'https://api.unsplash.com';
//   static API_KEY = 'LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc';

//   constructor() {
//     this.page = null;
//     this.query = null;
//   }

//   fetchPhotosByQuery() {
//     const searchParams = new URLSearchParams({
//       query: this.query,
//       page: this.page,
//       per_page: 20,
//       orientation: 'portrait',
//       client_id: UnsplashAPI.API_KEY,
//     });

//     return fetch(`${UnsplashAPI.BASE_URL}/search/photos?${searchParams}`).then(response => {
//       if (!response.ok) {
//         throw new Error(response.status);
//       }

//       return response.json();
//     });
//   }
// }

