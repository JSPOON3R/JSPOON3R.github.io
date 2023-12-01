//GLOBAL VARIABLES
var shouldLoadScript = false;
var widgetkey;
var teamname;
var tomButton = document.getElementById("tomButton");
var ayushButton = document.getElementById("ayushButton");
var johnButton = document.getElementById("johnButton");
var mihaiButton = document.getElementById("mihaiButton");
var hasSentAgentMessage = false;

//Activate Surfly for correct person

//Can load user settings using query Params
//If loading demo.surfly.com without query params then add event listenrs for buttons

// Function to check if the URL contains the a query parameter and handle case
function hasQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    const lowerCaseParam = param.toLowerCase();

    for (const key of urlParams.keys()) {
        if (key.toLowerCase() === lowerCaseParam) {
            console.log(`Query parameter "${param}" is present`);
            return true;
        }
    }

    console.log(`Query parameter "${param}" is not present`);
    return false;
}

// Check if the URL contains the "?name" query parameter
// If no, create an event listener to do these things when the name button is clicked

// Thomas
if (!hasQueryParam("john") && !hasQueryParam("thomas") && !hasQueryParam("mihai") && !hasQueryParam("ayush")) {
    tomButton.addEventListener("click", function () {
        // Your event handler logic here
        widgetkey = "4af7f6620fbb4ab58d2c70f5d4fee0e6";
        shouldLoadScript = true;
        console.log("shouldloadscript is: " + shouldLoadScript + " and new widget key is " + widgetkey);
        teamname = "Thomas";
        const popupContainer = document.getElementById("selectnamepopup");
        popupContainer.style.display = "none";
        loadSurfly();
        console.log("Thomas settings Loaded");
        var chatIcon = document.getElementById("chat-icon");
        chatIcon.style.opacity = "1";
    });
}

// Trigger the same actions if the query parameter is present
if (hasQueryParam("thomas")) {
    widgetkey = "4af7f6620fbb4ab58d2c70f5d4fee0e6";
    shouldLoadScript = true;
    console.log("shouldloadscript is: " + shouldLoadScript + " and new widget key is " + widgetkey);
    loadSurfly();
    teamname = "Thomas";
    const popupContainer = document.getElementById("selectnamepopup");
    popupContainer.style.display = "none";
    console.log(`Thomas settings Loaded`);
    var chatIcon = document.getElementById("chat-icon");
    chatIcon.style.opacity = "1";
}

//Ayush
if (!hasQueryParam("john") && !hasQueryParam("thomas") && !hasQueryParam("mihai") && !hasQueryParam("ayush")) {
    ayushButton.addEventListener("click", function () {
        widgetkey = "8816869ecf624d4483f6befd75cb2a1f";
        shouldLoadScript = true;
        console.log("shouldloadscript is: " + shouldLoadScript + " and new widget key is " + widgetkey);
        loadSurfly();
        teamname = "Ayush";
        const popupContainer = document.getElementById("selectnamepopup");
        popupContainer.style.display = "none";
        console.log(`Ayush settings Loaded`);
        var chatIcon = document.getElementById("chat-icon");
        chatIcon.style.opacity = "1";
    });
}
// Trigger the same actions if the query parameter is present
if (hasQueryParam("ayush")) {
    widgetkey = "8816869ecf624d4483f6befd75cb2a1f";
    shouldLoadScript = true;
    console.log("shouldloadscript is: " + shouldLoadScript + " and new widget key is " + widgetkey);
    loadSurfly();
    teamname = "Ayush";
    const popupContainer = document.getElementById("selectnamepopup");
    popupContainer.style.display = "none";
    console.log(`Ayush settings Loaded`);
    var chatIcon = document.getElementById("chat-icon");
    chatIcon.style.opacity = "1";
}


