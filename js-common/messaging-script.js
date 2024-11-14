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
        addMessageToModal("<b>Parent Page:</b> " + message);
    }
});

function createFloatingModal() {
    const modal = document.createElement("div");
    modal.id = "floatingModal";
    modal.style.position = "fixed";
    modal.style.bottom = "20px";
    modal.style.right = "20px";
    modal.style.width = "300px";
    modal.style.maxHeight = "250px"; 
    modal.style.backgroundColor = "var(--website-off-white)";
    modal.style.border = "1px solid var(--grey)";
    modal.style.borderRadius = "8px";
    modal.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
    modal.style.padding = "20px";
    modal.style.zIndex = "1000";
    modal.style.fontFamily = "Nunito, sans-serif";
    modal.style.display = "flex";
    modal.style.flexDirection = "column";
    modal.style.overflow = "hidden"; 

    modal.innerHTML = `
        <h3 style="margin: 0 0 10px;">Messages</h3>
        <div id="messageContainer" style="flex: 1; max-height: 200px; overflow-y: auto; font-size: 14px; line-height: 1.5; margin-bottom: 10px;"></div>
        <div style="display: flex; gap: 5px;">
            <input type="text" id="replyInput" placeholder="Type a reply..." 
                style="flex: 1; padding: 8px; border: 1px solid var(--grey); border-radius: 4px;">
            <button id="replyButton" 
                style="padding: 8px 12px; background-color: #374150; color: #f7f7f7; border: none; border-radius: 4px; cursor: pointer;">
                Reply
            </button>
        </div>
    `;

    document.body.appendChild(modal);
    document.getElementById("replyButton").addEventListener("click", sendReplyMessage);
}


// Function to handle sending reply messages
function sendReplyMessage() {
    const replyInput = document.getElementById("replyInput");
    const message = replyInput.value.trim();
    replyInput.value = ""; // Clear the input after sending

    if (message) {
        addMessageToModal("<b>You:</b> " + message);
        Surfly.listSessions()[0].sendMessage({ message:message}, '*', window.location.origin);
        console.log("Reply sent to session:", message);
    } else {
        alert("Please enter a reply message before sending.");
    }
}

// Function to add message to the modal
function addMessageToModal(message) {
    const messageContainer = document.getElementById("messageContainer");
    const messageElement = document.createElement("div");
    messageElement.textContent = message;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight; // Auto-scroll to latest message
}