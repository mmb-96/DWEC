const usuario1 = {
    name: 'Pepe',
    id: 1
}

const usuario2 = {
    name: 'Manuel',
    id: 2
}

const usuario3 = {
    name: 'Celia',
    id: 3
}

const usuario4 = {
    name: 'Anibal',
    id: 4
}

const usuario5 = {
    name: 'Marta',
    id: 5
}
let arryaUsuarios = [usuario1, usuario2, usuario3, usuario4, usuario5]

const getUser = (idUser, cb) => {
    let user = arryaUsuarios.findIndex(usuario => usuario.id == idUser);
    if (user == -1) cb('Not exist a user with id ' + idUser)
    else cb(null, arryaUsuarios[user])
};

const button = document.getElementById("send");
button.addEventListener("click", () => {
    let idUser = document.getElementById("idUser").value;
    getUser(idUser,(err,user) => {
        if(err) return console.log(err)
        else console.log ('El usuario con id ' + idUser +' es ' + user.name)
    });
});