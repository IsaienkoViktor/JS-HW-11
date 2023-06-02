import { JsonPixabayApi } from './index';

const jsonPixabayApi = new JsonPixabayApi();

jsonPixabayApi.fetchFromAPi().then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });
    