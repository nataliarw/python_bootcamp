var boton = document.getElementById("boton")

boton.addEventListener('click', ()=>{
    fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    .then (response => response.json())
    .then (data =>{
       var texto = document.getElementById("texto")
       texto.innerHTML = data.joke
    }).catch(error =>console.log(error))
})