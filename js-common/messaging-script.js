console.log('script_embedded injected');

// Load Surfly script
(function(s, u, r, f, l, y) {
    s[f] = s[f] || { init: function() { s[f].q = arguments }};
    l = u.createElement(r); y = u.getElementsByTagName(r)[0]; l.async = 1;
    l.src = 'https://uat.surfly.com/surfly.js';
    y.parentNode.insertBefore(l, y);
})(window, document, 'script', 'Surfly');

// Initialize Surfly and check if loaded
Surfly.init(function(initResult) {
    if (initResult.success) {
        console.log('Surfly loaded in iFrame page');
    } else {
        console.log('Surfly init failed in iFrame');
    }
});

// Message listener
window.addEventListener("message", function(event) {
    console.log("Received message from origin:", event.origin);
    if (event.origin.includes("surfly.com")) {
        console.log("Message received from " + event.origin + " on child page: " + event.data.params.msg.message);
        const message = event.data.params.msg.message;
        
        // Show or create modal on first message
        if (!document.getElementById("floatingModal")) {
            createFloatingModal(); // Create modal if it doesn't exist
        }
        
        // Display the received message
        addMessageToModal("Parent Page: " + message);
    }
});

// Function to create floating modal on the page
function createFloatingModal() {
    const modal = document.createElement("div");
    modal.id = "floatingModal";
    modal.style.position = "fixed";
    modal.style.bottom = "20px";
    modal.style.right = "20px";
    modal.style.width = "300px";
    modal.style.backgroundColor = "var(--website-off-white)";
    modal.style.border = "1px solid var(--grey)";
    modal.style.borderRadius = "8px";
    modal.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
    modal.style.padding = "20px";
    modal.style.zIndex = "1000";
    modal.style.fontFamily = "Nunito, sans-serif";
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.innerHTML = `
        <h3 style="margin: 0 0 10px;">Messages</h3>
        <div id="messageContainer" style="max-height: 200px; overflow-y: auto; font-size: 14px; line-height: 1.5;"></div>
    `;
    document.body.appendChild(modal);
}

// Function to add message to the floating modal
function addMessageToModal(message) {
    const messageContainer = document.getElementById("messageContainer");
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight; // Auto-scroll to latest message
}
