var saludar = function (nombre) {
    console.log("Hola " + nombre);
};
saludar("Manuel");
var prueba = function (numero, parDefec, parOpc) {
    if (parDefec === void 0) { parDefec = "defecto"; }
    if (parOpc == undefined) {
        return "El cuadrado de n\u00FAmero es " + numero + " y " + parDefec;
    }
    else {
        return "El cuadrado de n\u00FAmero es " + numero + " y " + parDefec + " y " + parOpc;
    }
    ;
};
console.log(prueba(4, "hola"));
console.log(prueba(4, "hola", "prueba"));
