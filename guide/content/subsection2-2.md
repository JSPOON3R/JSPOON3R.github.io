# Surfly Terminology

Terms and phrases you will need to be familiar with to design the optimal Surfly set-up and use case flow. 

## Roles Available inside a Session

### Session Roles - Quick Look

Session functionality differs somewhat between the Host, Participant in Control, Tab Owner and following Participants. These roles are not mutually exclusive and a single Participant can hold multiple combinations of each. For example:

<ul>
<li class="red bold"><a>The Host can be the following Participant in one tab and the in-Control Tab Owner of another tab simultaneously</a></li>
<li class="red bold"><a>The Participant in control can be anybody for any tab, if allowed by the Tab Owner</a></li>
<li class="red bold"><a>The Tab Owner can be anybody, as long as they loaded the tab in their browser</a></li>
<li class="red bold"><a>Every non-Tab Owner is a following Participant in a given tab</a></li>
</ul>

### Session Roles - Deep Dive

Let’s take a closer look at the different roles that can apply to each participant in differing combinations. Different roles provide different functions. The distribution of these roles depend on several factors which will be covered later. The basic roles inside a Surfly Session are as follows:

#### Participant: Any and all people who have entered a Surfly session are Participants.

This is the term for everybody in the Session. One Participant will be the Host. Outside of this role, there  is no distinction between Participants other than the roles they occupy within individual tabs. Therefore, the roles that a Session Participant has may vary between different tabs in a single Session. 

#### Host (Session Level):  The participant who started the session. This role applies across all tabs. 

This role of Host has some unique functions at the Session level not available to other Participants, regardless of Tab Ownership and Control at the tab level. The parameters of the Host role include:

<ul>
<li class="red bold"><a>Admit or Deny entry to the Session</a></li>
<li class="red bold"><a>Disable/enable Presenter mode</a></li>
<li class="red bold"><a>TSwitch between tabs in Presenter Mode</a></li>
<li class="red bold"><a>Close any tab</a></li>
<li class="red bold"><a>Grant or revoke the role of Host to another participant</a></li>
<li class="red bold"><a>End the Session</a></li>
<li class="red bold"><a>A Host cannot take control of a tab with a different Tab Owner without permission from the Tab Owner</a></li>
</ul>

In most cases, when a Session Starts the Host will also be the first Tab Owner for the initial tab in the session, meaning they are also in Control of that tab by default. 

 <b>The Host role can be changed using the meeting room UI or using Javascript as long as this is executed by the current Host.</b>

#### Tab Owner (Tab Level): The participant who opened/ loaded the tab. 

This is the person who opens a given tab and loads the content in their own browser. For the starting tab this will normally be the Host. However, any new tabs that are opened in the Session will set the Tab Owner as the person who opened it. The Tab Owner can be different for each tab in a session depending on who loads the content. When a participant opens a new tab, the web content loads in their browser and is shared with others. The parameters of the Tab Owner role include:

<ul>
<li class="red bold"><a>The exclusive ability to view masked content. This content will be masked for everybody but the Tab Owner at the tab level</a></li>
<li class="red bold"><a>Control of the tab by default</a></li>
<li class="red bold"><a>Ability to Give and Revoke the control of others for the specific tab</a></li>
<li class="red bold"><a>The ability to close the tab</a></li>
</ul>

As the person who loads the content, the Tab Owner will always be able to see masked elements and fields because we do not mask content from the view of the Tab Owner. 

<b>The Tab Owner cannot be changed. A new tab must be opened by the participant you want to be the Tab Owner.</b>

#### Control (Tab Level):  Like Tab Ownership, Control  is segregated per participant per tab. The person in Control will interact with the tab content while other participants can annotate.

Control determines who is able to browse on the current tab. By default, Control will go to the Tab Owner when a new tab is opened. Control can be requested by any Participant and transferred away from the Tab Owner. The Tab Owner, however, will remain the same, retain their right to revoke control and masking will never be impacted by Control Switching. The parameters of the in Control participant role include:

<ul>
<li class="red bold"><a>Navigate the page (click, scroll, input). Other Participants will annotate</a></li>
<li class="red bold"><a>Pass Control to others</a></li>
<li class="red bold"><a>Regardless of who is currently in Control, Tab Owner for a given tab will always be able to revoke the Control of others</a></li>
</ul>

<b>Control can be changed using the meeting room UI or using Javascript.</b>

### Session Roles - In Practice

The Host role is the only one that will apply across all tabs. Tab Ownership and Control can be different per tab. Different roles in different tabs will result in different abilities for Participants. 

TABLE

### Session Roles - What happens in Popular Flows?

Below are the default distributions of Session roles in popular implementations. Many of these default values can be changed without any user action necessary using the Javascript API. 

TABLE

Read more:<br>
[Role Overview](https://help.surfly.com/en/what-do-leader-and-follower-mean-in-a-surfly-sessi)<br>
[Control Switching in the UI](https://help.surfly.com/en/easy-control-switching)<br>
[Role changes with Javascript](https://docs.surfly.com/javascript-api/surfly-session)<br>
[Using Spaces]( https://help.surfly.com/en/spaces)<br>


 
