
/* Operador Ternario */

/* 
    variable1 = ?
    variable2: si variable1 es par entonces vale "par" y sino "impar"
*/

var variable1 = Math.round(Math.random() * 3);


var variable2;
if (variable1 % 2 === 0) {
    variable2 = "par";
}
else {
    variable2 = "impar";
}

var variable3 = variable1 % 2 === 0 ? "par" : "impar";


console.log("Condicional", variable1, variable2);
console.log("Ternario", variable1, variable3);

/* Funciones con ternario */


const isOdd = (num) => {
    if (num % 2 === 0) {
        return "odd";
    }
    return "even";
}

const isNotEven = (num) => num % 2 === 0 ? "odd" : "even";

isOdd(5);
isNotEven(5);


const range = (num) => {
    if (num < 10) {
        return "<10";
    }
    else if (num <= 20) {
        return "10-20";
    }
    else if (num <= 30) {
        return "20-30";
    }
    else if (num <= 40) {
        return "30-40";
    }
    else if (num <= 50) {
        return "40-50";
    }
    return ">50";
}

const rango = (num) => num < 10 ? "<10" : num <= 20 ? "10-20" : num <= 30 ? "20-30" : num <= 40 ? "30-40" : num <= 50 ? "40-50" : ">50";

const init = performance.now();
range(45);
const step = performance.now();
rango(45);
const end = performance.now();
console.log(step - init);
console.log(end - step);