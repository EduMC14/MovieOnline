
const API_KEY = '128b82f8ca5b357f9e46e57d6455ae9b';
const BASE_URL = 'https://api.themoviedb.org/3';

const API_URL = BASE_URL + '/genre/movie/list?api_key=' + API_KEY;

let containerGenres=document.getElementById('#containerGenres')

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


/*function paintMovies(data){
    const arrayMovies = data.d
    arrayMovies.map( (element) => {
        //console.log(element)
        const title = element.title
        const image = element.i.imageUrl
        const cast = element.s
        
        const poster = `
            <div>
                <img src="${image}" />
                <h2>${title}</h2>
                <small>${cast}</small>
            </div>            
        `
        document.getElementById('container').innerHTML += poster
    })
}*/
