

function sonidoAnimal(animal) {
    if (animal === "gato") {
        console.log("miau");
    }
    else if (animal === "perro") {
        console.log("guau");
    }
    else if (animal === "vaca") {
        console.log("muuu");
    }
    else if (animal === "cerdo") {
        console.log("oiñ");
    }
    else if (animal === "alpaca") {
        console.log("bmmm");
    }
    else {
        console.log("pspsps");
    }
}

function sonidoAnimalSwitch(animal) {

    switch (animal) {
        case "gato":
            console.log("miau");
            break;
        case "perro":
            console.log("guau");
            break;
        case "vaca":
            console.log("muuu");
            break;
        case "cerdo":
            console.log("oiñ");
            break;
        case "alpaca":
            console.log("bmmm");
            break;
        default:
            console.log("pspsps")
            break;
    }
}

const start = performance.now();
sonidoAnimal("tigre");
const stop = performance.now();
sonidoAnimalSwitch("tigre");
const end = performance.now();

console.log("IF STATEMENT", stop - start);
console.log("SWITCH STATEMENT", end - stop);

/* variables primitivas */
var num = 12;
var text = "Hola Mundo";
var logica = true;//false

/* variables no primitivas */
var numeros = [1, 48, 12, 10, 53, 31];
var contacto = {
    nombre: "Nestor",
    edad: 26,
    profesion: "Ingeniero Electrónico",
    graduado: true
}
//JSON  JavaScript Object Notation
console.log("------------------------------");
var aleatorio = 0;
while (aleatorio !== 5) {
    aleatorio = parseInt(Math.random() * 10);
    console.log(aleatorio);
}
console.log("------------------------------");
for (let index = 0; index < 12; index++) {
    console.log(index);
}

const inicio = performance.now();
console.log("------------------------------");
/* Iterador básico */
for (let index = 0; index < numeros.length; index++) {
    console.log(numeros[index]);
}
const basico = performance.now();
console.log("------------------------------");
/* Iterador directo */

for (const numero in numeros) {
    console.log(numeros[numero]);
}
const directo = performance.now();
console.log("------------------------------");
/* Metodos de arreglos */

numeros.forEach((value) => {
    console.log(value);
})
const metodo = performance.now();

console.log("Basico",basico-inicio);
console.log("Directo",directo-basico);
console.log("Metodo",metodo-directo);
