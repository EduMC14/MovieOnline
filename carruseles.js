const fila = document.querySelector('.box-car');

const flechaIzquierda = document.getElementById('flecha-izquierda')
const flechaDerecha = document.getElementById('flecha-derecha')

flechaDerecha.addEventListener('click', () => {
    fila.scrollLeft += fila.offsetWidth;
})

flechaIzquierda.addEventListener('click',() => {
    fila.scrollLeft -= fila.offsetWidth;
})


const filaCalifiacadas = document.querySelector('.box-car-topRank');

const flechaIzquierdaCal = document.querySelector('.flecha-izquierda-cal');
const flechaDerechaCal = document.querySelector('.flecha-derecha-cal');

flechaDerechaCal.addEventListener('click', () => {
    filaCalifiacadas.scrollLeft += fila.offsetWidth;
})

flechaIzquierdaCal.addEventListener('click',() => {
    filaCalifiacadas.scrollLeft -= fila.offsetWidth;
})