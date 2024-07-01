(function() {
    // Inject styles for the click animation
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
        .click-animation {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 0, 0, 0.5);
            width: 20px;
            height: 20px;
            pointer-events: none;
            animation: click-animation 0.4s ease-out;
            transform: translate(-50%, -50%);
        }
        @keyframes click-animation {
            from {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
            to {
                transform: translate(-50%, -50%) scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Function to create the click animation
    function createClickAnimation(x, y) {
        const circle = document.createElement('div');
        circle.className = 'click-animation';
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        document.body.appendChild(circle);
        
        // Remove the circle after animation ends
        circle.addEventListener('animationend', () => {
            document.body.removeChild(circle);
        });
    }

    // Event listener for click events
    document.addEventListener('click', (event) => {
        createClickAnimation(event.clientX, event.clientY);
    });
})();
