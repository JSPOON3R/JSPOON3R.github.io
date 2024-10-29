document.addEventListener('DOMContentLoaded', function() {
    surflyExtension.runtime.onMessage.addListener((message, sender) => {
        // Process the received message
        // 'message' contains the data sent by the sender
        // 'sender' provides information about the sender
        // Example: Check for a specific event type
        if (message.command === "hello") {
            // Perform actions based on the message data
            console.log("success!");
        } else {
            console.log("failure!");
        }
    });
});