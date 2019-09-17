function modificarNodo() {
    let nuevoNodo = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");

    let pos = document.getElementById("posicion").value;
    let equipo = document.getElementById("equipo").value;
    let puntos = document.getElementById("puntos").value;

    let pos1 = document.createTextNode(pos);
    let equi  = document.createTextNode(equipo);
    let pun = document.createTextNode(puntos);

    td1.appendChild(pos1);
    td2.appendChild(equi);
    td3.appendChild(pun);
    nuevoNodo.appendChild(td1);
    nuevoNodo.appendChild(td2);
    nuevoNodo.appendChild(pun);

    antiguoNodo = document.getElementsByTagName("tr")[pos];

    antiguoNodo.parentNode.replaceChild(nuevoNodo, antiguoNodo);
}