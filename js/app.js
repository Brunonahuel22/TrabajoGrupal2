import { Pelicula } from "./classPelicula.js";

const formulario = document.querySelector('form');
console.log(formulario);

//datos formulario
let nombre = document.getElementById('nombre')  ;
let categoria = document.getElementById('categoria')  ;
let descripcion= document.getElementById('descripcion');
let publicado= document.getElementById('subidoPagina');
const peliculas = [];

function limpiarFormulario() {
    formulario.reset();
}
function guardarLocalStore() {
    localStorage.setItem('pelisKey',JSON.stringify(peliculas));
}




function crearContacto(e) {
    e.preventDefault()
    console.log("Desde funcion");   

    

const pelicula = new Pelicula(nombre.value , categoria.value , publicado.value ,descripcion.value);

peliculas.push(pelicula);
console.log(peliculas);
limpiarFormulario();
guardarLocalStore();

}



formulario.addEventListener('submit',crearContacto);