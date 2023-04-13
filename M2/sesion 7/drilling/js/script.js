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

var numero1 = prompt("Ingrese un número");
var numero2 = prompt("Ingrese un segundo número");
// cambiar de string a numero
numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

//calcular el mayor como if, else; else if; switchcase
if(numero1 > numero2){
    alert("El número " + numero1 + " es mayor que " + numero2)
}else if(numero1 === numero2){
    alert("Los números son iguales")

}else(
    alert("El número " + numero2 + " es mayor que " + numero1)
)
