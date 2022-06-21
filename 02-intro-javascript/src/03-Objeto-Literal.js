const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion:{
        ciudad: 'New York',
        
    }
};

console.log( persona );

//clonar 
const persona2 = {...persona};
persona2.nombre = 'Peter';
