document.addEventListener('DOMContentLoaded', function() {
    surflyExtension.surflySession.onMessage.addListener((message) => {
        if (message.event_type === "tab_control") {
            console.log("tab_control event triggered:", message);
            if (message.controlIndex !== 0) {
                window.top.document.getElementById("veryImportantButton").style.display = "none";
                console.log("button hidden");
            } 
            if (message.controlIndex === 0) {
                window.top.document.getElementById("veryImportantButton").style.display = "inline";
                console.log("button un-hidden");
            }
        }
    });
});
