document.addEventListener('DOMContentLoaded', function () {
    //define signature box

    surflyExtension.surflySession.onMessage.addListener((message) => {
        if (message.event_type === "participant_joined") {
            console.log("participant_joined - apply signature box control switching");

// Select or create the signature box
var signature_box = document.getElementById("signature");

if (signature_box) {
    console.log("Signature box found, applying flashing border.");

    // Inject CSS for a faint, slowly flashing border
    const style = document.createElement('style');
    style.innerHTML = `
        /* Slowly flashing faint red border animation */
        @keyframes slowFlashingBorder {
            0%, 100% { border-color: rgba(255, 0, 0, 0.2); }
            50% { border-color: rgba(255, 0, 0, 0.05); }
        }

        #signature {
            border: 3px solid rgba(255, 0, 0, 0.2); /* Initial faint red border */
            animation: slowFlashingBorder 3s infinite; /* Slow flashing effect */
        }
    `;
    document.head.appendChild(style);
    console.log("Flashing border style applied.");
} else {
    console.warn("Signature box not found.");
}


            // Add a click event listener to the signature box
            signature_box.addEventListener("click", function () {
                console.log("signature box was clicked!");
                surflyExtension.surflySession.apiRequest({
                    cmd: 'transfer_tab_control',
                    to: 1
                });
            });

            // Set a timeout for 2 seconds to stop the agent signing in a single action
            signature_box.addEventListener("mouseenter", function () {
                hoverTimeout = setTimeout(function () {
                    console.log("Mouse hovered over signature for more than 2 seconds");
                    surflyExtension.surflySession.apiRequest({
                        cmd: 'transfer_tab_control',
                        to: 1
                    });
                }, 2000);
            });
        }
    });
});