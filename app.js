const API_KEY = '128b82f8ca5b357f9e46e57d6455ae9b';
const BASE_URL = 'https://api.themoviedb.org/3';

const API_URL = BASE_URL + '/movie/popular?api_key=' + API_KEY;

const API_IMAGEN = 'https://image.tmdb.org/t/p/original/'

const containerCarrusel = document.querySelector('.carrusel');


function getMovies(url){
    fetch(url).then(response => response.json()).then(data => {
         //console.log(data.results);
        paintMovies(data.results);
        keep_in_local_storage(data.results);
    }
    )
}

getMovies(API_URL);


function paintMovies(data){
    data.forEach(movie => {
        const {title, poster_path} = movie
    let divMovie = document.createElement('div')
    divMovie.classList.add('box-pelis')
    divMovie.id = 'box-' + title
    divMovie.innerHTML = `
    <a href="#"><img src="${API_IMAGEN}${poster_path}" alt="${title}"></a>
    `
    containerCarrusel.appendChild(divMovie)
    });
}

//dropdown de películas en el header
$(document).ready( function() {
    $('.dropdown-toggle').dropdown();
    });


function keep_in_local_storage(data){
    data.forEach(movie => {
        const {title, overview} = movie
        console.log(movie.genre_ids)

        localStorage.setItem('movieTitle', movie.title); 
        
        let film_poster = document.getElementById('box-'+title)
        //console.log(film_poster)
        film_poster.addEventListener('click', (e)=>{
            window.location="InfoPelis.html"; 
        })
    })
}


