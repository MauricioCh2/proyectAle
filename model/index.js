const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () { //que va a pasar si se pulsa el boton si
    Swal.fire({
        title: 'Vos y yo',
        text: 'Vos y yo cuando vivamos juntos y me re jodas, mira es negro como vo',
        icon: 'resources/cuandoSi.jpg',
        confirmButtonText: 'boton de confirmar',
        cancelButtonText: 'boton de cancelar',
        timer: 5000,
        showConfirmButton: false
    }).then(()=>{
        window.location.href = 'carta.html';
    })
});

const noBtn = document.querySelector('#noBtn');
let contador = 0;

function escapar() {

    // Obtener contenedor
    const contenedor = document.querySelector(".contenedor");

    // Dimensiones máximas
    const maxX = contenedor.clientWidth-10 + "px";
    const maxY = contenedor.clientHeight-10 + "px";

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

function alertaCancelar() {
    Swal.fire(
        'Cancelado',
        'aca no deberias estar',
        'error'
    )
}

function mostrarAlertaCont() {
    Swal.fire({
        title: '>:(',
        text: 'Ok puto, le das al no, come pija',
        icon: '/resources/cuandoNo.jpg',
        confirmButtonText: 'Si,soy un amor',
        cancelButtonText: 'No, soy uan carepicha'
    })

}
