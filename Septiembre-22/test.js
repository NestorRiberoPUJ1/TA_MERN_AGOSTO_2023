
/* Funciones */

function sumar(n1, n2) {

    return n1 + n2;
}

console.log(sumar(2, 3));


const add = (n1, n2) => n1 + n2;

console.log(add(2, 3));


function promedio(lista) {
    let avg = 0;
    lista.forEach(element => {
        avg += element;
    });
    return avg / lista.length
}

console.log(promedio([1, 2, 3]));

const average = (lista) => {
    let avg = 0;
    lista.forEach(element => {
        avg += element;
    });
    return avg / lista.length
}
console.log(average([3, 4, 5]));


/* Destructuración */

const contacto = {
    nombre: "Nestor",
    edad: 26,
    profesion: "Ingeniero Electrónico",
    musicales: {
        banda: true,
        rock: true,
        balad: true,
        metal: false,
    }
}


const { nombre, edad, profesion: ocupacion, musicales } = contacto;
const { banda, rock } = musicales;
console.log(rock);

const { profesion: persona, ...resto } = contacto;

console.log(persona);
console.log(resto);

/* Rest */

const perros = ["Pekines", "Pomeranio", "ShihTzu", "Maltes", "Poodle", "Pug"];

const [perro1, perro2, perro3, ...perritos] = perros;

console.log(perro3);
console.log(perritos);



/* Importancia */


const obj1 = {
    at1: 10,
    at2: 20,
}
const init = performance.now();
const obj2 = { ...obj1 };
const step = performance.now();
const obj3 = JSON.parse(JSON.stringify(obj1));
const end = performance.now();

console.log("Destructuracion", step - init);
console.log("JSON", end - step);

console.log(obj2);
obj1.at1 = 12;
console.log(obj2);
console.log(obj3);




const gatos = ["Garfield", "Tom", "Gato con Botas"];

const cats = [...gatos];

gatos.push("Silvestre");

console.log(cats);
