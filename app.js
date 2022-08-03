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
        paintInfoPelis(data.results);
        arrBuscar.push(data.results);
        selectOption();
    }
    )
}
getMovies(API_URL, containerCarrusel);
getMovies(API_URL2, containerCarrusel2);

/*  <---- funcion Para Buscar Peli ---> */

let arrBuscar = [];

let btnSearch = document.querySelector('#btn_search');

let input = document.getElementById('inputSearch');


btnSearch.addEventListener('click', (event) => {
    event.preventDefault()
    
    for(let i = 0; i < arrBuscar.length; i++){
        for(let e = 0 ; e < arrBuscar[i].length; e++){
            if(arrBuscar[i][e].title === input.value){
            return Swal.fire({
                title: `${arrBuscar[i][e].title}`,
                text: 'Pelicula en Catalogo',
                imageUrl: `${API_IMAGEN}${arrBuscar[i][e].poster_path}`,
                imageWidth: 400,
                imageHeight: 300,
                imageAlt: 'Custom image',
            })
            }
    }
}
    
return Swal.fire({
    icon: 'error',
    title: 'Oops...Lo siento',
    text: 'No tenemos esta pelicula en el catalogo!'
})});



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

 //funcionalidad de las opciones del dropdown   
function selectOption(){
        let btn_accion=document.getElementById('Acción');
        let btn_animacion=document.getElementById('Animación')
        let btn_fantasia=document.getElementById('Fantasía')
        let btn_comedia=document.getElementById('Comedia')
        let btn_aventura=document.getElementById('Aventura')
        let btn_terror=document.getElementById('Terror')
        

        btn_accion.addEventListener('click', (e)=>{
        window.location='Pelisgenero.html?accion';
        })
        btn_animacion.addEventListener('click', (e)=>{
            window.location='Pelisgenero.html?animacion';
            })
        btn_fantasia.addEventListener('click', (e)=>{
            window.location='Pelisgenero.html?fantasia';
            })   
        btn_comedia.addEventListener('click', (e)=>{
            window.location='Pelisgenero.html?comedia';
            }) 
        btn_aventura.addEventListener('click', (e)=>{
            window.location='Pelisgenero.html?aventura';
            }) 
        btn_terror.addEventListener('click', (e)=>{
            window.location='Pelisgenero.html?terror';
            })

}


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

//Funcionalidad de la barra de búsqueda