//John
if (!hasQueryParam("john") && !hasQueryParam("thomas") && !hasQueryParam("mihai") && !hasQueryParam("ayush")) {
    johnButton.addEventListener("click", function () {
        widgetkey = "99671227762b43c2a96daa066ee006e2";
        shouldLoadScript = true;
        console.log("shouldloadscript is: " + shouldLoadScript + " and new widget key is " + widgetkey);
        loadSurfly();
        teamname = "John";
        const popupContainer = document.getElementById("selectnamepopup");
        popupContainer.style.display = "none";
        console.log(`John settings Loaded`);
        var chatIcon = document.getElementById("chat-icon");
        chatIcon.style.opacity = "1";
    });
}
// Trigger the same actions if the query parameter is present
if (hasQueryParam("john")) {
    widgetkey = "99671227762b43c2a96daa066ee006e2";
    shouldLoadScript = true;
    console.log("shouldloadscript is: " + shouldLoadScript + " and new widget key is " + widgetkey);
    loadSurfly();
    teamname = "John";
    const popupContainer = document.getElementById("selectnamepopup");
    popupContainer.style.display = "none";
    console.log(`John settings Loaded`);
    var chatIcon = document.getElementById("chat-icon");
    chatIcon.style.opacity = "1";
}


//Mihai
if (!hasQueryParam("john") && !hasQueryParam("thomas") && !hasQueryParam("mihai") && !hasQueryParam("ayush")) {
    mihaiButton.addEventListener("click", function () {
        widgetkey = "638a1769085c43029306423920b7ed59";
        shouldLoadScript = true;
        console.log("shouldloadscript is: " + shouldLoadScript + " and new widget key is " + widgetkey);
        loadSurfly();
        teamname = "Mihai";
        const popupContainer = document.getElementById("selectnamepopup");
        popupContainer.style.display = "none";
        console.log(`Mihai settings Loaded`);
        var chatIcon = document.getElementById("chat-icon");
        chatIcon.style.opacity = "1";
    });
}
// Trigger the same actions if the query parameter is present
if (hasQueryParam("mihai")) {
    widgetkey = "638a1769085c43029306423920b7ed59";
    shouldLoadScript = true;
    console.log("shouldloadscript is: " + shouldLoadScript + " and new widget key is " + widgetkey);
    loadSurfly();
    teamname = "Mihai";
    const popupContainer = document.getElementById("selectnamepopup");
    popupContainer.style.display = "none";
    console.log(`Mihai settings Loaded`);
    var chatIcon = document.getElementById("chat-icon");
    chatIcon.style.opacity = "1";
}


//LOAD SURFLY
//runs after the correct user has been identified
function loadSurfly() {
    console.log('surfly triggered following widget key declaration');
    (function (s, u, r, f, l, y) {
        s[f] = s[f] || { init: function () { s[f].q = arguments } };
        l = u.createElement(r); y = u.getElementsByTagName(r)[0]; l.async = 1;
        l.src = 'https://surfly.com/surfly.js'; y.parentNode.insertBefore(l, y);
    })
        (window, document, 'script', 'Surfly');

    var settings = {
        widget_key: widgetkey,
        hide_element_by_selector: "#InsuredAddress,#HasAcceptedDisclaimer-checkbox-group > label > div > div > span",
        region: "us-east",
        queued: true,
        leader_redirect_url: `https://demo.surfly.com/sioa?`+teamname,
        follower_redirect_url: "https://www.surfly.com",
        videochat_enabled: true,
        start_with_videochat_on: false,
        session_autorestore_enabled: false,
        url: "https://www.simplyioa.com/",
        script_embedded: "https://demo.surfly.com/script/masking-visuals-sioa.js",
    };

    Surfly.init(settings, function (initResult) {
        if (initResult.success) {
            if (!Surfly.isInsideSession) {
                console.log("Surfly is InsideSession.")
            }
        }
        else {
            console.log("Surfly was unable to initialize properly.")
        }
    });
}

//Reveal Custom Bottoms
function showeye() {
    var firstPara = document.getElementById("firstPara");
    var secondPara = document.getElementById("secondPara");

    if (firstPara && secondPara) {
        var tempId = firstPara.id;
        firstPara.id = secondPara.id;
        secondPara.id = tempId;
    }
}

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////--FLOWS--///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

