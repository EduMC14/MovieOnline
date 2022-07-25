const API_KEY = '128b82f8ca5b357f9e46e57d6455ae9b';
const BASE_URL = 'https://api.themoviedb.org/3';

const API_URL = BASE_URL + '/movie/popular?api_key=' + API_KEY;

const API_IMAGEN = 'https://image.tmdb.org/t/p/original/'

const containerCarrusel = document.querySelector('.carrusel');
//const popup_container = document.querySelector('.popup-container')




function getMovies(url){
    fetch(url).then(response => response.json()).then(data => {
         console.log(data.results);
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

        //localStorage.setItem('movieTitle', movie.title); 
        
        let film_poster = document.getElementById('box-'+title)
        //console.log(film_poster)
        film_poster.addEventListener('click', (e)=>{
            localStorage.setItem('movieTitle', e.target.title); 
            window.location="InfoPelis.html"; 
        })
    })
}

//let movieOver =localStorage.getItem('title');


/*function add_click_effect_to_card (cards) {
    cards.forEach(card => {
        card.addEventListener('click', () => show_popup(card))
    })
}*/


/*async function show_popup (card) {
    popup_container.classList.add('show-popup')
    popup_container.style.background = `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, 1)), url(${image_path + movie.poster_path})`

    popup_container.innerHTML = `
            <span class="x-icon">&#10006;</span>
            <div class="content">
                <div class="left">
                    <div class="poster-img">
                        <img src="${API_IMAGEN}${poster_path}" alt="${title}">
                    </div>
                    <div class="single-info">
                        <span>Add to favorites:</span>
                        <span class="heart-icon">&#9829;</span>
                    </div>
                    <div class="right">
                        <h1>${movie.title}</h1>
                    </div>
                    <div class="genres">
                        <h2>Genres</h2>
                        <ul>
                            ${movie.genres_ids.map(e => `<li>${e.name}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="overview">
                        <h2>Overview</h2>
                        <p>${movie.overview}</p>
                    </div>
                </div>
            </div>`
}*/