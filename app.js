const API_KEY = '128b82f8ca5b357f9e46e57d6455ae9b';
const BASE_URL = 'https://api.themoviedb.org/3';

const API_URL = BASE_URL + '/movie/popular?api_key=' + API_KEY;
const API_URL2 = BASE_URL + '/movie/top_rated?api_key=' + API_KEY;

const API_IMAGEN = 'https://image.tmdb.org/t/p/original/';

const containerCarrusel = document.querySelector('.carrusel');
const containerCarrusel2 = document.querySelector('.carrusel-topRank')

function getMovies(url, containerPaint){
    fetch(url).then(response => response.json()).then(data => {
        // console.log(data.results);
        paintMovies(data.results, containerPaint);
        paintInfoPelis(data.results)
    }
    )
}

getMovies(API_URL, containerCarrusel);
getMovies(API_URL2, containerCarrusel2);


function paintMovies(data,containerPaint){
    data.forEach(movie => {
        const {title, poster_path} = movie
    let divMovie = document.createElement('div')
    divMovie.classList.add('box-pelis')
    divMovie.id = 'box-' + title
    divMovie.innerHTML = `
    <a href="#" id="link-pelis"><img src="${API_IMAGEN}${poster_path}" alt="${title}"></a>
    `
    containerPaint.appendChild(divMovie)
    });
}





//dropdown de películas en el header
$(document).ready( function() {
    $('.dropdown-toggle').dropdown();
    });

/* import {getData} from './InfoPelis'; */

function paintInfoPelis(data){
    data.forEach(movie => {
        const  {title, id} = movie
        // let film_poster = document.querySelector('#box-'+title);
        let film_poster = document.getElementById('box-'+title)
        //console.log(film_poster)
        film_poster.addEventListener('click', ()=>{
        window.location=`InfoPelis.html?${id}`;
        
        })
    })
}

//let movieOver =localStorage.getItem('title');



/* function keep_in_local_storage(data){

    data.forEach(movie => {

        const {overview, title, release_date, id} = movie
        // let film_poster = document.querySelector('#box-'+title);
        let film_poster = document.getElementById('box-'+title)
        //console.log(film_poster)
        film_poster.addEventListener('click', ()=>{
            window.location="InfoPelis.html";
            let movieObj = new CreatMovieObj(title,overview,release_date,id);
            localStorage.setItem('objMovie', JSON.stringify(movieObj));
        })
    })
}


class CreatMovieObj{
    constructor(title, overview,release_date,id){
        this.title = title;
        this.overview = overview;
        this.release_date = release_date;
        this.movie_id = id;
    }
}; */


