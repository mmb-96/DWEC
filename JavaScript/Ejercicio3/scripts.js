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

const activar = document.getElementById("activar");
activar.addEventListener("click", () => {
    let hora = document.getElementById("horaSonar").value;
    let min = document.getElementById("minSonar").value;
    let horaSonar = hora - date.getHours();
    let minSonar = min - date.getMinutes();
    let opt;
    minSonar = minSonar * 60000;
    horaSonar = horaSonar * 3600000;
  
    
       let sonar = setInterval(() => {
            opt = confirm("Sonando la alarma, si deseas dormir 2 minutos más cancela. Si deseas desactivar la alarma acepta");
            if (opt == true) {
                clearInterval(sonar);
            }else if (opt == false){
                setTimeout(() => {
                    alert("Hora de levantarse");
                }, 120000);
                clearInterval(sonar);
            }
        }, minSonar + horaSonar);
});