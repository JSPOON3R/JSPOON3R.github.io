# Session Role Terminology

Terms and phrases you will need to be familiar with to design the optimal Surfly set-up and use case flow. 

## Quick Look

Session functionality differs somewhat between the Host, Participant in Control, Tab Owner and following Participants. These roles are not mutually exclusive and a single Participant can hold multiple combinations of each. For example:

<ul>
<li class="red bold"><a class="dark-gray normal-font">The <b>Host</b> can be the following Participant in one tab and the in-Control <b>Tab Owner</b> of another tab simultaneously</a></li>
<li class="red bold"><a class="dark-gray normal-font">The Participant in <b>Control</b> can be anybody for any tab, if allowed by the <b>Tab Owner</b></a></li>
<li class="red bold"><a class="dark-gray normal-font">The <b>Tab Owner</b> can be anybody, as long as they loaded the tab in their browser</a></li>
<li class="red bold"><a class="dark-gray normal-font">Every non-Tab Owner is a following Participant in a given tab</a></li>
</ul>

## Deep Dive

Let’s take a closer look at the different roles that can apply to each participant in differing combinations. Different roles provide different functions. The distribution of these roles depend on several factors which will be covered later. The basic roles inside a Surfly Session are as follows:

### <span class="red">Participant:</span> Any and all people who have entered a Surfly session are Participants.

This is the term for everybody in the Session. One Participant will be the Host. Outside of this role, there  is no distinction between Participants other than the roles they occupy within individual tabs. Therefore, the roles that a Session Participant has may vary between different tabs in a single Session. 

### <span class="red">Host (<i>Session Level:</i>)</span>  The participant who started the session. This role applies across all tabs. 

This role of Host has some unique functions at the Session level not available to other Participants, regardless of Tab Ownership and Control at the tab level. The parameters of the Host role include:

<ul>
<li class="red bold"><a class="dark-gray normal-font">Admit or Deny entry to the Session</a></li>
<li class="red bold"><a class="dark-gray normal-font">Disable/enable Presenter mode</a></li>
<li class="red bold"><a class="dark-gray normal-font">Switch between tabs in Presenter Mode</a></li>
<li class="red bold"><a class="dark-gray normal-font">Close any tab</a></li>
<li class="red bold"><a class="dark-gray normal-font">Grant or revoke the role of Host to another participant</a></li>
<li class="red bold"><a class="dark-gray normal-font">End the Session</a></li>
<li class="red bold"><a class="dark-gray normal-font">A Host cannot take control of a tab with a different Tab Owner without permission from the Tab Owner</a></li>
</ul>

In most cases, when a Session Starts the Host will also be the first Tab Owner for the initial tab in the session, meaning they are also in Control of that tab by default. 

 <b>The Host role can be changed using the meeting room UI or using Javascript as long as this is executed by the current Host.</b>

### <span class="red">Tab Owner (<i>Tab Level:</i>)</span> The participant who opened/ loaded the tab. 

This is the person who opens a given tab and loads the content in their own browser. For the starting tab this will normally be the Host. However, any new tabs that are opened in the Session will set the Tab Owner as the person who opened it. The Tab Owner can be different for each tab in a session depending on who loads the content. When a participant opens a new tab, the web content loads in their browser and is shared with others. The parameters of the Tab Owner role include:

<ul>
<li class="red bold"><a class="dark-gray normal-font">The exclusive ability to view masked content. This content will be masked for everybody but the Tab Owner at the tab level</a></li>
<li class="red bold"><a class="dark-gray normal-font">Control of the tab by default</a></li>
<li class="red bold"><a class="dark-gray normal-font">Ability to Give and Revoke the control of others for the specific tab</a></li>
<li class="red bold"><a class="dark-gray normal-font">The ability to close the tab</a></li>
</ul>

As the person who loads the content, the Tab Owner will always be able to see masked elements and fields because we do not mask content from the view of the Tab Owner. 

<b>The Tab Owner cannot be changed. A new tab must be opened by the participant you want to be the Tab Owner.</b>

### <span class="red">Control (<i>Tab Level:</i>)</span> The person in Control will interact with the tab content while other participants can annotate.

Like Tab Ownership, Control is segregated per participant per tab. Control determines who is able to browse on the current tab. By default, Control will go to the Tab Owner when a new tab is opened. Control can be requested by any Participant and transferred away from the Tab Owner. The Tab Owner, however, will remain the same and retain their right to revoke control. Masking will never be impacted by Control Switching. The parameters of the in Control participant role include:

