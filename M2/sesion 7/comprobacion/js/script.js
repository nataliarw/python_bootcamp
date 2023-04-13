/*//declaracion de variables
//variable global
var identificador1 = "valor"; //string texto
var identificador2 = 10; //int - numero entero
var identificador3 = 10.5; //float - numero decimal
var identificador4 = true; // boolean true or false
var identificador5 = 'c'; //character - 1caracter

//variable local cualquier valor de arriba
let variablelocal1 = "valor";
let variablelocal2 = 10;
let variablelocal3 = 10.5;
let variablelocal4 = false;
let variablelocal5 ='c'

console.log (identificador1)
para ingreso de datos se unsa promt
*/
var num1, num2
do {
    var opcion = prompt("Seleccione qué desea hacer: \n" +
        "1.- Calcular cuál número es mayor \n" +
        "2.- Sumar \n" +
        "3.- Restar \n" +
        "4.- Multiplicar \n" +
        "5.- Dividir \n" +
        "6.- Mostrar los números ingresados \n" +
        "7.- Salir")
    
    if (opcion !=7 && opcion >= 1 && opcion <7) {
        num1 = parseInt(prompt("Ingrese un número"))
        num2 = parseInt(prompt("Ingrese un segundo número"))
    } 
    
    switch (opcion) {
        case "1":
            mayor(num1, num2)
            break;
        case "2":
            suma(num1, num2)
    
            break;
        case "3":
            resta(num1, num2)
    
            break;
        case "4":
            Multiplicar(num1, num2)
    
            break;
        case "5":
            Dividir(num1, num2)
    
            break;
        case "6":
            Mostrar(num1, num2)
            break;
        case "7":
            alert("Gracias por participar")
            break;
    
        default:
            alert("Elección incorrecta, Adios!")
            break;
    }
    
} while (opcion != "7");

function mayor(numero1, numero2) {
    if (numero1 > numero2) {
        alert("El número " + numero1 + " es mayor que " + numero2)
    } else if (numero1 === numero2) {
        alert("Los números son iguales")

    } else (
        alert("El número " + numero2 + " es mayor que " + numero1)
    )
}
function suma(numero1, numero2) {
    var suma = numero1 + numero2
    alert("La suma de los números es " + suma)

}
function resta(numero1, numero2) {
    var resta = numero1 - numero2
    alert("La resta de los números es " + resta)

}
function Multiplicar(numero1, numero2) {
    var multipli = numero1 * numero2
    alert("La multiplicación de los números es " + multipli)

}
function Dividir(numero1, numero2) {
    var divi = numero1 / numero2
    alert("La multiplicación de los números es " + divi)
}
function Mostrar(numero1, numero2) {
    alert("Los números ingresados son " + numero1 + " y " + numero2)

}

