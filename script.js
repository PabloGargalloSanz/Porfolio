// Script para smooth scrolling (desplazamiento suave)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

//retardo
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(iniciarEfecto, 3000);
})

//  typing efect

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

// butt show
function mostrarBoton() {
        const button = document.querySelector('.cta-button');
        if (button) {
            button.classList.add('show');
            console.log("Todas las letras han terminado. Botón visible.");
        }
    }



//   COLOR 
document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('h2.section-title');
    
    const delayBetweenLetters = 0.1; 
    let animationCounter = 0; 

    targets.forEach(h2 => {
        const text = h2.textContent.trim();
        let newHtml = '';
        
        for (let i = 0; i < text.length; i++) {
            const char = text[i];
            
            if (char === ' ') {
                newHtml += ' ';
            } else {
                const delay = animationCounter * delayBetweenLetters;
                
                newHtml += `<span style="animation-delay: ${delay}s">${char}</span>`;
                animationCounter++;
            }
        }
        
        h2.innerHTML = newHtml;

    });
    
    setTimeout(mostrarBoton, 15000);
});
