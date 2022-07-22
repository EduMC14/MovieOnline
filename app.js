const API_KEY = '128b82f8ca5b357f9e46e57d6455ae9b';
const BASE_URL = 'https://api.themoviedb.org/3';

const API_URL = BASE_URL + '/movie/popular?api_key=' + API_KEY;


function getMovies(url){
    fetch(url).then(response => response.json()).then(data => {
        console.log(data);
    }
    )
}

let datos = getMovies(API_URL);

