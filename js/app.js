import { Pelicula } from "./classPelicula.js";

const formulario = document.querySelector('form');
console.log(formulario);

//datos formulario
let nombre = document.getElementById('nombre')  ;
let categoria = document.getElementById('categoria')  ;
let descripcion= document.getElementById('descripcion')  ;
let publicado= document.getElementById('subidoPagina')  ;

function limpiarFormulario() {
    formulario.reset();
}

const peliculas = [];


function crearContacto(e) {
    e.preventDefault()
    console.log("Desde funcion");   

    

const pelicula = new Pelicula(nombre.value , categoria.value , publicado.value ,descripcion.value);

peliculas.push(pelicula);
console.log(peliculas);
limpiarFormulario();

}



formulario.addEventListener('submit',crearContacto);