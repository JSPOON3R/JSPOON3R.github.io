/*XXXXXXXXXXXXXX|--ADJUST CONFIGURATION: START--|XXXXXXXXXXXXXX*/

// Time in seconds with no primary participant before session ends (multiple of 5)
const max_no_participant_time = 15;

/*XXXXXXXXXXXXXX|--ADJUST CONFIGURATION: END--|XXXXXXXXXXXXXX*/
/*XXXXXXXXXXXXXX|--DO NOT EDIT BELOW--|XXXXXXXXXXXXXX*/

console.log("Participant checker loaded");

let lastDetectedTime = Date.now(); // Tracks the last time a primary participant was detected

// Function to get session participants
function getSessionParticipants() {
    console.log('Making API request to check participants');
    surflyExtension.surflySession.apiRequest({
        cmd: 'get_session_participants',
    });
}

// Set up message listener for participant data
surflyExtension.surflySession.onMessage.addListener((message) => {
    if (message.msg === "get_session_participants") {
        console.log("Session participants:", message);

        // Check if a participant with client_index 0 is online
        const isPrimaryParticipantOnline = message.participants.some(
            participant => participant.client_index === 0 && participant.online
        );

        if (isPrimaryParticipantOnline) {
            lastDetectedTime = Date.now(); // Update the last detected time
            console.log("Primary participant detected. Timer reset.");
        } else {
            console.log("No primary participant detected.");
        }
    }
});

// Function to check the time since the last detection of the primary participant
function checkParticipantStatus() {
    const timeSinceLastDetected = (Date.now() - lastDetectedTime) / 1000; // Convert to seconds

    if (timeSinceLastDetected >= max_no_participant_time) {
        console.log("No primary participant detected for 15 seconds. Ending session.");
        surflyExtension.surflySession.apiRequest({
            cmd: 'end',
        });
    } else {
        console.log(`Time since last detection: ${timeSinceLastDetected}s`);
    }
}

// Set up intervals to check participants and evaluate status
setInterval(getSessionParticipants, 5000); // Check participants every 5 seconds
setInterval(checkParticipantStatus, 1000); // Evaluate participant status every second

/*XXXXXXXXXXXXXX|--DO NOT EDIT ABOVE--|XXXXXXXXXXXXXX*/
