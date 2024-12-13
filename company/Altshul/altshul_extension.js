document.addEventListener('DOMContentLoaded', function () {
    console.log("extension loaded");

    //CONTROL SWITCHING
    //In the Signaure flow, the Marketer is not the tab owner. 
    //This is because the content must be masked from the Marketer and the tab owner can always see masked elements.
    //By default, non tab owners cannot take control of a tab without permssion
    //The below code works around this limitation through the extensions API

    surflyExtension.surflySession.onMessage.addListener((message) => {
        if (message.event_type === "tab_control_requested") {
            console.log("tab_control_requested", message);
           // If request comes from one of these indexes, grant it. 
        }
        if (message.event_type === "participant_joined") {
            console.log("participant_joined event", message);
            //confirm in user data that the joiner is Altshul. save client index of Altshul. 
        }
    });

    //FILE UPLOAD
});