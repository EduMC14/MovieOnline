
const API_KEY = '128b82f8ca5b357f9e46e57d6455ae9b';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/movie/popular?api_key=' + API_KEY;
const API_URL2 = BASE_URL + '/genre/movie/list?api_key=' + API_KEY;
const API_IMAGEN = 'https://image.tmdb.org/t/p/original/';

let containerGenres=document.getElementById('#containerGenres');
const main_grid_title = document.querySelector('.favorites h1');
const main_grid = document.querySelector('.favorites .movies-grid');
//console.log(main_grid)

function getMovies(url){
    fetch(url).then(response => response.json()).then(data => {
        // console.log(data.results);
        keep_genres(data.results)
        //paintInfoPelis(selected_films)
    })}

getMovies(API_URL)


//traer las peliculas por géneros
let urlPag = window.location.href;
let indice = window.location.href.indexOf('?');
let genre_url = urlPag.substring(indice + 1, urlPag.length);
let genre_nombre='';

function keep_genres(data){
    if(genre_url==='accion'){
        genre_nombre=28;
        genre_url='Acción';
    }else if(genre_url==='animacion'){
        genre_nombre=16;
        genre_url='Animación';
    }else if(genre_url==='fantasia'){
        genre_nombre=14;
        genre_url='Fantasía';
    }else if(genre_url==='comedia'){
        genre_nombre=35
        genre_url='Comedia';
    }else if(genre_url==='aventura'){
        genre_nombre=12;
        genre_url='Aventura';     
    }else if(genre_url==='terror'){
        genre_nombre=27;
        genre_url='Terror';     
    }

    let selected_films = data.filter(film => film.genre_ids.includes(genre_nombre) )
        console.log(selected_films)
        grid_films(selected_films)
        paintInfoPelis(selected_films) 
        return selected_films
}

//pintar las tarjetas con las películas
function grid_films(selected_films){
    selected_films.forEach(feature => {
        const {title, poster_path,overview,rate}=feature
        let film_id=feature.id;
        let film_titles=feature.title;
        let film_poster=feature.poster_path;
        
        
        main_grid_title.innerText = genre_url
        main_grid.innerHTML = selected_films.map(e => {
            //console.log(e.title)
            
            return `
            <div class="card" id="data-${e.id}">
                <div class="img">
                    <img src="${API_IMAGEN + e.poster_path}">
                </div>
                <div class="info">
                    <h2>${e.title}</h2>
                    <div class="single-info">
                        <span>Rate: </span>
                        <span>${e.vote_average} / 10</span>
                    </div>
                    <div class="single-info">
                        <span>Release Date: </span>
                        <span>${e.release_date}</span>
                    </div>
                </div>
            </div>
        `
        }).join('')

    })
}

function paintInfoPelis(selected_films) {
    selected_films.forEach(movie => {
        const { title, id } = movie
        let film_poster = document.getElementById('data-' + id)
        console.log(film_poster)
        film_poster.addEventListener('click', () => {
            window.location = `InfoPelis.html?${id}`;
        })
    })
}
