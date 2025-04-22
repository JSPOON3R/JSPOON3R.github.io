
console.log(" LOG_TEST eferfr3f");

(function (s, u, r, f, l, y) {
  s[f] = s[f] || { init: function () { s[f].q = arguments } };
  l = u.createElement(r); y = u.getElementsByTagName(r)[0]; l.async = 1;
  l.src = 'https://surfly.com/surfly.js'; y.parentNode.insertBefore(l, y);
})
  (window, document, 'script', 'Surfly');
var settings = {
  // Surfly session options can be set here, or at the Company/Plan levels.
  widget_key: '99671227762b43c2a96daa066ee006e2',
};
console.log(" LOG_TEST hereeeee");
Surfly.init(settings, function (initResult) {
  if (initResult.success) {
    console.log(" LOG_TEST Loaded");
    // Save original console.log
    const consoleMethods = ['log', 'warn', 'error', 'info', 'debug'];
    const originalConsole = {};
    
    // Save original methods
    consoleMethods.forEach(method => {
      originalConsole[method] = console[method];
    
      console[method] = function (...args) {
        // 1. Call original console method
        originalConsole[method].apply(console, args);
    
        try {
          // 2. Serialize log message
          const logMessage = args.map(arg => {
            try {
              return typeof arg === 'object' ? JSON.stringify(arg) : String(arg);
            } catch (e) {
              return String(arg);
            }
          }).join(' ');
    
          // 3. Gather contextual data
          const context = {
            [`console.${method}`]: logMessage,
            timestamp: new Date().toISOString(),
            url: window.location.href,
            domain: window.location.hostname,
            path: window.location.pathname,
            userAgent: navigator.userAgent,
            referrer: document.referrer
          };
    
          // 4. Send to Surfly if session exists
          if (window.Surfly && Surfly.listSessions && Surfly.listSessions().length > 0) {
            Surfly.listSessions()[0].log(context);
          }
        } catch (err) {
          originalConsole.log('Error sending log to Surfly:', err);
        }
      };
    });
    
  }
  else {
    console.log(" LOG_TEST Surfly was unable to initialize properly lalalalalala.")
  }
});






