//ontener elementos solicitados en id tabla y contenido
var tabla = document.getElementById("tabla");
var contenido = document.getElementById ("contenido");

//consumir api con fetch
fetch ('https://digimon-api.vercel.app/api/digimon')
.then(response=> response.json())
.then(data=>{
    mostrartabla(data);
}).catch(error => console.log (error))

//mostrar contenido en la tabla
function mostrartabla(respuestaapi) {
    //limpiamos elemento con id contenido
    contenido.innerHTML ="";
    //recorrer datos de digimon
    for(let temp of respuestaapi){
        contenido.innerHTML +=
        `<td>${temp.name}</td>
        <td><img src="${temp.img}" alt="" width= "50px" height= "50px"> </td>
        <td>${temp.level}</td>`
    }
    
}
