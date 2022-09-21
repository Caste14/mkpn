function seleccionarMascotaJugador()
{
    let inputHd = document.getElementById('Hipodoge');
    let inputCpp = document.getElementById('Capipepo');
    let inputRg = document.getElementById('Ratigueya');
    let spanMascotaJugador = document.getElementById('mascota-jugador');
    let spanVidaJugador = document.getElementById('vida-jugador');
    switch (ckecked = true) {
        case inputHd.checked:
            spanMascotaJugador.innerHTML = 'Hipodoge'
            spanVidaJugador.innerHTML = 5
            break;
        case inputCpp.checked:
            spanMascotaJugador.innerHTML = 'Capipepo'
            spanVidaJugador.innerHTML = 3
            break;
        case inputRg.checked:
            spanMascotaJugador.innerHTML = 'Ratigueya'
            spanVidaJugador.innerHTML = 2
            break;
        default:
            alert('Parece que no elegiste a ninguna mascota 🤷‍♂️, por favor, ¡elije una!')
            break;
    }
    seleccionarMascotaEnemigo();
}


function iniciarJuego()
{
    let botonMascotaJugador = document.getElementById("boton-mascota");
botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

}

window.addEventListener("load", iniciarJuego);

function seleccionarMascotaEnemigo()
{
    let ataqueAleatorio = aleatorio(1,3);
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')
    if (ataqueAleatorio === 1)
    {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (ataqueAleatorio === 2)
    {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else (ataqueAleatorio === 3)
    {
        spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
}
function aleatorio(min, max)
{
    return Math.floor(Math.random()*(max - min + 1) + min)
}