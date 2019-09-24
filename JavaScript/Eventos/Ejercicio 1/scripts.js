//Ejercicio 1
const caja = document.getElementById("box");

caja.addEventListener("mouseenter" ,() => {
    caja.style.background = "green";
});

caja.addEventListener("mouseleave" ,() => {
    caja.style.background = "red";
});

caja.addEventListener("mousedown" ,() => {
    console.log("Has pulsado la caja.");
});

caja.addEventListener("mouseup" ,() => {
    console.log("Has soltado el botón izquierdo dentro de la caja.");
});

//Ejercicio 2
const text = document.getElementById("texto");

text.addEventListener("keydown" ,() =>{
    console.log("Has pulsado una tecla.");
    console.log("Se ha pulasado la tecla: " + event.key);
});

text.addEventListener("keyup" ,() =>{
    console.log("Has soltado una tecla.");
});

//Ejercicio 3
let cadena;

const  button = document.getElementById("boton");
button.addEventListener('click', () => {
    const text = document.getElementById("text2");
    text.addEventListener("keyup" ,() =>{
        let letra = event.key;
        if (cadena == undefined) {
            cadena = letra;
        } else {
            cadena += letra;
        }
        console.log(letra)
        console.log(cadena);
    });
});
