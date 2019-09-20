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

const text = document.getElementById("texto");

text.addEventListener("keydown" ,() =>{
    console.log("Has pulsado una tecla.");
    console.log("Se ha pulasado la tecle: " + String.fromCharCode(event.keyCode));
});

text.addEventListener("keydown" ,() =>{
    console.log("Has soltado una tecla.");
});

const escrito = () => {
    const text = document.getElementById("text2");
}