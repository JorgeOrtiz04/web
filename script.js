document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.numero');
    
    const updateCount = (counter) => {
        const target = +counter.getAttribute('data-valor');  // Valor objetivo
        const count = +counter.innerText;                    // Valor actual
        const increment = target / 200;                      // Ajusta la velocidad
        
        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => updateCount(counter), 10);     // Intervalo de tiempo entre cada incremento
        } else {
            counter.innerText = target;                       // Asegura que termina en el número exacto
        }
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                updateCount(entry.target);  // Inicia el contador
                observer.unobserve(entry.target); // Deja de observar una vez que se inicia
            }
        });
    });

    counters.forEach(counter => {
        observer.observe(counter); // Observa cada contador
    });
});



let currentIndex = 0;
const testimonios = document.querySelectorAll('.testimonio');

function showTestimonio(index) {
    testimonios.forEach((testimonio, i) => {
        testimonio.classList.toggle('active', i === index);
    });
}

function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = testimonios.length - 1; // Ir al último si está al principio
    } else if (currentIndex >= testimonios.length) {
        currentIndex = 0; // Volver al primero si se pasa
    }
    showTestimonio(currentIndex);
}

// Inicializa mostrando el primer testimonio
showTestimonio(currentIndex);







document.getElementById('inscripcion-form').addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar que el formulario se envíe de la manera tradicional

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const curso = document.getElementById('curso').value;

    // Mostrar un mensaje de éxito (puedes enviar esta información a un servidor si lo deseas)
    const mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.textContent = `¡Gracias, ${nombre}! Te has inscrito en el curso de ${curso}.`;
    
    // Limpiar el formulario
    document.getElementById('inscripcion-form').reset();
});





// Evito copiar
document.addEventListener('copy', function(e) {
    e.preventDefault();
    alert('¡El copiado de texto está deshabilitado!');
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // Deshabilitar clic derecho
});


