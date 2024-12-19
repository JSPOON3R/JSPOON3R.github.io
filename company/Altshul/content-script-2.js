console.log("Extension loaded");

document.addEventListener('DOMContentLoaded', function() {
    const timeout = 5000; // Timeout duration in milliseconds
    const startTime = Date.now();

    // Signature box IDs
    const signatureBoxIds = [
        "SignatureDiv", // ID for signature box 1
        "SignatureDiv2", // ID for signature box 2
    ];

    function checkElementExistence() {
        // Check if all signature boxes exist
        const signature_boxes = signatureBoxIds.map(id => document.getElementById(id)).filter(el => el !== null);
        
        if (signature_boxes.length === signatureBoxIds.length) {
            console.log('All signature boxes found:', signature_boxes);
            clearInterval(intervalId); // Stop the interval once all elements are found
            initializeFeatures(signature_boxes); // Initialize features with the found signature boxes
        }

        // Stop after timeout
        if (Date.now() - startTime >= timeout) {
            clearInterval(intervalId); // Stop the interval after timeout
            console.log('Timeout reached, elements not found');
        }
    }

    function initializeFeatures(signature_boxes) {
        // Function to disable all signature boxes
        function disableSignatureBox() {
            signature_boxes.forEach((signature_box) => {
                if (signature_box) {
                    // Local style changes
                    signature_box.style.backgroundColor = "#d3d3d3";
                    signature_box.style.cursor = "not-allowed";
                    signature_box.style.pointerEvents = "none";
                }
            });
            
            // Dispatch custom event to OutSystems
            const event = new CustomEvent('DisableSignature', {});
            console.log('Dispatching DisableSignature event');
            document.dispatchEvent(event);
        }

        // Function to enable all signature boxes
        function enableSignatureBox() {
            signature_boxes.forEach((signature_box) => {
                if (signature_box) {
                    // Local style changes
                    signature_box.style.backgroundColor = "";
                    signature_box.style.cursor = "";
                    signature_box.style.pointerEvents = "";
                }
            });

            // Dispatch custom event to OutSystems
            const event = new CustomEvent('EnableSignature', {});
            console.log('Dispatching EnableSignature event');
            document.dispatchEvent(event);
        }

        // Initially disable signature boxes
        disableSignatureBox();
        console.log("Signature fields disabled for Agent on start");

        surflyExtension.surflySession.onMessage.addListener((message) => {
            if (message.event_type === "participant_left") {
                console.log(message);
                console.log("do something");

                if (message.origin === 0) {
                    console.log("do something");
                }
            }
        });

        surflyExtension.surflySession.onMessage.addListener((message) => {
            if (message.event_type === "tab_control") {
                console.log("tab_control", message);

                // If the leader (Agent) has gained control...
                if (message.controlIndex === message.leaderIndex) {
                    disableSignatureBox(); // Disable all signature boxes and dispatch event
                } else if (message.controlIndex !== message.leaderIndex) {
                    enableSignatureBox(); // Enable all signature boxes and dispatch event
                }
            }
        });
    }

    // Poll every 100ms to check if all signature boxes exist
    const intervalId = setInterval(checkElementExistence, 100);
});