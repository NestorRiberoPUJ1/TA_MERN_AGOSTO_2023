/* Declaraciones */
var animal;
let tipo = "Pradera";
const pi = 31.141592;

/* Asignacion o modificación */

animal = "Chinchilla";
tipo = "Peruana";
//pi=4.92;  error no se pueden reasignar constantes;

/* Variables primitivas */

var nombre = "Nestor";   // Texto
var calificacion = 10; //numerica
var promedio = 9.75;  // numerico decimal
var graduado = true; //lógica o boolean


/* Variables no primitivas */

var bandas = ["grupo firme", "los enanitos verdes", "queen"];//Lista almacenar primitivos/no primitivos
console.log(bandas[1]);

var profesor = {
    nombre: "Nestor",
    edad: 26,
    profesion: "Ingeniero Electrónico",
    activo: true
}
console.log(profesor.profesion);
console.log(profesor["edad"]);

/* Variables anidadas / nested */
var contactos = [
    {
        nombre: "Nestor",
        telefono: "316428495"
    },
    {
        nombre: "Max",
        telefono: "1242412412"
    },
    {
        nombre: "George",
        telefono: "1241256553"
    },
    {
        nombre: "Carlos",
        telefono: "6588568566"
    },
    {
        nombre: "Sergio",
        telefono: "63463475986"
    }
];

console.log(contactos[3].telefono);


/* Funciones */

function saludar() {
    console.log("HOLA");
}
const despedires = () => {
    console.log("CHAO");
}

function dividir(dividendo, divisor) {
    return (dividendo / divisor);
}
const multiplicar = (producto1, producto2) => {
    return (producto1 * producto2);
}


saludar();

let division = dividir(8, 4);
console.log(division);

console.log(dividir(12, 3));

