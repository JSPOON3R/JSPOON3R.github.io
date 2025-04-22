(function() {
  console.log("=== Iframe Detection Script ===");

  // 1. Check if in iframe
  const inIframe = window.self !== window.top;
  console.log("Is page inside iframe?", inIframe);

  if (!inIframe) {
    console.log("Not in an iframe. Exiting.");
    return;
  }

  // 2. Try to access parent URL directly (Same-Origin only)
  try {
    const parentURL = window.parent.location.href;
    console.log("Parent window URL (direct access):", parentURL);
    console.log("Same-origin: YES");
  } catch (err) {
    console.warn("Direct access to parent URL blocked (likely cross-origin).");

    // 3. Try to get referrer (parent URL if allowed)
    const referrer = document.referrer;
    if (referrer) {
      console.log("Document referrer (possible parent URL):", referrer);
    } else {
      console.warn("No document.referrer info available.");
    }

    console.log("Same-origin: NO or unknown (cross-origin protection active)");

    // 4. Use postMessage fallback to request parent URL
    console.log("Attempting to request parent URL via postMessage...");

    // Listen for postMessage response
    window.addEventListener('message', (event) => {
      console.log("Received postMessage from parent:", event.data);
    });

    // Send message to parent asking for URL
    window.parent.postMessage({ request: "parentURL" }, "*");
  }
})();
