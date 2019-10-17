const lista = document.getElementById("nameHeroes");
const table = document.getElementById("tablaHeroes");

const button = document.getElementById("getData")
button.addEventListener('click', (e) => {
    e.preventDefault();
    getDataID(lista.value);
    
});

const getData = () => {
     
};

const getDataID = (ID) => {
    if (ID == 0) {
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
    } else {
        fetch('marvel.php?id='+ID)
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
                let tr = document.createElement("tr");
                let tdName = document.createElement("td");
                let tdGender = document.createElement("td");
                let tdFighting = document.createElement("td");
                let name = document.createTextNode(res[0].Name);
                let gender = document.createTextNode(res[0].Gender);
                let fighting = document.createTextNode(res[0].Fighting_Skills);
                tdName.appendChild(name);
                tdGender.appendChild(gender);
                tdFighting.appendChild(fighting);
                tr.appendChild(tdName);
                tr.appendChild(tdGender);
                tr.appendChild(tdFighting);
                table.appendChild(tr);
                console.log(res)
        });
    }
};