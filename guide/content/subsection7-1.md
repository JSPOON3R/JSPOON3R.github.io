# <span class="list-numbers">7.1</span> Why Am I Being Logged Out?

This is to be expected for some websites (especially during the trial period). If you are logged in to a website and become logged out when starting a Session, it is likely due to the way your website maintains state.

## Quick Look

Most websites maintain a logged in state with cookies. When you enter your username and password, a cookie is stored in the browser that remembers you are authenticated. All subsequent requests to the website domain will use this cookie to identify you, keeping you logged in. 

When a Session starts, Surfly uses Javascript to copy the cookies from your browser Session into the Surfly Session, keeping the transition seamless. When you start a Surfly Session, Surfly uses Javascript to copy all of the cookies in your current browser session into the Surfly Session. However, sometimes the authentication cookie that will keep you logged in is of the type <b>httpOnly</b>.

### The Cause

HttpOnly cookies are a subset of authentication cookies that can only be communicated over http on the server side. Simply put - this means Surfly Javascript cannot copy them. Therefore when you start a Session, the website no longer recognises you and you are taken back to the login page to prove your identity.

### The Solution

We have a workaround to this that we call [Session Continuation](https://docs.surfly.com/tutorials/session-continuation/). When HttpOnly cookies are involved in maintaining state, Session Continuation allows these cookies to be seamlessly copied into the Session with the others. This will ensure you remain logged in when the Session begins.

<b>So, do you need Session Continuation to enable Surfly to keep you logged in?</b>

This depends on whether the cookie that keeps you logged in is httpOnly. 

## How to check for <span class="red bold">httpOnly cookies</span>

### Follow the Steps Below

<span class="red bold">1.</span> Outside of Surfly, open your website and log in<br><br>
<span class="red bold">2.</span> Open the <i>Application Tab</i> in your browser developer tools<br> 
<br>
You can do this by right clicking on the webpage and clicking <i>Insepct</i>. From here, navigate to the <i>Application</i> tab and you will see something similar to the screenshot below:
<br>
<br>

<div class=image-container>
<img class="large-image" src="https://raw.githubusercontent.com/JSPOON3R/JSPOON3R.github.io/main/guide/images/httpOnly-check.png" alt="Large Image">
</div>

<ul>
<span class="red bold">3.</span> Find the cookie responsible for keeping you logged in<br>
<span class="green bold">Green: </span> Cookie name <br>
<span class="blue bold">Blue: </span> Cookie Domain <br>
<span class="red bold">Red: </span> httpOnly flag <br>
</ul>
<br>
The cookie domain is likely to be the same as your website. The name will vary. Search through the rows in your browser and look for the relevant cookie. You can test by deleting a cookie you suspect might be your authentication cookie and refeshing the page. If you were logged in before the refresh and are logged out after deleting the cookie - this is the cookie that keeps you authenticated.
<br>

<span class="red bold">4.</span> Check the httpOnly flag<br>
<br>
In the red box, you can see some of the cookies marked with a tick. This denotes that the cookie is httpOnly.

#### <b>If the Cookie is not httpOnly</b>

All cookies that are not httpOnly should be copied over javascript when the Surfly Session begins. It is possible that you do not have <b>cookie_transfer_enabled</b> checked in your configurations. Navigate to <i>Settings > Options > Session Functionality</i> and ensure the checkbox is ticked. If there are still issues after this, please reach out. 

#### <b>If the Cookie is httpOnly</b>

If you see a tick next to the cookie you identified then your website is using httpOnly cookies to maintain state and you will probably need [Session Continuation](https://docs.surfly.com/tutorials/session-continuation/). This is likely to resolve the issue. Please reach out to your contact at Surfly to proceed with the next steps.

<b>If you are currently in a Trial Period, we will not set up Session Continuation until we are ready to deploy. At this point, we will be able to remove the need to log in again when you start a Session. 

## Read More:<br>
<ul>
<li class="red bold"><a class="dark-gray normal-font" href="https://docs.surfly.com/tutorials/session-continuation/">Session Continuation<br></a></li><br>
</ul>


 
