
const API_IMAGEN2 = 'https://image.tmdb.org/t/p/w200';

let urlPag = window.location.href;

let indice = window.location.href.indexOf('?');

let id = urlPag.substring(indice + 1, urlPag.length)
console.log(id);

const boxInfo = document.getElementById('contenedor-fondo');

getDescripcionMovie(id);

function getDescripcionMovie(idMovie){
    let API_INFO = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=128b82f8ca5b357f9e46e57d6455ae9b`;
    fetch(API_INFO).then(response => response.json()).then(movie => {
        console.log(movie);
        paintOverview(movie);
    })
};

function paintOverview(data){

    document.querySelector('.nameMovie').textContent = data.title;

    document.querySelector('.imgMovie').setAttribute('src', `${API_IMAGEN2}${data.poster_path}`)

    document.querySelector('.descripcion').textContent = data.overview

    document.querySelector('.vote').textContent += ` ${data.vote_average}`

    document.querySelector('.date').textContent += ` ${data.release_date}`

    fetch()


/*  boxInfo.innerHTML = `<div class="container-fluid bg-light" style="height:700px" id="InfoPelis">
    <h2 class="nameMovie">Movie Name</h2>
    <h3>${data.title}</h3
    <div class="single-info" id="overview">
        <div><img src="" alt=""></div>
        <span class="descripcion">Overview:</span>
        <p class="descripcion">${data.overview}</p>
    </div>
    <div class="single-info" id="rate">
        <span>Vote Average: </span>
        <span>${data.vote_average}</span>
    </div>
    <div class="single-info" id="release date">
        <span>Release Date: </span>
        <span>${data.release_date}</span>
    </div>
</div>` */

};
























