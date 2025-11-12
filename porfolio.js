document.addEventListener('DOMContentLoaded', () => {
    // 1. Obtener todos los botones del encabezado
    const botones = document.querySelectorAll('header button');

    // 2. Definir la función para mostrar la sección
    function mostrarSeccion(seccionId) {
        // a) Ocultar todas las secciones que están directamente dentro de <section>
        const secciones = document.querySelectorAll('section > div');
        secciones.forEach(div => {
            div.style.display = 'none';
        });

        // b) Mostrar la sección cuyo ID coincide con el botón pulsado
        const seccionAMostrar = document.getElementById(seccionId);
        if (seccionAMostrar) {
            // Usamos 'block' o 'flex' según necesites, 'block' es seguro por defecto
            seccionAMostrar.style.display = 'block'; 
        }
    }

    // 3. Asignar el evento 'click' a cada botón
    botones.forEach(button => {
        button.addEventListener('click', (e) => {
            // Prevenir el comportamiento por defecto de '<a>' (que recarga o salta)
            e.preventDefault(); 
            
            // El ID del botón es el ID de la sección a mostrar
            const targetId = button.id;
            mostrarSeccion(targetId);
        });
    });
    
    // (Opcional) Asegurar que la sección inicial se muestre al cargar por si el CSS falla
    // mostrarSeccion('aboutme'); 
});