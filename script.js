// Script para smooth scrolling (desplazamiento suave)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

/*  typing efect*/

function typeEffect(element, speed, callback) {
    if (!element) return;
    const nodes = Array.from(element.childNodes);
    const container = document.createElement('div');
    nodes.forEach(node => container.appendChild(node));

    element.innerHTML = ""; // clear the elemnt

    let nodeIndex = 0;
    let textIndex = 0;

    const timer = setInterval(function() {
        if (nodeIndex >= container.childNodes.length) {
            clearInterval(timer);
            if (callback) callback();
            return;
        }

        const currentNode = container.childNodes[nodeIndex];

        if (currentNode.nodeType === Node.TEXT_NODE) {
            const text = currentNode.textContent;
            
            if (textIndex < text.length) {
                element.innerHTML += text.charAt(textIndex);
                textIndex++;
            } else {
                nodeIndex++;
                textIndex = 0;
            }
        } else if (currentNode.nodeType === Node.ELEMENT_NODE) {
            element.appendChild(currentNode.cloneNode(true));
            nodeIndex++;
            textIndex = 0;

        } else {
            nodeIndex++;
            textIndex = 0;
        }
    }, speed);
}

// --- Logic app --- //
//////////////////////////////////////////
//habra que poner cuando acabe la funcion de mi nombre
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(iniciarEfecto, 3000);
})

function iniciarEfecto() {
    const targets = document.querySelectorAll('p.typing-target');
    
    // Velocity
    const speed = 40; 
    
    if (targets.length === 0) return;

    function startTypingSequence(index) {
        if (index >= targets.length) {
            return; 
        }

        const currentTarget = targets[index];
        currentTarget.style.opacity = '1';
        
        typeEffect(currentTarget, speed, function() {
            startTypingSequence(index + 1);
        });
    }

    startTypingSequence(0); 
};



// --- LÓGICA DEL EFECTO DE FLUJO DE COLOR (Animation Flow) ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Selecciona todos los <h2> de sección (usaremos section-title)
    const targets = document.querySelectorAll('h2.section-title');
    
    // El retraso entre letras crea el efecto de flujo
    const delayBetweenLetters = 0.1; // 50ms de retraso entre cada letra
    let animationCounter = 0; // Contador global de letras para el retraso

    targets.forEach(h2 => {
        // Guarda el texto original
        const text = h2.textContent.trim();
        let newHtml = '';
        
        // Divide el texto en letras y envuelve cada una en un span con su delay
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            
            if (char === ' ') {
                // Mantiene los espacios sin span
                newHtml += ' ';
            } else {
                // Genera el delay incremental para el efecto de flujo
                const delay = animationCounter * delayBetweenLetters;
                
                // Añade el span con el delay
                newHtml += `<span style="animation-delay: ${delay}s">${char}</span>`;
                animationCounter++;
            }
        }
        
        // Reemplaza el contenido del H2 con las letras spanizadas
        h2.innerHTML = newHtml;

        // Limpia el contador para que la siguiente sección comience el retraso desde cero
        animationCounter = 0; 
    });
});
