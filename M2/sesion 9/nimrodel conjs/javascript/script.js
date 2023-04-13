
$(document).ready(function () {
    $("#submitReservaModal").click(function (e) {
        //Evitando cualquier evento por default que tenga el formulario
        e.preventDefault();

        //Obteniendo los valores de los input del html, para el formulario de reserva
        //Se estan obteniendo a traves del id
        var nombre = $("#nombreReservaModal").val();
        var correo = $("#correoReservaModal").val();
        var telefono = $("#telefonoReservaModal").val();
        var fecha = $("#fechaReservaModal").val();
        var hora = $("#horaReservaModal").val();
        var asistentes = $("#asistentesReservaModal").val();

        //validar formulario y si no dar alertas de que los campos no pueden estar vacios y son obligatorios
        if (nombre.trim() === "") {
            var alertDiv = createAlert('El campo nombre es obligatorio');
            modal.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        } else if (correo == "" || correo == null) {
            // alert("El campo correo es obligatorio")
            var alertDiv = createAlert('El campo correo es obligatorio');
            modal.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        } else if (telefono == "") {
            // alert("El campo telefono es obligatorio")
            var alertDiv = createAlert('El campo telefono es obligatorio');
            modal.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        } else if (fecha == "") {
            // alert("El campo fecha es obligatorio")
            var alertDiv = createAlert('El campo fecha es obligatorio');
            modal.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        } else if (hora == "") {
            // alert("El campo hora es obligatorio")
            var alertDiv = createAlert('El campo hora es obligatorio');
            modal.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        } else if (asistentes == "") {
            // alert("El campo asistentes es obligatorio")
            var alertDiv = createAlert('El campo asistentes es obligatorio');
            modal.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        } else {
            alert("Estimado/a " + nombre + ", agradecemos por reservar con nosotros. Hemos" + "\n" + " registrado " + asistentes + " asistentes. Se ha enviado el codigo de confirmacion al " + "\n" + "correo " + correo + "\n" + "Gracias por preferirnos")
        }
        // $("#exampleModal").modal("hide");
    })

    // Crear un nuevo elemento de alerta
    function createAlert(message) {
        var alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-danger';
        alertDiv.textContent = message;
        return alertDiv;
    }
    // Obtener el elemento por id reservaModal
    var modal = document.getElementById('reservaModal');

    // Función para borrar la última alerta añadida
    function clearLastAlert() {
        var lastAlert = modal.querySelector('.alert');
        if (lastAlert) {
            lastAlert.remove();
        }
    }
    // Función para llamar a la función clearLastAlert después de un retraso especificado
    function delayedClearLastAlert(delay) {
        setTimeout(function () {
            clearLastAlert();
        }, delay);
    }

    $("#submitComuniqueModal").click(function (e) {
        //Evitando cualquier evento por default que tenga el formulario
        e.preventDefault();
        console.log("Submit event ejecutado");

        //Obteniendo los valores de los input del html, para el formulario de reserva
        //Se estan obteniendo a traves del id
        var nombrec = $("#nombreComuniqueModal").val();
        var correoc = $("#correoComuniqueModal").val();
        var telefonoc = $("#telefonoComuniqueModal").val();
  

        //validar formulario y si no dar alertas de que los campos no pueden estar vacios y son obligatorios
        if (nombrec.trim() === "") {
            var alertDiv = createAlert('El campo nombre es obligatorio');
            modalc.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        } else if (correoc == "" || correo == null) {
            // alert("El campo correo es obligatorio")
            var alertDiv = createAlert('El campo correo es obligatorio');
            modalc.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        } else if (telefonoc == "") {
            // alert("El campo telefono es obligatorio")
            var alertDiv = createAlert('El campo telefono es obligatorio');
            modalc.appendChild(alertDiv);
            // limpiar ultimo appended alert despues de 3 segundos
            delayedClearLastAlert(3000);
            return false;
        }else {
            alert("Estimado/a " + nombrec + ", hemos recibido su mensaje." + "\n" + "Responderemos a la brevedad a " + correoc + "\n" + "Gracias por preferirnos") }

     })

    // Crear un nuevo elemento de alerta
    function createAlert(messageC) {
        var alertDiv = document.createElement('div');
        alertDiv.className = 'alert alert-danger';
        alertDiv.textContent = messageC;
        return alertDiv;
    }
    // Obtener el elemento por id reservaModal
    var modalc = document.getElementById('comuniqueModal');

    // Función para borrar la última alerta añadida
    function clearLastAlert() {
        var lastAlert = modalc.querySelector('.alert');
        if (lastAlert) {
            lastAlert.remove();
        }
    }
    // Función para llamar a la función clearLastAlert después de un retraso especificado
    function delayedClearLastAlert(delay) {
        setTimeout(function () {
            clearLastAlert();
        }, delay);
    }

    $("#enviarc").click(function (e) {
        //Evitando cualquier evento por default que tenga el formulario
        e.preventDefault();
        console.log("Submit event ejecutado");
        if (condition) {
            
        }
        alert ("Hemos recibido su mensaje," +"\n" + "Responderemos a la brevedad")
    })
    $("#enviarr").click(function (e) {
       
        //Evitando cualquier evento por default que tenga el formulario
        // e.preventDefault();
        // console.log("Submit event ejecutado");
        // alert ("Hemos registrado su reserva," +"\n" + "Recibiras un correo electronico con los detalles") 
    })
})

