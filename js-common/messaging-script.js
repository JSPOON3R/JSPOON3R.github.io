console.log('script_embedded injected');
(function(s,u,r,f,l,y){s[f]=s[f]||{init:function(){s[f].q=arguments}};
l=u.createElement(r);y=u.getElementsByTagName(r)[0];l.async=1;
l.src='https://uat.surfly.com/surfly.js';y.parentNode.insertBefore(l,y);})
(window,document,'script','Surfly');

if (Surfly) {
    console.log('script_embedded loaded Surfly');
} else {
    console.log('script_embedded failed to load Surfly');

}

Surfly.init( function(initResult) {
  if (initResult.success) {
      console.log('Surfly loaded in iFrame page');
  } else {
    console.log('Surfly init failed in iFrame');
  }
});

    window.addEventListener("message", function(event) {
        console.log("Received message from origin:", event.origin);
        if (event.origin.includes("surfly.com")) {
            console.log("Message received from " + event.origin + " on child page: " + event.data.params.msg.message);
    
            // Show modal if it is hidden
            const floatingModal = document.getElementById("floatingModal");
            if (floatingModal.style.display === "none") {
                floatingModal.style.display = "block";
            }
        }
    });
    
