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

//If loading demo.surfly.com, buttons must be clicked. 
//The functions below load the correct widget key into Surfly when a selection is made

//Thomas
tomButton.addEventListener("click", function () {
  widgetkey = "4af7f6620fbb4ab58d2c70f5d4fee0e6";
  shouldLoadScript = true;
  console.log("shouldloadscript is: " + shouldLoadScript + " and new widget key is " + widgetkey);
  loadSurfly();
  teamname = "Thomas";
});

//Ayush
ayushButton.addEventListener("click", function () {
  widgetkey = "8816869ecf624d4483f6befd75cb2a1f";
  shouldLoadScript = true;
  console.log("shouldloadscript is: " + shouldLoadScript + " and new widget key is " + widgetkey);
  loadSurfly();
  teamname = "Ayush";
});

//John
johnButton.addEventListener("click", function () {
  widgetkey = "99671227762b43c2a96daa066ee006e2";
  shouldLoadScript = true;
  console.log("shouldloadscript is: " + shouldLoadScript + " and new widget key is " + widgetkey);
  loadSurfly();
  teamname = "John";
});

//Mihai
mihaiButton.addEventListener("click", function () {
  widgetkey = "638a1769085c43029306423920b7ed59";
  shouldLoadScript = true;
  console.log("shouldloadscript is: " + shouldLoadScript + " and new widget key is " + widgetkey);
  loadSurfly();
  teamname = "Mihai";
});

//When button is clicked: hide "activte surfly" and display custom chat widget
function buttonClicked(buttonNumber) {
  const popupContainer = document.getElementById("selectnamepopup");
  popupContainer.style.display = "none";
  console.log(`Button ${buttonNumber} clicked`);
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
    leader_redirect_url: "https://demo.surfly.com/sioa",
    follower_redirect_url: "https://www.surfly.com",
    videochat_enabled: true,
    start_with_videochat_on: false
  };

  Surfly.init(settings, function (initResult) {
    if (initResult.success) {
      if (!Surfly.isInsideSession) {
        Surfly.button(); //loads Get Live Help widget
      }
    }
    else {
      console.log("Surfly was unable to initialize properly.")
    }
  });
}


// Function to end an active Surfly session
function endSurflySession() {
  Surfly.session().currentSession.end();
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
      hide_element_by_selector: "#InsuredAddress,#HasAcceptedDisclaimer-checkbox-group > label > div > div > span",
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
}


////////////"custom-pin-button"
//Open the pop up with a fade
  function loadpinflow(){
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
//Trigger function when the 
showpopup.addEventListener("click", loadpinflow);
startCobrowsingbutton3();
  }
   
//Start the custom pin flow Surfly session
function startCobrowsingbutton3() {
  if (!Surfly.isInsideSession) {
  Surfly.session({
    widget_key: widgetkey,
    hide_element_by_selector: "#InsuredAddress,#HasAcceptedDisclaimer-checkbox-group > label > div > div > span",
    region: "us-east",
    queued: true,
    videochat_enabled: true,
    start_with_videochat_on: false,
    start_with_fullscreen_videochat: false,
    session_start_confirmation: false,
    script_embedded:"https://github.com/JSPOON3R/JSPOON3R.github.io/blob/main/script/masking-visuals-sioa.js",
    tags: [
      "custom-pin-button"
    ],
    blocklist: "[{\"pattern\": \"^https?://[\\\\w\\\\.]*facebook\\\\.com\",\"redirect\": \"https://demo.surfly.com/blocked.html\"}]"

  }).startLeader(null, {
    Custom_Field_1: 'Data goes here',
    Custom_Field_2: '1234',
    Custom_Field_3: 'Use as many fields as you need'
  })
  .on("session_created", function (session, event) {
                            // display the PIN of the current session
                            document.querySelector("#sessidtarget").innerText = session.pin;
                        });} else {
                    console.log("Surfly was unable to initialize properly.")
                }
                hideSurflyElements();
            };

/////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////--FLOWS--///////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

 //TBD: make sure this is added to all functions that don't require the chat widget to remain visible
  const chatwidget = document.getElementById("chat-input");
chatwidget.style.zIndex = 2147483549;

const chatwidgeticon = document.getElementById("chat-icon");
chatwidgeticon.style.zIndex = 2147483549;

const chatwidgetimg = document.getElementById("chat-icon-img");
chatwidgetimg.style.zIndex = 2147483549;

// startCobrowsingbutton3(); is called in the pop up JS and by the on-click HTML
// custim pin buttons do nothing