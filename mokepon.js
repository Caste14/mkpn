function seleccionarMascotaJugador()
{
    let inputHd = document.getElementById('Hipodoge')
    let inputCpp = document.getElementById('Capipepo')
    let inputRg = document.getElementById('Ratigueya')

    switch (ckecked = true) {
        case inputHd.checked:
            alert('Elegiste a Hipodoge🐺')
            break;
        case inputCpp.checked:
            alert('Elegiste a Capipepo🐻')
            break;
        case inputRg.checked:
            alert('Elegiste a Ratigueya🐭')
            break;
        default:
            alert('Parece que no elegiste a ninguna mascota 🤷‍♂️, por favor, ¡elije una!')
            break;
    }
}


function iniciarJuego()
{
    let botonMascotaJugador = document.getElementById("boton-mascota");
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

}

window.addEventListener("load", iniciarJuego);