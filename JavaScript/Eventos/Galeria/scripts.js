/* cambiar el color a rojo y en vez de un puntero a una mano*/
const gale = document.getElementById("gallery");

gale.addEventListener("click" , (color) =>{
    color.target.classList.toggle("red");
});

/*gale.addEventListener("click" , (color) =>{
    color.target.classList.add("red");
});*/