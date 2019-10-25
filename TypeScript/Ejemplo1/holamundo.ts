const saludar = (nombre:string) => {
    console.log(`Hola ${nombre}`);
};
saludar("Manuel");

const prueba = (numero:number, parDefec:string="defecto", parOpc?:string) => {
    if (parOpc == undefined) {
        return `El cuadrado de número es ${numero} y ${parDefec}`;
    } else {
        return `El cuadrado de número es ${numero} y ${parDefec} y ${parOpc}`;
    };
};
console.log(prueba(4,"hola"));
console.log(prueba(4,"hola","prueba"));