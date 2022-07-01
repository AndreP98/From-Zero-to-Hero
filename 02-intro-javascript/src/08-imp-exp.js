import { heroes } from './data/heroes';


const getHeroeByID = (id) => {
    return heroes.find (heroes => heroes.id === id)
}   // Puedes remover {return} para simplificar

 console.log (getHeroeByID(2) );


 const getHeroesByOwner = (owner) =>  heroes.filter ( (heroes) => heroes.owner === owner)
 //Metodo 2 notado arriba

 console.log(getHeroesByOwner("DC"))