const dniEmpleados = ['77332344K', '23445677J', '12345678H'];
contar();

function contar(){

    let tr = document.getElementsByTagName("tr");
    let contador = tr.length;
    document.getElementById("contador").innerHTML = contador - 1;

};

const newEmpleado = () => {

    let numemple = prompt("Introduzca el número de empleado:");
    let dni = prompt("Introduzca el DNI del empleado:");
    let nombre = prompt("Introduzca el nombre del empleado:");
    let apellidos = prompt("Introduzca los apellidos del empleado:");

    if (numemple !== null && numemple.length > 0 && dni !== null && dni.length > 0 && nombre !== null && nombre.length > 0 && apellidos !== null && apellidos.length > 0) {
        if (!dniEmpleados.includes(dni)) {
            let tr = document.createElement("tr");
            let tdnum = document.createElement("td");
            let tddni = document.createElement("td");
            let tdnombre = document.createElement("td");
            let tdapellidos = document.createElement("td");
    
            table.appendChild(tr);
            tr.appendChild(tdnum);
            tr.appendChild(tddni);
            tr.appendChild(tdnombre);
            tr.appendChild(tdapellidos);
    
            tdnum.innerHTML = numemple;
            tdapellidos.innerHTML = apellidos;
            tdnombre.innerHTML = nombre;
            tddni.innerHTML = dni;
            dniEmpleados.push(dni);
            contar();
        }else{
            alert("El dni introducido ya existe.");
        }
    } else {
        alert("Debes introducir todos los valores.");
    }
    
};

const delEmpleado = () => {

    let dni = prompt('Escribe un DNI para borrar a un empleado:');
    
    if(dniEmpleados.includes(dni)){
        let posicionBorrar = dniEmpleados.indexOf(dni);
        table.deleteRow( posicionBorrar +1);
        
        dniEmpleados.splice(posicionBorrar, 1);
        
        contar();
    }else{
        alert('El DNI no existe.');
    }
};

const modEmpleado = () => {

    let dni = prompt("Introduzca el DNI del empleado:");

    if ( dni !== null && dni.length > 0 ) {
        if(dniEmpleados.includes(dni)){

            let pos = dniEmpleados.indexOf(dni)+1;

            let tr = document.createElement("tr");
            let tdnum = document.createElement("td");
            let tddni = document.createElement("td");
            let tdnombre = document.createElement("td");
            let tdapellidos = document.createElement("td");
            
            let dniobj = document.createTextNode(dni);
            let numemple = document.createTextNode(prompt("Introduzca el número de empleado:"));
            let nombre  = document.createTextNode(prompt("Introduzca el nombre del empleado:"));
            let apellidos = document.createTextNode(prompt("Introduzca los apellidos del empleado:"));

            tdnum.appendChild(numemple);
            tddni.appendChild(dniobj);
            tdnombre.appendChild(nombre);
            tdapellidos.appendChild(apellidos);

            tr.appendChild(tdnum);
            tr.appendChild(tddni);
            tr.appendChild(tdnombre);
            tr.appendChild(tdapellidos);


            antiguoNodo = document.getElementsByTagName("tr")[pos];

            antiguoNodo.parentNode.replaceChild(tr, antiguoNodo);

        }else{
            alert('El empleado a modificar no existe.');
        }
    } else {
        alert("Debes introducir todos los valores.");
    }
};