const user = document.getElementById("usuario");
const pass = document.getElementById("pass");

const buttonAlta = document.getElementById("alta");
buttonAlta.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.setItem(usuario.value, pass.value);
});

const buttonDelFull = document.getElementById("borrarTodo");
buttonDelFull.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.clear(); 
});

const buttonDelUser = document.getElementById("borrarUsuario");
buttonDelUser.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem(user.value);
});

const buttonGet = document.getElementById("recuperarPass");
buttonGet.addEventListener('click', (e) => {
    e.preventDefault();
    let usua = user.value;
    let pass = localStorage.getItem(usua);
    alert("La contrasela del usuario " + usua + " es " + pass);
});