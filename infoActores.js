
let urlID =window.location.href;

let index = window.location.href.indexOf('?');

let idActor = urlID.substring(index + 1, urlID.length);
console.log(idActor);

let API_IMGACTOR = 'https://image.tmdb.org/t/p/w300';
let API_ACTORS = 'https://api.themoviedb.org/3/person/';
let key = 'api_key=128b82f8ca5b357f9e46e57d6455ae9b'

let listPelis = document.querySelector('.list-pelis');

getActor(idActor);


/* <----- Funcion para obtener los datos de los actores ------> */
function getActor(id){
    fetch(`${API_ACTORS}${id}?${key}`).then(response => response.json()).then(actor => {
        paintActor(actor);
        
    })
};

/* <------ Funcion para maquetar datos del actor -----> */
function paintActor(data){

    document.querySelector('.nombre').textContent = data.name;
    document.querySelector('#imgActor').setAttribute('src', `${API_IMGACTOR}${data.profile_path}`);
    document.querySelector('.biografia').textContent = data.biography;
    document.querySelector('.cumpleaños').textContent = data.birthday;
    document.querySelector('.lugar').textContent =data.place_of_birth;

    
};

/* <------ Funcion para obtener en las peliculas que ha participado ----> */

getPeliculasPar();
function getPeliculasPar(){
    fetch(`http://api.themoviedb.org/3/discover/movie?with_cast=${idActor}&sort_by=release_date.asc&${key}&page=1`).then(response => response.json()).then(response => {
        console.log(response.results);
        paintParticipaciones(response.results);
        //paintInfoPelis3(response.results);
    }) 
}

function paintParticipaciones(objPar){
    console.log(objPar);
    for (let index = 0; index < 5; index++) {
        let liActor = document.createElement('li');
        liActor.classList.add('li-par')
        liActor.innerHTML = `<img src='${API_IMGACTOR}${objPar[index].poster_path}' class='imgParActor'> <span>${objPar[index].title}</span>`;
        listPelis.appendChild(liActor);
    };
};


/*function paintInfoPelis3(data){
    response.forEach(film=> {
       const  {title, id} = film
       let film_poster3 = document.getElementById('li-par'+id)
        console.log(film_poster3)
        film_poster3.addEventListener('click', ()=>{
       window.location=`InfoPelis.html?${id}`;
                 })
     }) }*/