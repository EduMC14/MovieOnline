/*const apiKey='128b82f8ca5b357f9e46e57d6455ae9b';
const BASE_URL = 'https://api.themoviedb.org/3';

const api_url = BASE_URL + '/movie/popular?api_key=' +apikey;

const API_IMAGEN = 'https://image.tmdb.org/t/p/original/';*/

const containerFondo=document.querySelector('#contenedor_fondo');



async function getInformation(){
    let overview = await fetch('https://api.themoviedb.org/3/tv/1?api_key=128b82f8ca5b357f9e46e57d6455ae9b');
    overview = await overview.json()
    console.log(await overview.overview)
  }
  
  getInformation();