const lista = document.getElementById("nameHeroes");
const table = document.getElementById("tablaHeroes");
const button = document.getElementById("getData")
button.addEventListener('click', (e) => {
    e.preventDefault();
    if(lista.length == 0) {
       getData();
    } else {
        getDataID(lista.value);
    }
    
});

const getData = () => {
    fetch("marvel.php")
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        for (elemento of res) {
            let opt = document.createElement("option");
            opt.setAttribute("value",elemento.ID);
            let name = document.createTextNode(elemento.Name);
            opt.appendChild(name);
            lista.appendChild(opt);
        };
    }); 
};

const getDataID = (ID) => {
    
    fetch("marvel.php")
    .then( res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
            let tr = document.createElement("tr");
            let tdName = document.createElement("td");
            let tdGender = document.createElement("td");
            let tdFighting = document.createElement("td");
            let name = document.createTextNode(res[ID-1].Name);
            let gender = document.createTextNode(res[ID-1].Gender);
            let fighting = document.createTextNode(res[ID-1].Fighting_Skills);
            tdName.appendChild(name);
            tdGender.appendChild(gender);
            tdFighting.appendChild(fighting);
            tr.appendChild(tdName);
            tr.appendChild(tdGender);
            tr.appendChild(tdFighting);
            table.appendChild(tr);
    }); 
};