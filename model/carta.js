
document.getElementById('miOso').addEventListener('click', function() {
    var cuadroTexto = document.getElementById('cuadroTexto');
    cuadroTexto.classList.remove('oculto');
    setTimeout(function() {
        cuadroTexto.classList.add('oculto');
    }, 3000); // Desaparece después de 3 segundos (3000 milisegundos)
});