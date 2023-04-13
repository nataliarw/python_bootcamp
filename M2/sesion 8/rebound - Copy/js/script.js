/

class Cliente {
    constructor(nombre, rut, clave, saldo)
    {this.nombre = nombre
    this.rut = rut
    this.clave = clave
    this.saldo = saldo}
}
var cliente1 = new Cliente ("Josefina", "153326355", "arroz", 50000)
var cliente2 = new Cliente ("Jose", "53876355", "perro", 100000)
var cliente3 = new Cliente ("Pedro", "73324565", "gato", 80000)

alert("Bienvenido a Banco en linea");
var rutcliente = prompt("Ingrese su Rut sin guión, ejemplo: 137656785")
var clave = propmt ("Ingrese su clave")

var listacliente= {cliente1, cliente2, cliente3}


for (let index = 0; index < listacliente.length; index++) {
    if (listacliente[index][""] == identificador) {
        alert("el webon existe")


