/* 

//Alertas en pantalla (funciones que les pasamos un parametro)
alert("Hola mundo");

*/

// Variables (espacio en memoria donde yo guardo un dato)
// -let- tiene mejor rendimiento que -var-
let nombre = "Fatima";

//Constantes (variables que no permiten cambios en su valor)
const apellido = "Gloria";

//Mostrar por consola
console.log(nombre);

//Concatenación
let concatenacion = nombre + " " + apellido;

//Imprimir información en un objeto o lugar especifico de la página (ej. div)
// (#datos se refiere al div donde queremos que se muestre, se "llama" de la misma forma que en css)
let datos = document.querySelector("#datos");
// script
datos.innerHTML = `
    <h1> Esta es la caja de datos </h1>
    <h2> Mi nombre es: ${concatenacion} </h2>
`;