
# <span class="header-numbers">4.1</span> Agent-Side Flow - Inbound
<span class="blue normal-font">(Agent responds to customer)</span>

The experience for Agents and Customers will usually be different. This section focuses on finding the right set up and workflow for your Agents. For Agent inbound flows, the Session is started by the Customer and the Agent will <i>respond</i> to the incoming interaction. There are two primary ways this can be done. 

## Pin Flow 
<span class="blue normal-font">Best for Escalations</span>

<ul>
<li class="red bold"><a class="dark-gray normal-font">The Pin Flow is best used for escalations from existing interactions, such as a phone or IM conversation</a></li>
<li class="red bold"><a class="dark-gray normal-font">The Customer will trigger a Session (see section 5) and be presented with a 4 digit pin code</a></li>
<li class="red bold"><a class="dark-gray normal-font">The Customer will communicate this pin code to the Agent through the channel they are already using</a></li>
<li class="red bold"><a class="dark-gray normal-font">There is no need for routing because you already know which agent should join the Surfly Session</a></li>
<li class="red bold"><a class="dark-gray normal-font">The Agent types the pin code relayed to them into Surfly and joins the session</a></li>
</ul>

You can find the level of integration required based on your needs, the resources you have available and you timelines.

### <span class="dark-blue bold">Complexity:</span> Simple

#### Requirements
<ul class="dark-gray">
<li class="red bold"><span class="darkest-gray bold">Implementation Effort: </span> None </li>
<li class="red bold"><span class="darkest-gray bold">Technical Knowledge Required: </span> None </li>
<li class="red bold"><span class="darkest-gray bold">Time Taken to Implement: </span> None </li>
</ul>

#### The Surfly App
The most simple way to use the pin code flow is to use the Start Page built in to [app.surfly.com](app.surfly.com). Simple log in and click "Start". When the Agent recieved a pin code from a Customer, they just have to enter it here.
<br>
<br>
<div class=image-container>
<img class="medium-image" src="https://github.com/JSPOON3R/JSPOON3R.github.io/blob/main/guide/images/pinstart.gif?raw=true" alt="Medium Image">
<figcaption>The pin code within the Surfly app</figcaption>
</div>

### <span class="dark-blue bold">Complexity:</span> Intermediate

#### Requirements
<ul class="dark-gray">
<li class="red bold"><span class="darkest-gray bold">Implementation Effort: </span> Low </li>
<li class="red bold"><span class="darkest-gray bold">Technical Knowledge Required: </span> Embedding iFrames, REST API </li>
<li class="red bold"><span class="darkest-gray bold">Time Taken to Implement: </span> ~ 30 minutes </li>
</ul>
<br>

#### The Embed API
If you don't want to use [app.surfly.com](app.surfly.com) but also don't want to build your own UI, you can simply embed the Surfly start bar into your own application using an iframe with the [Surfly Embed API](https://docs.surfly.com/embed-api/). This will allow you to access Surfly start functionality from within whatever platform your Agents are most comfortable with.

Information on how to configure this flow can be found in <span class="red">Section 5</span>.
<br>
<br>
<div class=image-container>
<img class="medium-image" src="https://raw.githubusercontent.com/JSPOON3R/JSPOON3R.github.io/main/guide/images/embedded-pin-flow.gif" alt="Medium Image">
<figcaption>The pin code flow embedded into NICE CX Platform</figcaption>
</div>

### <span class="dark-blue bold">Complexity:</span> Advanced

#### Requirements

--WIP--

Please see the "What Happens in Popular Flows" table in section 2.2 to understand the default <b>Roles</b> given to the Customer and Agent in this type of flow.

## Queue Flow 
<span class="blue normal-font">Best for New Interactions</span>

<ul>
<li class="red bold"><a class="dark-gray normal-font">The queue will show all incoming interactions when somebody has triggered a Session</a></li>
<li class="red bold"><a class="dark-gray normal-font">Agents can join incoming interactions from the Queue</a></li>
<li class="red bold"><a class="dark-gray normal-font">The queue will show the Agent from which URL the Session has been triggered</a></li>
<li class="red bold"><a class="dark-gray normal-font">Custom meta data can be added to the queue to give Agents more information</a></li>
<li class="red bold"><a class="dark-gray normal-font">The queue can be used in our app, embedded in another app or an entirely custom queing system can be created with out APIs</a></li>
</ul>

### <span class="dark-blue bold">Complexity:</span> Simple

#### Requirements
<ul class="dark-gray">
<li class="red bold"><span class="darkest-gray bold">Implementation Effort: </span> None </li>
<li class="red bold"><span class="darkest-gray bold">Technical Knowledge Required: </span> None </li>
<li class="red bold"><span class="darkest-gray bold">Time Taken to Implement: </span> None </li>
</ul>

#### The Surfly App
The most simple way to use the queue code flow is to use the Queue Page built in to app.surfly.com. Simple log in and click "Queue". When a Session is started by the Customer, the Agent will see an entry appear in the Queue page. This will, by default, show the URL that the Customer is coming from. The Agent clicks "Take call" to join the inbound Session.
<div class=image-container>
<img class="medium-image" src="https://raw.githubusercontent.com/JSPOON3R/JSPOON3R.github.io/main/guide/images/queuestart.gif" alt="Medium Image">
<figcaption>The queue code flow within the Surfly app</figcaption>
</div>

### <span class="dark-blue bold">Complexity:</span> Intermediate

#### Requirements
<ul class="dark-gray">
<li class="red bold"><span class="darkest-gray bold">Implementation Effort: </span> Low </li>
<li class="red bold"><span class="darkest-gray bold">Technical Knowledge Required: </span> Embedding iFrames, REST API </li>
<li class="red bold"><span class="darkest-gray bold">Time Taken to Implement: </span> ~ 30 minutes </li>
</ul>

#### The Embed API
If you don't want to use app.surfly.com but also don't need to build your own UI, you can also use the [Surfly Embed API](https://docs.surfly.com/embed-api/) to bring the Surfly queue into your own application using an iframe. This will allow you to access Surfly queue functionality from within whatever platform your Agents are most comfortable with.

Information on how to configure this flow can be found in <span class="red">Section 5</span>.
<br>
<br>

<div class=image-container>
<img class="medium-image" src="https://github.com/JSPOON3R/JSPOON3R.github.io/blob/main/guide/images/zendesk-queue.gif?raw=true" alt="Medium Image">
<figcaption>The queue code embedded within Zendesk</figcaption>
</div>
<br>

### <span class="dark-blue bold">Complexity:</span> Advanced

#### Requirements

--WIP--

Please see the "What Happens in Popular Flows" table in section 2.2 to understand the default <b>Roles</b> given to the Customer and Agent in this type of flow.

## Read More:<br>
<ul>
<li class="red bold"><a class="dark-gray normal-weight"  href="https://www.surfly.com/admin-guide/">Admin User Guide<br></a></li><br>
<li class="red bold"><a class="dark-gray normal-weight"  href="https://docs.surfly.com/category/javascript-api">Javascript API<br></a></li><br>
<li class="red bold"><a class="dark-gray normal-weight"  href="https://docs.surfly.com/embed-api/">Embed API<br></a></li><br>
<li class="red bold"><a class="dark-gray normal-weight"  href="https://docs.surfly.com/webhooks">Webhooks<br></a></li><br>
</ul>