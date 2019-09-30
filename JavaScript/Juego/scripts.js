let baraja = ["1Bastos","1Copas","1Espadas","1Oros","2Bastos","2Copas","2Espadas","2Oros","3Bastos","3Copas","3Espadas","3Oros","4Bastos","4Copas","4Espadas","4Oros","5Bastos","5Copas","5Espadas","5Oros","6Bastos","6Copas","6Espadas","6Oros","7Bastos","7Copas","7Espadas","7Oros","8Bastos","8Copas","8Espadas","8Oros","9Bastos","9Copas","9Espadas","9Oros","10Bastos","10Copas","10Espadas","10Oros"]
let barajaSelec = [];
const carta = document.getElementById("trasera");
const cartaJugador = document.getElementById("delanteraJugador");
const cartaBanca = document.getElementById("delanteraBanca");
let pos;
let contadorJug = 0;
let contadorBanca = 0;
let numCarta;
let salir = false;
const resulJugador = document.getElementById("contJugador");
const resulBanca = document.getElementById("conBanca");
const plantar = document.getElementById("plantar");

plantar.addEventListener("click", () => {
    do {
    pos = Math.round(Math.random()*40);
    cartaAleatoria = baraja[pos];

    if (contadorBanca < contadorJug && contadorBanca < 7.5) {
        if (!barajaSelec.includes(cartaAleatoria)){
            barajaSelec.push(cartaAleatoria);
    
            numCarta = cartaAleatoria.slice(0,2);
            if(numCarta != "10") {
                numCarta = numCarta.slice(0,1);            
            }
            if(parseInt(numCarta) > 7) {
                contadorBanca += 0.5;
            } else {
                contadorBanca += parseInt(numCarta);
            }
        }
    }
    else {
        salir = true;
    }
    cartaBanca.style.visibility = 'visible';
    cartaBanca.src = "imagenes/" + cartaAleatoria + ".jpg";

    resulBanca.innerHTML = contadorBanca;
        
    } while (!salir);
    ganadorPartida();
});

let cartaAleatoria;

carta.addEventListener("click", () => {

    let ganador = document.getElementById("ganador").textContent;

    if (contadorJug < 7.5 && ganador =="") {
        pos = Math.round(Math.random()*40);
        cartaAleatoria = baraja[pos];

        if (barajaSelec.includes(cartaAleatoria)){
            pos = Math.round(Math.random()*40);
            cartaAleatoria = baraja[pos];
        }

        cartaJugador.style.visibility = 'visible';
        cartaJugador.src = "imagenes/" + cartaAleatoria + ".jpg";

        barajaSelec.push(cartaAleatoria);

        numCarta = cartaAleatoria.slice(0,2);
        if(numCarta != "10") {
            numCarta = numCarta.slice(0,1);            
        }
        if(parseInt(numCarta) > 7) {
            contadorJug += 0.5;
        } else {
            contadorJug += parseInt(numCarta);
        }
    } 
    
    resulJugador.innerHTML = contadorJug;

    if(contadorJug > 7.5){
        carta.src = "imagenes/trasera.jpg";
        plantar.disabled = true;
        ganadorPartida();
    };
});

const reload2 = document.getElementById("reload");
reload2.addEventListener("click", () =>{
    window.location.reload()
});

const ganadorPartida = () => {
    let banca = "Ha ganado la banca";
    let jugador = "Has ganado!";
    let ganador = document.getElementById("ganador");

    if(contadorBanca == contadorJug){
        ganador.innerHTML = banca;
    }else if (contadorBanca > contadorJug && contadorBanca <= 7.5) {
        ganador.innerHTML = banca;
    }else if ( contadorJug > 7.5 ){
        ganador.innerHTML = banca;
    }else{
        ganador.innerHTML = jugador;
    }
};