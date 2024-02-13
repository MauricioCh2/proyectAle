const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () { //que va a pasar si se pulsa el boton si
    Swal.fire({
        title: 'JAJAJA ',
        text: 'que cringe el vato puso uwu',
        icon: 'aqui  puede ir una imagen',
        confirmButtonText: 'Si,soy un amor',
        cancelButtonText: 'No, soy uan carepicha'
    })
});

const noBtn = document.querySelector('#noBtn');
let contador = 0;

noBtn.addEventListener('mouseover', function () { //que va a pasar si se PONE el cursor sobre el boton no
    escapar();
})
noBtn.addEventListener('touchstart', function() {
    escapar();
})


function  escapar(){
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);

    contador++;

    if (contador === 10) {
        console.log("estoy contando: "+ contador);
        mostrarAlertaCont();
        contador = 0;
    }
}
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
