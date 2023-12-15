export class Pelicula{
    #codigo
    #nombre
    #categoria
    #descripcion
    #publicado
    constructor (nombre,categoria,descripcion,publicado){
        this.#codigo = crypto.randomUUID();
        this.#nombre = nombre;
        this.#categoria = categoria;
        this.#descripcion = descripcion;
        this.#publicado = publicado;
    }

    get codigo(){
        return this.#codigo;
    }
    get nombre(){
        return this.#nombre;
    }
    get categoria(){
        return this.#categoria;
    }
    get descripcion(){
        return this.#descripcion;
    }
    get publicado(){
        return this.#publicado;
    }
    set codigo(nuevoCodigo){
         this.#codigo = nuevoCodigo;
    }
    set nombre(nuevonombre){
        this.#nombre = nuevonombre;
    }
    set categoria(nuevacat){
        this.#categoria = nuevacat;
    }
    set descripcion(nuevades){
        this.#descripcion =nuevades;
    }
    set publicado(nuevopu){
        this.#publicado = nuevopu;
    }
}