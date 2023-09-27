
const inicioDeCarrera = (resolve, reject) => {
    const waitTime = Math.random() * 5000;
    if (waitTime > 3000) {
        reject("CARRERA DEMORADA POR LLUVIA");
    } else {
        setTimeout(() => {
            resolve("INICIANDO CARRERA");
        },);
    }

}


const promise = new Promise((resolve, reject) => {
    inicioDeCarrera(resolve, reject);
});
console.log(promise);


setTimeout(() => {
    console.log(promise);
}, 6);

promise
    .then((value) => {
        console.log("RESULTADO:", value);
    })
    .catch(function (error) {
        console.log("ERROR:", error);
    })