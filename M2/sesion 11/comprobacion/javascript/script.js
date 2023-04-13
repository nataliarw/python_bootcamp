$(document).ready(function () {
    document.getElementById("formulario").addEventListener('submit', function (event) {
        event.preventDefault()
        var busqueda = documen.getElementById("ingreso").value
        if (busqueda.trim() == "" || busqueda == null) {
            busqueda = "Castle in the sky"
        }

        fetch(`https://studio-ghibli-films-api.herokuapp.com/api/${busqueda}`)
            .then(response => response.json())
            .then(data => {
                var titulo = document.getElementById("titulo")
                imagen.innerHTML = data.title
            }).catch(error => console.log(error))
    })




})