
const API_KEY = '128b82f8ca5b357f9e46e57d6455ae9b';
const BASE_URL = 'https://api.themoviedb.org/3';

const API_URL = BASE_URL + '/genre/movie/list?api_key=' + API_KEY;
const API_URL2 = BASE_URL + '/genre/movie/list?api_key=' + API_KEY;
const API_IMAGEN = 'https://image.tmdb.org/t/p/w500/';
let containerGenres=document.getElementById('#containerGenres');
const main_grid = document.querySelector('div.movies-grid');
console.log(main_grid)


function getGenres(url){
    fetch(url).then(response => response.json()).then(data => {
        console.log(data);
         //console.log(data[id.2)
        paintMovies(data);
        //keep_in_local_storage(data.results);
    }
    )
}

getGenres(API_URL);



