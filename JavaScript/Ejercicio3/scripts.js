const date = new Date();
const dia = document.getElementById("dia");
dia.innerText = date.getDate();
const mes = document.getElementById("mes");
mes.innerText = date.getMonth()+1;
const anyo = document.getElementById("anyo");
anyo.innerText = date.getFullYear();
const hora = document.getElementById("hora");

let horacompleta2 = setInterval(horas, 1000);

function horas() {
  let horaCompleta = new Date();
  hora.innerHTML = horaCompleta.toLocaleTimeString();
};


console.log(date.getTimezoneOffset());
console.log(date.getTime());

const activar = document.getElementById("activar");
activar.addEventListener("click", () => {
    let hora = document.getElementById("horaSonar").value;
    let min = document.getElementById("minSonar").value;
    let sonar;
    let horaSonar = hora - date.getHours();
    let minSonar = min - date.getMinutes();
    let opt;
    do {
        minSonar = minSonar * 60000;
    horaSonar = horaSonar * 3600000;

    console.log(minSonar)
    sonar = setInterval(() => {
            opt = confirm("Sonando la alarma, si deseas dormir 2 minutos más cancela. Si deseas desactivar la alarma acepta");

    }, minSonar + horaSonar);
    if (opt != true) {
        minSonar = 120000;
    }else {
        opt.removeEventListener();
    }
    console.log(opt)
    } while (opt == true);
    
});