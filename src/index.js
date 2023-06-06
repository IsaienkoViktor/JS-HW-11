import axios from 'axios';

export class JsonPixabayApi {
    static URL = 'https://pixabay.com/api/';
    static API = '36975301-73934ce38cce9a2bf3ac84bc9';

    constructor() {
        this.page = null;       
        this.q = null
    }
    async fetchFromAPi() {
        const searchParams = new URLSearchParams({
         key: JsonPixabayApi.API,
         q: this.q,
         image_type: 'photo',              
         page: this.page,
         per_page: 40,         
         orientation: 'horizontal',
         safesearch: true,        
         
    });
        // return axios.get(`${JsonPixabayApi.URL}?${searchParams}`)
        return await axios.get(`${JsonPixabayApi.URL}?${searchParams}`)
        //     .then(response => {
        //     if (!response.ok) {
        //         throw new Error(response.status)
        //     }
        //     return response.json();
        // })
    
    }
}


