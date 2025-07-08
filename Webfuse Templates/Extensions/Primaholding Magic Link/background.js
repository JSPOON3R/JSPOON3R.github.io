console.log("background script works!");
magicLinkInput = {};

async function generateMagicLink() {
    const res = await fetch('https://magiclink-demo-heroku.herokuapp.com/generate-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: magicLinkInput
    });

    const data = await res.json();
    console.log(data); // {message: "Magic Link", link: "..."}
    alert(data.link);
}

browser.runtime.onMessage.addListener((message) => {
    console.log("from extension... ", message);
    if (message.action === "magic-link") {
        magicLinkInput.newTab = message.newTabLink;
        magicLinkInput.sessionId = message.sessionId;
        console.log("Magic link info updated: ", magicLinkInput);
        generateMagicLink();
    }
});
