const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () { //que va a pasar si se pulsa el boton si
    Swal.fire({
        title: 'JAJAJA ',
        text: 'que cringe el vato puso uwu-----------------------',
        icon: 'aqui  puede ir una imagen',
        confirmButtonText: 'xd',
        cancelButtonText: 'xd'
    })
});

const noBtn = document.querySelector('#noBtn');
let contador = 0;

function escapar() {

    // Obtener contenedor
    const contenedor = document.querySelector(".contenedor");

    // Dimensiones máximas
    const maxX = contenedor.clientWidth + "px";
    const maxY = contenedor.clientHeight + "px";

    // Coordenadas aleatorias
    const x = Math.random() * 100 + "%";
    const y = Math.random() * 100 + "%";

    // Asignar posiciones
    noBtn.style.position = "absolute";
    noBtn.style.left = x;
    noBtn.style.top = y;

    // Quitar transformadas
    noBtn.style.transform = "none";

    // Contador y alerta
    contador++;
    if(contador === 10) {
        mostrarAlertaCont();
        contador = 0;
    }

}

// Llamar función al hacer hover o tocar
noBtn.addEventListener("mouseover", escapar);
noBtn.addEventListener("touchstart", escapar);
//Pruebas----------------------------------------------
function alertaPruebaClick() {
    return Swal.fire({
        title: 'Éxito',
        text: 'a ver si cierto...',
        icon: 'success',
        timer: 2000,
        showConfirmButton: false
    })
        .then(() => {
            window.location.href = "https://www.ubereats.com/cr";
        });
}

function alertaCancelar() {
    Swal.fire(
        'Cancelado',
        'Cerraste el modal',
        'error'
    )
}

function mostrarAlertaCont() {
    Swal.fire({
        title: 'A ver a ver ',
        text: 'Por que no me compras unas papas',
        icon: 'has feliz a este pobre niño',
        confirmButtonText: 'Si,soy un amor',
        cancelButtonText: 'No, soy uan carepicha'
    }).then((result) => {
        if (result.isConfirmed) {
            alertaPruebaClick()
        } else {
            alertaCancelar()
        }
    })
}