////////////"text-input"
//CHAT WIDGET
//Function to send dummy agwnt message when chat is opened
function SendAgentMessage() {
    const messages = document.getElementById("chat-messages");
    messages.innerHTML += `<div class="message"><span style="font-weight: bold; color: #ff2e2e; margin-bottom:3px;">Help Desk: </span>Hello, my name is ${teamname}. How can I help?</div>`;
    messages.scrollTop = messages.scrollHeight;
}

// Function to toggle chat open/closed
function toggleChat() {
    const chatWidget = document.getElementById("chat-widget");
    const chatIcon = document.getElementById("chat-icon");
    if (!chatWidget.classList.contains("active")) {
        chatWidget.classList.add("active");
        chatIcon.style.opacity = "0"; // Hide the chat icon
    } else {
        chatWidget.classList.remove("active");
        chatIcon.style.opacity = "1"; // Show the chat icon
    }
    setTimeout(() => { //Make sure it only sends once 
        if (!hasSentAgentMessage) {
            SendAgentMessage();
            hasSentAgentMessage = true;
        }
    }, 3000);
}

//Function to send messages that are posted into the chat widget when send button clicked
function sendMessage() {
    const input = document.getElementById("chat-input");
    const message = input.value;
    input.value = "";

    const messages = document.getElementById("chat-messages");
    messages.innerHTML += `<div class="message"><span style="font-weight: bold; color: #233246;">You:</span> ${message}</div>`;
    messages.scrollTop = messages.scrollHeight;

    // Check if the message contains "startcobrowsing" (case-insensitive)
    if (message.toLowerCase().includes("startcobrowsing")) {
        startCobrowsingtext(); // Call your cobrowsing function
    }
}

//Ensure chat messages in custom widget also send when pressing enter
function handleKeyPress(event) {
    // Check if the Enter key is pressed (keyCode 13, which 13)
    if (event.key === "Enter" || event.keyCode === 13 || event.which === 13) {
        sendMessage();
    }
}

//hide widget

function hideChatWidget() {
    const chatWidget = document.getElementById("chat-widget");
    const chatIcon = document.getElementById("chat-icon");
    chatIcon.style.display = "none";
    chatWidget.style.display = "none";
}

//start Surfly session for chat widget text command
function startCobrowsingtext() {
    Surfly.session({
        widget_key: widgetkey,
        hide_element_by_selector: "#InsuredAddress,#HasAcceptedDisclaimer-checkbox-group > label > div > div > span",
        region: "us-east",
        queued: true,
        videochat_enabled: true,
        start_with_videochat_on: false,
        session_start_confirmation: false,
        tags: ["text-input"],
        blocklist: "[{\"pattern\": \"^https?://[\\\\w\\\\.]*facebook\\\\.com\",\"redirect\": \"https://demo.surfly.com/blocked.html\"}]"
    }).startLeader();
}

////////////"video-button"
function startvideochat() {
    // Your code to initiate cobrowsing goes here
    console.log("it works!")
    Surfly.session({
        widget_key: widgetkey,
        hide_element_by_selector: "#InsuredAddress,#HasAcceptedDisclaimer-checkbox-group > label > div > div > span,body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.RNNXgb > div",
        region: "us-east",
        queued: true,
        videochat_enabled: true,
        start_with_videochat_on: true,
        start_with_fullscreen_videochat: true,
        session_start_confirmation: false,
        tags: [
            "video-button"
        ],
        blocklist: "[{\"pattern\": \"^https?://[\\\\w\\\\.]*facebook\\\\.com\",\"redirect\": \"https://demo.surfly.com/blocked.html\"}]"

    }).startLeader();
}

////////////"default-flow-button"
function startCobrowsingbutton1() {
    Surfly.session({
        widget_key: widgetkey,
        hide_element_by_selector: "#InsuredAddress,#HasAcceptedDisclaimer-checkbox-group > label > div > div > span",
        region: "us-east",
        queued: true,
        videochat_enabled: true,
        start_with_videochat_on: false,
        session_start_confirmation: false,
        tags: [
            "default-flow-button"
        ],
        blocklist: "[{\"pattern\": \"^https?://[\\\\w\\\\.]*facebook\\\\.com\",\"redirect\": \"https://demo.surfly.com/blocked.html\"}]"

    }).startLeader();
    hideChatWidget();
}


