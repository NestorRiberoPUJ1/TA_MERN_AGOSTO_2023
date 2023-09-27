
/* Funciones */

//Tradicional
function nombre(params) {
    console.log(params);
    return true;
}

//Flecha
const name = (params) => {
    console.log(params);
    return true;
}



var elemento = document.getElementById("elemento");

elemento.addEventListener("click", (e) => {
    console.log(e);
})


setTimeout(() => {
    console.log("Pasó 1 segundo")
}, 1000)
