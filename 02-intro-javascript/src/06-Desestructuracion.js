 //Desestucturacion

 const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan'

 }

 const retornaPersona = ( { clave, nombre, edad, rango = 'Capitan' } ) => {

 return {
    nnombreClave : clave,
    anios:edad
 }

}

const {nnombreClave, anios} = retornaPersona (persona);

console.log(nnombreClave, anios);