const listaAlignment = document.getElementById("alignmentHeroes");
const table = document.getElementById("tablaHeroes");
const radioGenderMale = document.getElementById("genderMale");
const radioGenderFemale = document.getElementById("genderFemale");
const button = document.getElementById("getData")
button.addEventListener('click', (e) => {
    e.preventDefault();
    getData(listaAlignment.value);   
});

const getData = (ID) => {
    if (ID == null) {
        let alignmentArray = [];
        fetch("marvel.php")
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            for (elemento of res) {
                if (!alignmentArray.includes(elemento.Alignment)) {
                    let opt2 = document.createElement("option");
                    let alignment = document.createTextNode(elemento.Alignment);
                    opt2.appendChild(alignment);
                    listaAlignment.appendChild(opt2);
                    alignmentArray.push(elemento.Alignment);
                }
               
            }
        });
    } else {
        const alignmentSelect = listaAlignment.value;
        if (radioGenderMale.checked){
            genderSelect = radioGenderMale.value;
        } else {
            genderSelect = radioGenderFemale.value;
        }

        fetch('marvel.php?alignment='+alignmentSelect+'&&gender='+genderSelect)
        .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
        .then(res => res.json())
        .then(res => {
            for (elemento of res) {
                let tr = document.createElement("tr");
                let tdName = document.createElement("td");
                let tdAlignment = document.createElement("td");
                let tdGender = document.createElement("td");
                let tdFighting = document.createElement("td");
                let name = document.createTextNode(elemento.Name);
                let alignment = document.createTextNode(elemento.Alignment);
                let gender = document.createTextNode(elemento.Gender);
                let fighting = document.createTextNode(elemento.Fighting_Skills);
                tdName.appendChild(name);
                tdAlignment.appendChild(alignment);
                tdGender.appendChild(gender);
                tdFighting.appendChild(fighting);
                tr.appendChild(tdName);
                tr.appendChild(tdAlignment);
                tr.appendChild(tdGender);
                tr.appendChild(tdFighting);
                table.appendChild(tr);
            }
        });
    }
};