console.log("background scriot loaded ");

//MAGIC LINK GENERATE: START 
// 
/*
let sessionId;

// Message listener
browser.runtime.onMessage.addListener((message, sender) => {
    console.log("message in bg script: ", message);
    
    if (!message.data) {
        console.log("message.data is undefined or null!");
        return;
    }

    console.log("message.data:", message.data);
    console.log("message.data.request:", message.data.payload);
    console.log("message.data.request:", message.data.sessionId);
    sessionId =  message.data.sessionId;

    if (message.data.request === "magic_link") {
        console.log("Generating Magic Link");
        generateMagicLink(message.data.payload);
    }
});



async function generateMagicLink(payload) {
    const REST_KEY = "rk_kTl1q1NNyGqztFnlvtZ0J8TzrOGU_xeE";

    // Create the JWT header
    const header = {
        alg: "HS256",
        typ: "JWT"
    };

    // Function to encode to Base64 URL format
    const base64UrlEncode = (input) => {
        return btoa(JSON.stringify(input))
            .replace(/=+$/, '')
            .replace(/\+/g, '-')
            .replace(/\//g, '_');
    };

    // Encode header and payload
    const jwtHeader = base64UrlEncode(header);
    const jwtPayload = base64UrlEncode(payload);

    // Create the signature
    const signatureInput = `${jwtHeader}.${jwtPayload}`;
    const encoder = new TextEncoder();
    const key = await crypto.subtle.importKey(
        "raw",
        encoder.encode(REST_KEY),
        { name: "HMAC", hash: "SHA-256" },
        false,
        ["sign"]
    );

    const signature = await crypto.subtle.sign(
        "HMAC",
        key,
        encoder.encode(signatureInput)
    );

    // Convert signature to Base64 URL format
    const jwtSignature = btoa(String.fromCharCode(...new Uint8Array(signature)))
        .replace(/=+$/, '')
        .replace(/\+/g, '-')
        .replace(/\//g, '_');

    // Assemble the JWT
    const magicLink = `${jwtHeader}.${jwtPayload}.${jwtSignature}`;

    // Use the generated magic link in your space URL
    const newMagicLink = `https://surfly.online/+webinar-template/?magic_link=${magicLink}&session_id==${sessionId}`;

    console.log(`Magic Link: ${newMagicLink}`);
    browser.runtime.sendMessage({
        data: {newMagicLink}
    });
};

//MAGIC LINK GENERATE: END
*/
