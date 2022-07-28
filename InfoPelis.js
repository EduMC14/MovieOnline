
let urlPag = window.location.href;

let indice = window.location.href.indexOf('?');

let id = urlPag.substring(indice + 1, urlPag.length);
console.log(id);

const API_CAST = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=128b82f8ca5b357f9e46e57d6455ae9b`;
const API_IMAGEN2 = 'https://image.tmdb.org/t/p/w200';
const boxInfo = document.getElementById('contenedor-fondo');

const boxLista = document.querySelector('.list-cast')

getDescripcionMovie(id);

function getDescripcionMovie(idMovie){
    let API_INFO = `https://api.themoviedb.org/3/movie/${idMovie}?api_key=128b82f8ca5b357f9e46e57d6455ae9b`;
    fetch(API_INFO).then(response => response.json()).then(movie => {
        console.log(movie);
        paintOverview(movie);
    })
};
//container_fondo.style.background = `linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, 1)), url(${API_IMAGEN2 + data.poster_path})`


function paintOverview(data){
    
    let contenedor_fondo=document.getElementById('contenedor_fondo')
    contenedor_fondo.style.backgroundImage = `linear-gradient(to left, rgba(0, 0, 0, .1), rgba(0, 0, 0, 1)), url(${API_IMAGEN2 + data.poster_path})`

    document.querySelector('.nameMovie').textContent = data.title;

    document.querySelector('.imgMovie').setAttribute('src', `${API_IMAGEN2}${data.poster_path}`);

    document.querySelector('.descripcion').textContent = data.overview;

    document.querySelector('.vote').textContent += ` ${data.vote_average}`;

    document.querySelector('.date').textContent += ` ${data.release_date}`;

    fetch(API_CAST).then(response => response.json()).then( objCast => {
        console.log(objCast.cast[0].name);

        for (let index = 0; index < 5; index++) {
            let anchor = document.createElement('anchor');
            let li = document.createElement('li');
            li.innerHTML = `<a href='infoActores.html?${objCast.cast[index].id}'>${objCast.cast[index].name}</a> interpretando a ${objCast.cast[index].character}`
            anchor.appendChild(li)
            boxLista.appendChild(anchor)
        }
        
    });

};

























