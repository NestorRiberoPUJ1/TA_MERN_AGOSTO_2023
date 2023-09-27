


function incrementar(event) {
    console.log(event.target.innerHTML);
    event.target.innerHTML = parseInt(event.target.innerHTML) + 1;
}

function subir(elemento) {
    console.log(elemento.innerHTML);
    elemento.innerHTML = parseInt(elemento.innerHTML) + 1;
}


var elemento = document.getElementById("btn");
var num = document.getElementById("num");

num.addEventListener("click", incrementar);


/* var interval = setInterval(function () {
    num.innerHTML = parseInt(num.innerHTML) + 1;
}, 1000) */



const aumentar = (elemento, callbackFn) => {
    /* Logica */
    callbackFn(elemento);
    /* Logica */
}

var interval = setInterval(function () {
    aumentar(num, subir);
}, 1000)


setTimeout(() => {
    clearInterval(interval);
}, 30000)