class Usario {
    constructor (nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName(){
        console.log( `${this.nombre} ${this.apellido}`)
    }

    addMascota(mascotaNombre){
        this.mascotas.push(mascotaNombre)
    }

    countMascotas(){
        console.log(this.mascotas.length)
    }

    addBook(newNombreLibro, newAutor){
        this.libros.push({nombreLibro:newNombreLibro, autor:newAutor})
    }

    getBookNames(){
        const map = this.libros.map(i => i.nombreLibro)
        return map
    }
}