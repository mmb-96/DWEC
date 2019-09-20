const inicializar = () => {
    let nombres = [];
    let contador = 0;
    let anadir = true;

    do {
       let nombre =  prompt("Introduzca un nombre:");

       for(let nomb of nombres) {
           if (nomb == nombre) {
               alert("Nombre repetido:")
               anadir = false;
           }
       }

       if (anadir) {
           let nombreUpper= nombre.charAt(0).toUpperCase() + nombre.slice(1);
           nombres.push(nombreUpper);
           contador++;
       }
       anadir = true;

    } while (contador != 5);
    nombres.sort();
    console.log(nombres);
};