<ul>
<li class="red bold"><a class="dark-gray normal-font">Navigate the page (click, scroll, input). Other Participants will annotate</a></li>
<li class="red bold"><a class="dark-gray normal-font">Pass Control to others</a></li>
<li class="red bold"><a class="dark-gray normal-font">Regardless of who is currently in Control, Tab Owner for a given tab will always be able to revoke the Control of others</a></li>
</ul>

<b>Control can be changed using the meeting room UI or using Javascript.</b>

## <b>In Practice</b> 

The Host role is the only one that will apply across all tabs. Tab Ownership and Control can be different per tab. Different roles in different tabs will result in different abilities for Participants. 

<table>
            <!-- Columns -->
            <tr>
                <!-- Row -->
                <td class="dark-blue-background lightest-gray bold table-header">Action</td>
                <td class="dark-blue-background lightest-gray bold table-header">Host</td>
                <td class="dark-blue-background lightest-gray bold table-header">Tab Owner</td>
                <td class="dark-blue-background lightest-gray bold table-header">In-Control Participant</td>
                <td class="dark-blue-background lightest-gray bold table-header">Other Participants</td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">Click, scroll, enter information</td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-green-background green table-icon tick-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">Web content loads and runs inside their browser</td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-green-background green table-icon tick-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">Sets screen dimensions based on screen size of the device in use</td>
                <td class="lightest-green-background green table-icon tick-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">In Control by default</td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-green-background green table-icon tick-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">Can Close any tabs regardless of Tab Ownership</td>
                <td class="lightest-green-background green table-icon tick-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">Can close tabs for which they are the Tab Owner only</td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-green-background green table-icon tick-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">Can make another Participant the Host</td>
                <td class="lightest-green-background green table-icon tick-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">Can switch tabs</td>
                <td class="lightest-green-background green table-icon tick-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">Must obtain consent to take Control (excluding Javascript)</td>
                <td class="lightest-green-background green table-icon tick-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-green-background green table-icon tick-icon"></td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">Ability to give Control to any other Participant</td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-green-background green table-icon tick-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">Ability to return Control to Tab Owner</td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-green-background green table-icon tick-icon"></td>
                <td class="lightest-green-background green table-icon tick-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">Able to revoke Control</td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-green-background green table-icon tick-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">Masked elements in a tab blocked from view</td>
                <td class="lightest-green-background green table-icon tick-icon"></td>                <td class="lightest-green-background green table-icon tick-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-green-background green table-icon tick-icon"></td>
                <td class="lightest-green-background green table-icon tick-icon"></td>                <td class="lightest-red-background red table-icon cross-icon"></td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">Able to see Masked elements in a tab</td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-green-background green table-icon tick-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
            </tr>
            </table>

## <b>What happens in Popular Flows?</b>

Below are the default distributions of Session roles in popular implementations. Many of these default values can be changed without any user action necessary using the Javascript API. 

 <table>
            <!-- Columns -->
            <tr>
                <!-- Row -->
                <td class="dark-blue-background lightest-gray bold table-header">Flow</td>
                <td class="dark-blue-background lightest-gray bold table-header">Default Role Distribution on Start</td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">Default “Get Live Help” Widget</td>
                <td class="lightest-green-background dark-gray">The person who clicks the widget is the Host, and the first Tab Owner. This person will see all masked content and will Control the session as the Host.</td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">Custom Button / Landing Page (Javascript API)</td>
                <td class="lightest-green-background dark-gray">The Participant who clicks the button/loads the Session is the Host, the first Tab Owner and in Control. This person will see all Masked content and will Control the Session as the Host.</td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">Surfly App Start Page</td>
                <td class="lightest-green-background dark-gray">The Participant who clicks <i>Start Session</i> is the Host, the first Tab Owner and in Control. This Participant will see all Masked content and will Control the Session as the Host.</td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">Spaces</td>
                <td class="lightest-green-background dark-gray">Regardless of who joins first,	the Space owner is the Host, the first Tab Owner and in Control. This Participant will see all masked content and will Control the Session as the Host.</td>
            </tr>            <tr>
                <td class="light-blue-background lightest-gray table-column-header">REST API</td>
                <td class="lightest-green-background dark-gray">Highly configurable but by default the first Participant to join the Session from the API generated links will be the Host, the first Tab Owner and in Control. This Participant will see all masked content and will Control the Session as the Host.</td>
            </tr>
</table>

Read more:<br>
[Role Overview](https://help.surfly.com/en/what-do-leader-and-follower-mean-in-a-surfly-sessi)<br>
[Control Switching in the UI](https://help.surfly.com/en/easy-control-switching)<br>
[Role changes with Javascript](https://docs.surfly.com/javascript-api/surfly-session)<br>
[Using Spaces]( https://help.surfly.com/en/spaces)<br>


 
