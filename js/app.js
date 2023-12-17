import { Pelicula } from "./classPelicula.js";

const formulario = document.querySelector("form");
console.log(formulario);

//datos formulario
let nombre = document.getElementById("nombre");
let categoria = document.getElementById("categoria");
let descripcion = document.getElementById("descripcion");
let publicado = document.getElementById("subidoPagina");
const peliculas = [];

function limpiarFormulario() {
  formulario.reset();
}
function guardarLocalStore() {
  localStorage.setItem("pelisKey", JSON.stringify(peliculas));
}

function crearContacto(e) {
  e.preventDefault();
  const pelicula = new Pelicula(nombre.value,categoria.value,publicado.value,descripcion.value);
  peliculas.push(pelicula);
  console.log(nombre.value);
  console.log(categoria.value);
  
  guardarLocalStore();

  
  //agregar texto a tabla
  const nuevaCelda = document.createElement('tr');
  if (publicado.value == 'Si' || publicado.value == 'si') {
    nuevaCelda.innerHTML = ` <th scope="row">${crypto.randomUUID()}</th>
  <td>${nombre.value}</td>
  <td>${categoria.value}</td>
  <td>
    <p>
    ${descripcion.value}
    </p>
  </td>
  <td>
    <i
      <i
      class="bi bi-file-earmark-excel-fill fs-4 text-danger"
    ></i>
  </td>
  <td >
    <button type="button" title="Editar" class="btn lapiz fs-4">
      <i class="bi bi-pencil-square"></i>
    </button>
    <button
      type="submit"
      title="Destacar"
      class="btn estrella fs-4"
    >
      <i class="bi bi-star-fill"></i>
    </button>
    <button type="button" title="Eliminar" class="btn tacho fs-4">
      <i class="bi bi-trash-fill"></i>
    </button>
  </td>`; 
  }else{
    nuevaCelda.innerHTML = ` <th scope="row">${crypto.randomUUID()}</th>
  <td>${nombre.value}</td>
  <td>${categoria.value}</td>
  <td>
    <p>
    ${descripcion.value}
    </p>
  </td>
  <td>
    <i
      <i
      class="bi bi-file-earmark-excel-fill fs-4 text-success"
    ></i>
  </td>
  <td >
    <button type="button" title="Editar" class="btn lapiz fs-4">
      <i class="bi bi-pencil-square"></i>
    </button>
    <button
      type="submit"
      title="Destacar"
      class="btn estrella fs-4"
    >
      <i class="bi bi-star-fill"></i>
    </button>
    <button type="button" title="Eliminar" class="btn tacho fs-4">
      <i class="bi bi-trash-fill"></i>
    </button>
  </td>`; 
  }


  const contenedorPadre = document.querySelector("tbody");
  contenedorPadre.appendChild(nuevaCelda);
  
}

formulario.addEventListener("submit", crearContacto);
