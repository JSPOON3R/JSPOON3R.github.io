console.log("Extension loaded");
document.addEventListener('DOMContentLoaded', function () {

    const signature_box_1 = document.getElementById("signature");
    const signature_box_2 = document.getElementById("signature");
    const signature_box_3 = document.getElementById("signature");


    function disableSignatureBox() {
        if (typeof signature_box_1 !== 'undefined' && signature_box_1) {
            signature_box_1.style.backgroundColor = "#d3d3d3";
            signature_box_1.style.cursor = "not-allowed";
            signature_box_1.style.pointerEvents = "none";
        }
    
        if (typeof signature_box_2 !== 'undefined' && signature_box_2) {
            signature_box_2.style.backgroundColor = "#d3d3d3";
            signature_box_2.style.cursor = "not-allowed";
            signature_box_2.style.pointerEvents = "none";
        }
    
        if (typeof signature_box_3 !== 'undefined' && signature_box_3) {
            signature_box_3.style.backgroundColor = "#d3d3d3";
            signature_box_3.style.cursor = "not-allowed";
            signature_box_3.style.pointerEvents = "none";
        }
    }
    

    function enableSignatureBox() {
        if (typeof signature_box_1 !== 'undefined' && signature_box_1) {
            signature_box_1.style.backgroundColor = "";
            signature_box_1.style.cursor = "";
            signature_box_1.style.pointerEvents = "";
        }
    
        if (typeof signature_box_2 !== 'undefined' && signature_box_2) {
            signature_box_2.style.backgroundColor = "";
            signature_box_2.style.cursor = "";
            signature_box_2.style.pointerEvents = "";
        }
    
        if (typeof signature_box_3 !== 'undefined' && signature_box_3) {
            signature_box_3.style.backgroundColor = "";
            signature_box_3.style.cursor = "";
            signature_box_3.style.pointerEvents = "";
        }
    }
    

    disableSignatureBox();
    console.log("Signature field disabled for Agent on start");

    surflyExtension.surflySession.onMessage.addListener((message) => {
        if (message.event_type === "tab_control") {
            console.log("tab_control", message);
            // If the leader (Agent) has gained control...
            if (message.controlIndex === message.leaderIndex) {
                disableSignatureBox();
                // If the follower (Customer) has gained control...
            } else if (message.controlIndex !== message.leaderIndex) {
                enableSignatureBox();
            }
        }
    });


    surflyExtension.surflySession.onMessage.addListener((message) => {
        if (message.event_type === "participant_left") {
            console.log(message);
            if (message.origin === 0) {
                console.log("do something");
            } 
        }
    })

});

