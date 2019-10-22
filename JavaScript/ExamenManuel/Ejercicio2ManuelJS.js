const listaUser = document.getElementById("nameUser");
const table = document.getElementById("tabaUser");
const consulta = document.getElementById("consulta");

//Evento que llama a una funcion.
consulta.addEventListener("click", (e) => {
    e.preventDefault();
    getData(listaUser.value);
});

//Funcion que tiene dos opciones. La primera si el id es vacio, carga los datos de usuario en un select.
//La segunda pregunta por el id del usuario, obtenemos dicho usuario y lo pintamos en una tabla.
const getData = (id) => {
    console.log(id)
    if ( id == "" ) {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            for (user of res) {
                let opt = document.createElement("option");
                opt.setAttribute("value",user.id);
                let name = document.createTextNode(user.name);
                opt.appendChild(name);
                listaUser.appendChild(opt);
            };
        });
    } else {
        fetch('https://jsonplaceholder.typicode.com/users?id='+id)
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
                //Creacion de tr y td necesatios para despues añadir a la tabla
                let tr = document.createElement("tr");
                let tdID = document.createElement("td");
                let tdName = document.createElement("td");
                let tdUsername = document.createElement("td");
                let tdEmail = document.createElement("td");
                let tdDir = document.createElement("td");
                let tdTlf = document.createElement("td");
                //Varibales para añadir a los td creados antes.
                let id = document.createTextNode(res[0].id);
                let name = document.createTextNode(res[0].name);
                let username = document.createTextNode(res[0].username);
                let email = document.createTextNode(res[0].email);
                let dir = document.createTextNode(res[0].address.street + " " + res[0].address.suite + " " + res[0].address.zipcode + " " + res[0].address.city);
                let tlf = document.createTextNode(res[0].phone);
                //Formamos la estructura para luego añadirla a la tabla.
                tdID.appendChild(id);
                tdName.appendChild(name);
                tdUsername.appendChild(username);
                tdEmail.appendChild(email);
                tdDir.appendChild(dir);
                tdTlf.appendChild(tlf);
                tr.appendChild(tdID);
                tr.appendChild(tdName);
                tr.appendChild(tdUsername);
                tr.appendChild(tdEmail);
                tr.appendChild(tdDir);
                tr.appendChild(tdTlf);
                table.appendChild(tr);
        });
    }
    
}