////////////"form-flow-button"
//First make sure the input fields are populated. If they are, call Surfly
var customerName;
var customerQuestion;
function collectAndValidateInputs() {
    // Get input values
    customerName = document.getElementById("customer_name_input").value;
    customerQuestion = document.getElementById("customer_question_input").value;

    // Check if inputs are filled
    if (customerName.trim() === '' || customerQuestion.trim() === '') {
        // Handle the case where inputs are not filled
        alert("Please fill out the required fields");
    } else {
        startCobrowsingbutton2();
    }
}
function startCobrowsingbutton2() {
    Surfly.session({
        widget_key: widgetkey,
        hide_element_by_selector: "#InsuredAddress,#HasAcceptedDisclaimer-checkbox-group > label > div > div > span",
        region: "us-east",
        queued: true,
        videochat_enabled: true,
        start_with_videochat_on: true,
        start_with_fullscreen_videochat: true,
        session_start_confirmation: false,
        tags: [
            "form-flow-button"
        ],
        blocklist: "[{\"pattern\": \"^https?://[\\\\w\\\\.]*facebook\\\\.com\",\"redirect\": \"https://demo.surfly.com/blocked.html\"}]"

    }).startLeader(null, {
        "Name": customerName,
        "Question": customerQuestion
    });
    hideChatWidget();
}


////////////"custom-pin-button"
//Open the pop up with a fade
function loadpinflow() {
    const showpopup = document.getElementById("startpinflowButton");
    const modal = document.getElementById("pinmodal");
    const closeButton = document.getElementById("closepinButton");
    const endsessionbutton = document.getElementById("endsessionbutton");
    {
        // Toggle visibility and opacity for fade-in/out effect
        if (modal.style.opacity === "1" || modal.style.visibility === "visible") {
            modal.style.opacity = "0";
            modal.style.visibility = "hidden";
        } else {
            modal.style.display = "flex";
            setTimeout(() => {
                modal.style.opacity = "1";
                modal.style.visibility = "visible";
            }, 10); // Delay to ensure the display property is applied first
        }
    }
    //Trigger function when the custom flow button is clicked
    showpopup.addEventListener("click", loadpinflow);
    startCobrowsingbutton3();

    closeButton.addEventListener("click", function () {
        modal.style.display = "none";
    });

    endsessionbutton.addEventListener("click", function () {
        Surfly.session().end();
    });
}



//Start the custom pin flow Surfly session
function startCobrowsingbutton3() {
    const modal = document.getElementById("pinmodal");
    if (!Surfly.isInsideSession) {
        Surfly.session({
            widget_key: widgetkey,
            hide_element_by_selector: "#InsuredAddress,#HasAcceptedDisclaimer-checkbox-group > label > div > div > span",
            region: "us-east",
            queued: true,
            videochat_enabled: true,
            start_with_videochat_on: false,
            start_with_fullscreen_videochat: false,
            hide_until_agent_joins: true,
            session_start_confirmation: false,
            script_embedded: "https://demo.surfly.com/script/masking-visuals-sioa.js",
            tags: [
                "custom-pin-button"
            ],
            blocklist: "[{\"pattern\": \"^https?://[\\\\w\\\\.]*facebook\\\\.com\",\"redirect\": \"https://demo.surfly.com/blocked.html\"}]"

        }).startLeader(null, {
            Custom_Field_1: 'Data goes here',
            Custom_Field_2: '1234',
            Custom_Field_3: 'Use as many fields as you need'
        })
            .on("session_created", function (session) {
                // display the PIN of the current session
                document.querySelector("#sessidtarget").innerText = session.pin;
                hideChatWidget();
            })
            .on('participant_joined', function () {
                modal.style.display = "none";
            })

            ;
    } else {
        console.log("Surfly was unable to initialize properly.")
    }

}
;

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////--FLOWS--///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////


// startCobrowsingbutton3(); is called in the pop up JS and by the on-click HTML
// custim pin buttons do nothing