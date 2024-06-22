// Espera a que el DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM completamente cargado y analizado');

    // Agrega un evento de clic a cada enlace de navegación
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            alert('Has hecho clic en un enlace!');
        });
    });

    // Agrega un evento de envío al formulario de contacto
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Previene el envío del formulario
        alert('Formulario enviado');
    });
});