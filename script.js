// Function to change the background color of a section
function changeBackgroundColor(sectionId) {
    // Get the section element by its ID
    const section = document.getElementById(sectionId);
    
    // Define an array of colors
    const colors = ['#f4f4f4', '#e0f7fa', '#fce4ec', '#f3e5f5', '#e8f5e9'];
    
    // Generate a random index to select a color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    
    // Change the background color of the section
    section.style.backgroundColor = randomColor;
}
// Function to trigger fireworks effect
function triggerFireworks() {
    // Using canvas-confetti to create fireworks effect
    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti(Object.assign({}, defaults, opts, {
            particleCount: Math.floor(count * particleRatio)
        }));
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });
}
