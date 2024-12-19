/*XXXXXXXXXXXXXX|--ADJUST CONFIGURATION: START--|XXXXXXXXXXXXXX*/

//Time with no Agent before session ends (minutes)
let max_no_agent_minutes = 2;

//The website you want remainig participants to redirect to when the session ends
let post_session_redirect_url = "www.surfly.com";

//The email domain used to identify an Agent. Include the @, e.g. @company.com
let company_email_domain = "@surfly.com"

/*XXXXXXXXXXXXXX|--ADJUST CONFIGURATION: END--|XXXXXXXXXXXXXX*/
/*XXXXXXXXXXXXXX|--DO NOT EDIT BELOW--|XXXXXXXXXXXXXX*/
// Array to keep track of Surfly participants
let agentParticipants = [];
let agent_missing_count = 0;

// Function to check if email is from surfly.com
function isCompanyEmail(email) {
    return email && email.toLowerCase().endsWith(company_email_domain.toLowerCase());
}

// Function to get session participants
function getSessionParticipants() {
    console.log('making api request');
    surflyExtension.surflySession.apiRequest({
        cmd: 'get_session_participants',
    });
}

// Set up message listener for participant data
surflyExtension.surflySession.onMessage.addListener((message) => {
    if (message.msg === "get_session_participants") {
        console.log("session participants", message);
        
        // Get array of agents who are online and in the session
        const currentAgentParticipants = message.participants
            .filter(participant => isCompanyEmail(participant.email) && participant.online)
            .map(participant => participant.email);

        // Update our tracking array
        agentParticipants = currentAgentParticipants;
        console.log('Current Surfly participants:', agentParticipants);

        // If no Surfly employees are online, end the session
        if (agentParticipants.length === 0) {
            // If agent is missing
            if (agent_missing_count < max_no_agent_minutes) {
                // Increase missing count by 1
                agent_missing_count++;
                console.log(`Agent missing count (check every minute): ${agent_missing_count}`+"/"+max_no_agent_minutes);
            } else {
                // agent_missing_count is >= no_agent_minutes
                console.log("Agent missing threshold reached. Ending session.");
                surflyExtension.surflySession.apiRequest({
                    cmd: 'end',
                    redirect: post_session_redirect_url,
                });
            }
        } else {
            // Agent is present, reset the missing count if desired
            agent_missing_count = 0;
            console.log("Agent is present, count reset.");
        }
    }
});

// Set up interval to call the function every 60 seconds
setTimeout(() => {
    getSessionParticipants(); // First run after 10 seconds
    setInterval(getSessionParticipants, 60000); // Subsequent runs every 60 seconds
}, 10000);
/*XXXXXXXXXXXXXX|--DO NOT EDIT ABOVE--|XXXXXXXXXXXXXX*/