import { Pelicula } from "./classPelicula.js";

const formulario = document.querySelector('form');
console.log(formulario);

function crearContacto(e) {
    e.preventDefault()
    console.log("Desde funcion");   
}

formulario.addEventListener('submit',crearContacto);