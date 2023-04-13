
class Cliente {
    constructor(nombre, rut, clave, saldo) {
        this.nombre = nombre;
        this.rut = rut;
        this.clave = clave;
        this.saldo = saldo;
    }
}

var cliente1 = new Cliente("Josefina Pérez", "153326355", "arroz", 50000);
var cliente2 = new Cliente("Jose González", "53876355", "perro", 100000);
var cliente3 = new Cliente("Pedro Sierra", "3876355", "gato", 80000);

alert("Bienvenido a Banco en linea");

var rutcliente = prompt("Ingrese su Rut sin guión, ejemplo: 137656785")

var clavecliente = prompt("Ingrese su clave")

var listaClientes = [cliente1, cliente2, cliente3]

var clienteValidado = validarcliente(rutcliente, clavecliente)

console.log(clienteValidado);


if (clienteValidado)
    do {
        {
            var opcion = prompt("Seleccione qué desea hacer: \n" +
                "1.- ver saldo \n" +
                "2.- realizar giro \n" +
                "3.- realizar depósito \n" +
                "4.- Salir \n"
            )

            switch (opcion) {
                case "1":
                    versaldo(clienteValidado.saldo);
                    console.log(clienteValidado);
                    alert("Su saldo es de " + "$" + clienteValidado.saldo);
                    break;
                case "2":
                    realizargiro(clienteValidado.saldo)
                    break;
                case "3":
                    realizardeposito(clienteValidado.saldo)

                    break;
                case "4":
                    alert("Gracias por Preferir nuestro Banco")
                    clienteValidado = false;
                    break;

                default:
                    alert("debe elegir una opción válida");
                    break;
            }

        };
    } while (clienteValidado);
      

function validarcliente(rutcliente, clavecliente) {
     var clienteValidado = listaClientes.filter(c => c.rut == rutcliente & c.clave == clavecliente)[0];
    if (clienteValidado) {
        alert("Bienvenida " + clienteValidado.nombre);
        return clienteValidado;
    } else {
        alert("Ha ingresado su rut o su contraseña de forma incorrecta, vuelva a intentarlo");
        return clienteValidado = false;
    }
}

function versaldo() {
    return clienteValidado.saldo

}
function realizargiro() {
    var giro = parseInt(prompt(`Su Saldo actual es de $ ${clienteValidado.saldo} \n Ingrese el monto que desea girar:`));

    clienteValidado.saldo = clienteValidado.saldo - giro
    alert(`Su nuevo saldo es de $" ${clienteValidado.saldo}`);
}
function realizardeposito() {
    var giro = parseInt(prompt(`Su Saldo actual es de $ ${clienteValidado.saldo} \n Ingrese el monto que desea depositar:`));
    clienteValidado.saldo = clienteValidado.saldo + giro;
    alert(`Depósito realizado. Su nuevo saldo es de $ ${clienteValidado.saldo}`);
}