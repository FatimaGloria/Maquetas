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
    <hr/> 
    <h1> Esta es la caja de datos </h1>
    <h2> Mi nombre es: ${concatenacion} </h2>
`;

//Condiciones

let altura = 187;

if (altura >= 185){
    datos.innerHTML += "<h1> Eres una persona alta </h1>";
} else{
    datos.innerHTML += "<h1> Eres una persona no muy alta </h1>"
}

//Bucles
//  Estructura for
for(inicializador; condicion; incrementador){
    //condicion
}

for (let year = 2000; year <= 2023; year++) {
    datos.innerHTML += `<h2>Estamos en el año: ${year} </h2>`;  
}

//Arrays "coleccion de variables"
let nombres = ["Victor", "Francisco","Pepe"];
let divNombres = document.querySelector("#nombres");

divNombres.innerHTML = nombres[0];

//  mostrar nombres en automatico.

divNombres.innerHTML = "<h1> Lista de nombres </h1><ul>"

//      funcion que va a recibir un valor (nombre)
nombres.forEach(nombre => {
    divNombres.innerHTML += "<li> +nombre+ </li>"
});

for(let nombre of nombres)
    divNombres.innerHTML += "<li> +nombre+ </li>"
});

divNombres.innerHTML += "</ul>"

//Funciones
// variable = (paramétros) flecha llaves
const miInformacion = (nombre, altura) => {
//codigo que cada vez que se use la funcion se va a ejecutar.
    let misDatos = `
    <hr/> 
    <h1> Esta es la caja de datos </h1>
    <h2> Mi nombre es: ${nombre} </h2>
    <h3> Mi estatura es: ${altura} </h3>    
    `;

    return misDatos; //Que regrese o imprima esa información.
}

//     invocar la función y agregarle los parametros.
console.log(miInformacion("Victor", 187));

// funcion que imprima a pantalla
const Imprimir = () => {
    let datos = document.querySelector("#datos");
    //innerHTML sobre escribe la info a menos que se agregue +=
    datos.innerHTML = miInformacion("Victor", 187)
}

Imprimir();