//FLOWS SETTINGS
//Co-browsing
var coBrowsingSettings;
//Co-browsing (with intake)
var coBrowsingIntakeSettings;
//Video Call
var videoCallSettings;
//Video & Co-browsing
var videoCobrowsingSettings;
//Pin Escalation
var pinFlowDefault;
//Pin Escalation 
var pinFlowCustom

var widgetKeys = {
    "marko": "6e2bf5fe08de41ae9f24a75e37c2249a",
    "thomas": "4af7f6620fbb4ab58d2c70f5d4fee0e6",
    "john": "99671227762b43c2a96daa066ee006e2",
    "mihai": "638a1769085c43029306423920b7ed59",
    "ayush": "8816869ecf624d4483f6befd75cb2a1f",
};

var widgetKey = "";

// Function to get the query parameter value by name
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
// Function to set the widgetKey if the name matches
function checkQueryAndSetWidgetKey() {
    const name = getQueryParam("name");
    if (name && widgetKeys.hasOwnProperty(name.toLowerCase())) {
        widgetKey = widgetKeys[name.toLowerCase()];
        console.log("Widget Key set to:", widgetKey);
    } else {
        showNamePopup(); 
    }
}
// Show the name selection popup if no name param
function showNamePopup() {
    const popupOverlay = document.getElementById('popup-overlay');
    popupOverlay.style.visibility = 'visible';
    popupOverlay.style.opacity = '1';
}

// Close the popup
function closeNamePopup() {
    const popupOverlay = document.getElementById('name-popup-overlay');
    popupOverlay.style.visibility = 'hidden';
    popupOverlay.style.opacity = '0';
}

// Handle name selection from dropdown
function setNameAndWidgetKey() {
    const selectedName = document.getElementById('nameDropdown').value;
    if (selectedName && widgetKeys.hasOwnProperty(selectedName.toLowerCase())) {
        widgetKey = widgetKeys[selectedName.toLowerCase()];
        console.log("Widget Key set to:", widgetKey);
        closePopup();
    } else {
        alert("Please select a valid name.");
    }
}

// Check for query parameter on load
window.onload = function () {
    checkQueryAndSetWidgetKey();
};

//PIN POP UP
function showPopup() {
    const popupOverlay = document.getElementById('popup-overlay');
    popupOverlay.style.visibility = 'visible';
    popupOverlay.style.opacity = '1';
}

function closePopup() {
    const popupOverlay = document.getElementById('popup-overlay');
    popupOverlay.style.visibility = 'hidden';
    popupOverlay.style.opacity = '0';
}