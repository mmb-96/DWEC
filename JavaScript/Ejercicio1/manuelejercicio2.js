function addElement() {
   let lista = document.getElementById("lista");

   let pos = document.getElementById("posicion").value;
   let nombre = document.getElementById("nombre").value;

   let text = document.createTextNode(nombre);
   
   let li = document.createElement("li");
   li.appendChild(text);

   let posnew = document.getElementsByTagName("li")[pos-1];

   lista.insertBefore(li, posnew);


}

function deletElement() {
    let lista = document.getElementById("lista");
    let pos = document.getElementById("posicion").value;

    nodoBorrar = document.getElementsByTagName("li")[pos-1];
    lista.removeChild(nodoBorrar);
}