const verImg = document.getElementById("verImg")
const buttonImg = document.getElementById("img");
buttonImg.addEventListener("click", (e) => {
    e.preventDefault();
    fetch("Horario.png")
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.blob())
    .then(res => {
        const img = document.createElement("img");
        img.src = window.URL.createObjectURL(res);
        verImg.appendChild(img);
    }); 
});

const verPDF = document.getElementById("verPDF")
const buttonPDF = document.getElementById("pdf");
buttonPDF.addEventListener("click", (e) => {
    e.preventDefault();
    fetch("Ejercicios_DNS_-_Manuel_Melero.pdf")
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.blob())
    .then(res => {
        const iframe = document.createElement("iframe");
        iframe.setAttribute("width","1024")
        iframe.setAttribute("height","800")
        iframe.src = window.URL.createObjectURL(res);
        verPDF.appendChild(iframe);
    }); 
});