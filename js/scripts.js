document.addEventListener('DOMContentLoaded', function( {
    console.log('DOM completamente cargado y analizado);
    var navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link {
        link.addEventListener('click', function(event) {
            alert('Has hecho clic en un enlace!');
        });
    }));
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado');
    });
});