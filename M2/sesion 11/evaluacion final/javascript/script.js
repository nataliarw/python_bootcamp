var tarjeta = document.getElementById("tarjeta")
$(document).ready(function () {
    $("#boton").click(function (e) {
        // e.preventDefault();
        console.log('click');
        fetch(`https://studio-ghibli-films-api.herokuapp.com/api/my%20neighbor%20totoro`)
            .then(response => response.json())
            .then(data => {
                showtarjeta(data);
            }).catch(error => console.log(error));
    })

    //     console.log('ready-function');
    function showtarjeta(respuestaapi) {
        console.log('data:', respuestaapi);
        var title = respuestaapi.title;
        var synopsis = respuestaapi.synopsis;
        var poster = respuestaapi.poster;
        var hepburn = respuestaapi.hepburn;
        var release = respuestaapi.release;
        var director = respuestaapi.director;
        console.log(title, synopsis, poster);
        // tarjeta.innerHTML = "";

        // for (showtarjeta) {
        $("#tarjeta").append(

            `<div col-sm-12 col-md-5 text-center mx-auto> 
                        <img src="${poster}" class="card-img-top" alt="...">
                        <div class="card-body">
                           <h5 class="card-title ">${title}</h5>
                            <p class="card-text">${synopsis}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Titulo Romanizado: ${hepburn}</li>
                            <li class="list-group-item">Ano de estreno: ${release}</li>
                            <li class="list-group-item">Director: ${director}</li>
                </ul>
                </div>`
        );
        //     
    }
})

