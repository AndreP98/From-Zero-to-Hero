
const arreglo = [1,2,3,4];

let arreglo2= [...arreglo,5];

//callback: function que se ejecuta dentro de un método
const arreglo3= arreglo2.map(function(numero){
    return numero *2

});

console.log( arreglo);
console.log( arreglo2);
console.log(arreglo3)