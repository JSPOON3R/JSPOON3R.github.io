document.addEventListener('DOMContentLoaded', function () {
    surflyExtension.surflySession.onMessage.addListener((message) => {
        if (message.event_type === "participant_joined") {
            if (message) {
                console.log("message:");
                console.log(message.origin);
                setTimeout(function () {
                    window.close();
                    surflyExtension.surflySession.apiRequest({
                        cmd: 'make_host',
                        to: 1
                    });
                }, 2000);
            } else {
                console.log("No message");
            }
        }
    });
    //define signature box
    var signature_box = document.getElementById("signature");

    // Add a click event listener to the signature box
    signature_box.addEventListener("click", function () {
        console.log("signature box was clicked!");
        surflyExtension.surflySession.apiRequest({
            cmd: 'transfer_tab_control',
            to: 0
        });
    });
    // Set a timeout for 2 seconds to stop the agent signing in a single action
    signature_box.addEventListener("mouseenter", function () {
        hoverTimeout = setTimeout(function () {
            console.log("Mouse hovered over signature for more than 2 seconds");
            surflyExtension.surflySession.apiRequest({
                cmd: 'transfer_tab_control',
                to: 0
            });
        }, 2000);
    });
});



