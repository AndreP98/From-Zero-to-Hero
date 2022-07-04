
 import { getHeroeByID } from "./08-imp-exp";

// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
       
//         const heroe = getHeroeByID(2);
//         resolve (heroe);
//         // reject ('No se pudo encontrar el heroe ');
//     }, 2000);

// });

// promesa.then( (heroe) =>{
//     console.log('heroe', heroe)
// })
// .catch (err => console.warn( err ));

const getHeroeByIDAsync = (id ) =>{

  return new Promise((resolve, reject) => {

        setTimeout(() => {
           
            const heroe = getHeroeByID(id);
            if (heroe) {
                resolve (heroe);
            } else {
                reject ('No se pudo encontrar el Heroe');
            }
          
        }, 2000);
    
    });

    
}

getHeroeByIDAsync(4)
.then ( console.log )
.catch( console.warn);