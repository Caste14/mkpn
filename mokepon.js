function seleccionarMascotaJugador()
{
    let inputHd = document.getElementById('Hipodoge')
    let inputCpp = document.getElementById('Capipepo')
    let inputRg = document.getElementById('Ratigueya')

    // if (inputHd.checked)
    // {
    //     alert("Seleccionaste a Hipodoge")
      
    // } else if (inputCpp.checked)
    // {
    //     alert("Seleccionaste a Capipepo")
    // } else if (inputRg.checked)
    // {
    //     alert("Seleccionaste a Ratigueya")
    // } else
    // {
    //     alert("Por favor, selecciona a un pesonaje")
    // }

    switch () {
        case value:
            
            break;
    
        default:
            alert("Por favor, selecciona a un personaje")
            break;
    }
}


function iniciarJuego()
{
    let botonMascotaJugador = document.getElementById("boton-mascota");
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

}

window.addEventListener("load", iniciarJuego);