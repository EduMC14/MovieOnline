
const API_KEY = '128b82f8ca5b357f9e46e57d6455ae9b';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/movie/popular?api_key=' + API_KEY;
const API_URL2 = BASE_URL + '/genre/movie/list?api_key=' + API_KEY;
const API_IMAGEN = 'https://image.tmdb.org/t/p/original/';

let containerGenres=document.getElementById('#containerGenres');
const main_grid = document.querySelector('div.movies-grid');
console.log(main_grid)

function getMovies(url){
    fetch(url).then(response => response.json()).then(data => {
        // console.log(data.results);
        keep_genres(data.results)
    })}

getMovies(API_URL)
//Géneros
let urlPag = window.location.href;
let indice = window.location.href.indexOf('?');
let genre_url = urlPag.substring(indice + 1, urlPag.length);
let genre_nombre='';

function keep_genres(data){
    if(genre_url==='accion'){
        genre_nombre=28;
    }else if(genre_url==='animacion'){
        genre_nombre=18;
    }else if(genre_url==='fantasia'){
        genre_nombre=14
    }else if(genre_url==='comedia'){
        genre_nombre=35
    }else if(genre_url==='aventura'){
        genre_nombre=12
    }
    let selected_films = data.filter(film => film.genre_ids.includes(genre_nombre) )
        console.log(selected_films)
        grid_films(selected_films)
        return selected_films
        }
    
function grid_films(selected_films){
    selected_films.forEach(feature => {
        const {title}=feature
        let film_id=feature.id;
        let film_titles=feature.title;
        let film_poster=feature.poster_path;
        //console.log(main_grid)
        /*let divMovie = document.querySelector('.img')
    divMovie.classList.add('box-pelis')
    divMovie.id = 'box-' + title
    divMovie.innerHTML = `
    <a href="#" id="link-pelis"><img src="${API_IMAGEN}${film_poster}" alt="${title}"></a>
    `
    main_grid.appendChild(divMovie)
    })*/
})}

