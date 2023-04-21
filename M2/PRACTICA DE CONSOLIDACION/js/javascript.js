//ontener elementos solicitados en id tabla y contenido
let gridContenido = document.getElementById("gridContenido");
let tarjeta = document.getElementById("tarjeta");
let tabla = document.getElementById("tabla");
let contenido = document.getElementById("contenido")
//consumir api con fetch

fetch('https://digimon-api.vercel.app/api/digimon')
    .then(response => response.json())
    .then(data => {
        mostrarContenido(data);

    }).catch(error => console.log(error))



//mostrar contenido en cartas
function mostrarContenido(respuestaapi) {
    // if (tabla != null && contenido != null) {
    //    contenido.style.display ="none";
    //     tabla.style.display = "none";

    //     tabla.innerHTML = "";
    //    contenido.innerHTML = "";

    // }
    //limpiamos elemento con id contenido
    gridContenido.innerHTML = "";
    //recorrer datos de digimon
    for (let temp of respuestaapi) {
        gridContenido.innerHTML +=
            `<div class= "card mt-5 mx-2 p-2" id="interior">
            <img src="${temp.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h6 class="text-center">${temp.name}</h6>
              <p class="card-text text-center">Nivel: ${temp.level}</p>
            </div>`
    }

}

function mostrarTarjeta() {
    let busqueda = document.getElementById("busqueda").value.toLowerCase();
    fetch(`https://digimon-api.vercel.app/api/digimon/name/${busqueda}`)
        .then(response => response.json())
        .then(data => {
            crearTarjeta(data);
        }).catch(error => console.log(error))

}

function crearTarjeta(params) {

    tarjeta.innerHTML = "";

    for (let temp of params) {
        tarjeta.innerHTML +=
            `<div class="card mx-auto mt-5 mb-5 text-center" style="width: 18rem;" id="individual" )>
  <img src="${temp.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title ">${temp.name}</h5>
    <p class="card-text ">Nivel: ${temp.level}</p>
    <a href="index.html" class="btn btn-primary ">Buscar otro</a>
        </div>
        </div>`
    }
}



function Tabla(params) {
    fetch(`https://digimon-api.vercel.app/api/digimon`)
        .then(response => response.json())
        .then(datos => {
            console.log(datos);
            mostrarTabla(datos);
        }).catch(error => console.log(error))


}
function mostrarTabla(response) {
    tabla = document.getElementById("tabla");
    contenido = document.getElementById("contenido");
    gridContenido = document.getElementById("gridContenido");
    if (gridContenido != null) {
        gridContenido.display = "none";
        gridContenido.innerHTML = "";
    }
    contenido.innerHTML = " ";

    for (let temp of response) {

        contenido.innerHTML +=
            ` 
              <tr>
              <td width="50px">${temp.name}</td>
              <td><img src="${temp.img}" alt="" width="100px" height="100px"></td>
              <td>${temp.level}</td>
              </tr>
              `}


}

function desaparece(params) {
    document.getElementById("gridContenido").style.display = "none";
    document.getElementById("tabla").style.display = "none";
}

