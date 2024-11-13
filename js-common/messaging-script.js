console.log('script_embedded injected');
(function(s,u,r,f,l,y){s[f]=s[f]||{init:function(){s[f].q=arguments}};
l=u.createElement(r);y=u.getElementsByTagName(r)[0];l.async=1;
l.src='https://uat.surfly.com/surfly.js';y.parentNode.insertBefore(l,y);})
(window,document,'script','Surfly');

Surfly.init( function(initResult) {
  if (initResult.success) {
      console.log('Surfly loaded in iFrame page');
  } else {
    console.log('Surfly init failed in iFrame');
  }
});
(function() {
    // CSS styles for the modal
    const styles = `
        #floatingModal {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 300px;
            background-color: var(--website-off-white);
            border: 1px solid var(--grey);
            border-radius: 8px;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
            padding: 20px;
            z-index: 1000;
            font-family: var(--font);
        }
        #floatingModal h3 {
            font-size: 1.2em;
            color: var(--website-heading-text);
            margin-bottom: 10px;
        }
        #messageDisplay {
            max-height: 200px;
            overflow-y: auto;
            margin-bottom: 10px;
            background-color: var(--lightest-gray);
            padding: 10px;
            border-radius: 4px;
        }
        #messageDisplay p {
            margin: 5px 0;
        }
        #messageInputGroup {
            display: flex;
            gap: 5px;
        }
        #messageInput {
            flex: 1;
            padding: 8px;
            border: 1px solid var(--grey);
            border-radius: 4px;
        }
        #sendMessageBtn {
            padding: 8px;
            background-color: var(--website-text);
            color: var(--white);
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        #sendMessageBtn:hover {
            background-color: var(--dark-blue);
        }
    `;

    // Inject CSS into the document
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // HTML for the floating modal
    const modalHTML = `
        <div id="floatingModal">
            <h3>Parent-Child Messaging</h3>
            <div id="messageDisplay"></div>
            <div id="messageInputGroup">
                <input type="text" id="messageInput" placeholder="Type a message...">
                <button id="sendMessageBtn">Send</button>
            </div>
        </div>
    `;
    
    // Inject HTML into the document
    const modalDiv = document.createElement("div");
    modalDiv.innerHTML = modalHTML;
    document.body.appendChild(modalDiv);

    // JavaScript for handling messaging
    function addLogLine(message) {
        const messageDisplay = document.getElementById("messageDisplay");
        const messageLine = document.createElement("p");
        messageLine.textContent = message;
        messageDisplay.appendChild(messageLine);
        messageDisplay.scrollTop = messageDisplay.scrollHeight; // Auto-scroll to latest message
    }

    // Send message to parent page
    function sendMessage() {
        const input = document.getElementById("messageInput");
        const messageInput = input.value;
        input.value = ""; // Clear the input after sending
        Surfly.listSessions()[0].sendMessage({ message: messageInput }, "*.surfly.com", window.location.origin);
        addLogLine("You: " + messageInput);
        console.log("Message Sent from child page");
    }

    // Add event listener for the send button
    document.getElementById("sendMessageBtn").addEventListener("click", sendMessage);

    window.addEventListener("message", function(event) {
        console.log("Received message from origin:", event.origin);
        if (event.origin.includes("surfly.com")) {
            console.log("Message received from " + event.origin + ": " + event.data.params.msg.message);
            addLogLine("Parent Page: " + event.data.params.msg.message);
    
            // Show modal if it is hidden
            const floatingModal = document.getElementById("floatingModal");
            if (floatingModal.style.display === "none") {
                floatingModal.style.display = "block";
            }
        }
    });
    
})();
