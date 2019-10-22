const validatePasswordModerate = (password) => {
    //Should have 1 lowercase letter, 1 uppercase letter, 1 number, and be at least 8 characters long
    const passwordRegex = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/
    if(passwordRegex.test(password)) console.log('password vÃ¡lido')
    else console.log('password incorrecto')
}
validatePasswordModerate(document.getElementById("password").value);

//Arrya para guardar los usuarios y poder comprobar cual es el ultimo login
const userLogin = [];

//Evento para recoger los datos de un formulario. Crea un objeto que lo vamos a almacenar en la memoria local del navegador.
const buttonAlta = document.getElementById("alta");
buttonAlta.addEventListener('click', (e) => {
    e.preventDefault();
    let nick = document.getElementById("user").value;
    //Funcion feccha, para poder almacenar la fecha de alta.
    const date = new Date();
    //Creacion de un objeto tipo usuario.
    const usuario = {
        name: document.getElementById("name").value,
        password: document.getElementById("password").value,
        dni: document.getElementById("dni").value,
        edad: document.getElementById("edad").value,
        fechaAlta: date.getDate()+"-"+date.getMonth()+1+"-"+ date.getFullYear()+" "+ date.toLocaleTimeString()
    }
    //Añade al array los usuario logeado.
    userLogin.push(usuario);
    localStorage.setItem(nick, JSON.stringify(usuario));
});

//Evento para limpiar todo lo almacenado en la memoria local del navegador.
const buttonDelFull = document.getElementById("borrarTodo");
buttonDelFull.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear(); 
});

//Evento que llama a una funcion para consultar los datos de un usuario
const buttonDelUser = document.getElementById("consultarUsuario"); 
buttonDelUser.addEventListener('click', (e) => {
    e.preventDefault();
    let user = localStorage.getItem(document.getElementById("user").value);
    crearTabla(user);

});

const texto = document.getElementById("parrafo")
//Evento que consulta el ultimo usuario logeado.
//Llama a una funcion con la que conseguimos la fecha del ultimo login
//LLamamos a un callback para devolver el usuario con diche fecha sacada en funcion.
const buttonGet = document.getElementById("consultarUltimoLogin"); //ver tema fecha
buttonGet.addEventListener('click', (e) => {
    e.preventDefault();
    let idUser = comprobarFecha();
    getUser(idUser,(err,user) => {
        if(err) return console.log(err)
        let usser = document.createTextNode('El usuario con nombre ' + user.name +', contraseña ' + user.password + ', dni ' + user.dni + ' y su edad ' +user.edad + 'ha sido el ultimo en logearse');
        let p = document.createElement("p");
        p.appendChild(usser);
        texto.appendChild(p);
    });
});

//Funciona que hace que se muestre la tabla y añade un nodo hijo a ella.
const spanTabla = document.getElementById("tabla");
const crearTabla = (user) => {
    //Cambia la visibilidad de la tabla
    spanTabla.style.visibility = 'visible';
    //Divide el string por comillas y lo convierte en un array para trabajar con ello.
    user = user.split('"');
    //Creacion de tr y td necesatios para despues añadir a la tabla
    let tr = document.createElement("tr");
    let tdName = document.createElement("td");
    let tdPassword = document.createElement("td");
    let tdDni = document.createElement("td");
    let tdEad = document.createElement("td");
    //Varibales para añadir a los td creados antes.
    let name = document.createTextNode(user[3]);
    let pass = document.createTextNode(user[7]);
    let dni = document.createTextNode(user[11]);
    let edad = document.createTextNode(user[15]);
    //Formamos la estructura para luego añadirla a la tabla.
    tdName.appendChild(name);
    tdPassword.appendChild(pass);
    tdDni.appendChild(dni);
    tdEad.appendChild(edad);
    tr.appendChild(tdName);
    tr.appendChild(tdPassword);
    tr.appendChild(tdDni);
    tr.appendChild(tdEad);
    spanTabla.appendChild(tr);
}

//Funcion que obtiene la fecha más reciente, de todos los logeos.
const comprobarFecha = () =>{
    let fechaComprobar;
    for (user of userLogin) {
        let fechaUsuario = user.fechaAlta
        if (fechaComprobar <= fechaUsuario) {
            fechaComprobar = fechaUsuario;
        } else if (fechaComprobar == undefined){
            fechaComprobar = fechaUsuario;
        }
    };
    return fechaComprobar;
};

//Callback que utilizaremos para sacar el usuario con la fecha mas reciente a partir de la fecha obtenida en el metodo anteior.
const getUser = (fecha, cb) => {
    let user = userLogin.findIndex(usuario => usuario.fechaAlta == fecha);
    if (user == -1) cb('No existe ningun usuario')
    else cb(null, userLogin[user])
};