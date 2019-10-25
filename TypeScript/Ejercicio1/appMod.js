// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = function (nombre, edad) {
    nombre: nombre;
    edad: edad;
};
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
// Convertir esta funcion a una funcion de flecha
var resultadoDoble = function (a, b) {
    return (a + b) * 2;
};
console.log(resultadoDoble(2, 2));
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
var getAvenger = function (nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un  " + arma;
    }
    return mensaje;
};
console.log(getAvenger("Manuel", "superior"));
console.log(getAvenger("Manuel", "superior", "puños"));
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
var rectangulo = /** @class */ (function () {
    function rectangulo(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    rectangulo.prototype.calcula = function () {
        var area;
        area = this.base * this.altura;
        return area;
    };
    return rectangulo;
}());
var prueba = new rectangulo(8, 2);
console.log(prueba.calcula());
