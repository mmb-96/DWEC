//AJAX-JSON
/*const button = document.getElementById("button")
button.addEventListener('click', () => {
    let xhr;
    if (window.XMLHttpRequest) xhr = new XMLHttpRequest()
    else xhr = new ActiveXObject("Microsoft.XMLHTTP")
    
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
    xhr.addEventListener('load', (data) => {
        let datos = JSON.parse(data.target.response);
        const lista = document.getElementById("lista");
        for (elemento of datos) {
            let li = document.createElement("li");
            let idName = document.createTextNode(elemento.id + " - " + elemento.name);
            li.appendChild(idName);
            lista.appendChild(li);
        };
    });

    xhr.send();
    button.disabled = true;
});*/

const button = document.getElementById("button")
button.addEventListener('click', () => {
    const lista = document.getElementById("lista");
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        for (elemento of res) {
            let li = document.createElement("li");
            let idName = document.createTextNode(elemento.id + " - " + elemento.name);
            li.appendChild(idName);
            lista.appendChild(li);
        };
    });
    button.disabled = true;
});