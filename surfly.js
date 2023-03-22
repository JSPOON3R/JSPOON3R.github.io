
  // STARTING UP: START

// reveal the api builder button start
        function Expose_api_view() {
            document.getElementById('api_builder').style.display = "block";
        }
//reveal the api builder button end

//STARTING UP: END

//API BUILDER: START
//ho are you dropdown start

        /* When the user clicks on the button,
        toggle between hiding and showing the dropdown content */
        function dropdown() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        // Close the dropdown menu if the user clicks outside of it
        window.onclick = function (event) {
            if (!event.target.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
//who are you dropdown end

//store api key entry/update display start
        function collectApiKey() {
            var key_input = document.getElementById("apikey_input_box").value
            localStorage.setItem('stored_key', key_input)
            console.log("API_KEY submitted: " + key_input)
            console.log("Key stored locally: " + localStorage.getItem('stored_key'))
        }
//ADD LIST ITEM UPDATE TO THE ABOVE

//Store api key entry/update display end






// function to detect both api key and body have been added to request and expose call api button


//call api start-

        let stored_key = localStorage.getItem('stored_key')

        function callAPI() {
            const response = fetch("https://surfly.com/v2/agents/access-token/?api_key=" + stored_key, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: `{
    "agent_id": 321854,
    "email": "john@surfly.com",
    "name": "John",
    "role": "admin",
    "force_new": false
}`,
            })
                .then(response => response.json())
                .then(response => console.log(JSON.stringify(response)))

        }
//all api end
//API BUILDER: END

//STEP 2. EMBED URLS
//expose urls with blank tokens start

//expose urls with blank tokens end



//EXPOSE TOKEN INPUT

        function Exposetokenbutton() {
            document.getElementById('token_button_div').style.display = "block";
        }


//ONCE TOKEN IS RECIEVED:

//STORE AGENT_TOKEN

        function returntoken() {
            var token_input = document.getElementById("token_input_box").value
            localStorage.setItem('stored_token', token_input)
            console.log("AGENT_TOKEN submitted: " + token_input)
            console.log("Token stored locally: " + localStorage.getItem('stored_token'))
        }


//'APPLY AGENT_TOKEN TO IFRAME' FUNCTIONS-->

        let stored_token = localStorage.getItem('stored_token')

        function updateurl_startsession() {
            let start_session = document.getElementById("start_session");
            let url_string = "https://app.surfly.com/embed/start/";
            var url_token = localStorage.getItem('stored_token')
            let adsURL = url_string + "?agent_token=" + url_token;
            console.log("iFrame URL = " + adsURL);
            start_session.src = adsURL;
        }

        function updateurl_supportqueue() {
            let start_session = document.getElementById("support_queue");
            let url_string = "https://app.surfly.com/embed/queue/";
            var url_token = localStorage.getItem('stored_token')
            let adsURL = url_string + "?agent_token=" + url_token;
            console.log("iFrame URL = " + adsURL);
            start_session.src = adsURL;
        }

        function updateurl_sessionhistory() {
            let start_session = document.getElementById("session_history");
            let url_string = "https://app.surfly.com/embed/history/";
            var url_token = localStorage.getItem('stored_token')
            let adsURL = url_string + "?agent_token=" + url_token;
            console.log("iFrame URL = " + adsURL);
            start_session.src = adsURL;
        }

        function updateurl_companyoptions() {
            let start_session = document.getElementById("company_options");
            let url_string = "https://app.surfly.com/embed/options/";
            var url_token = localStorage.getItem('stored_token')
            let adsURL = url_string + "?agent_token=" + url_token;
            console.log("iFrame URL = " + adsURL);
            start_session.src = adsURL;
        }


//EXPOSE EMBED URL SECTION

        function ExposeEmbedUrls() {
            document.getElementById('generate_urls_div').style.display = "block";
        }

//EXPOSE IFRAME
//EXPOSE IFRAME FUNCTIONS START
//XPOSE SESSION iFRAME

        function Exposeiframes_session() {
            document.getElementById('iframe_div_session').style.display = "block";
        }
//EXPOSE SUPPORT iFRAME

        function Exposeiframes_support() {
            document.getElementById('iframe_div_support').style.display = "block";
        }
//EXPOSE HISTORY iFRAME

        function Exposeiframes_history() {
            document.getElementById('iframe_div_history').style.display = "block";
        }

//EXPOSE COMPANY iFRAME

        function Exposeiframes_company() {
            document.getElementById('iframe_div_company').style.display = "block";
        }
//EXPOSE IFRAME FUNCTIONS END