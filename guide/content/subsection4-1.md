
# <span class="header-numbers">4.1.1</span> Agent-Side Flow

The experience for Agents and Customers will usually be different. This section focuses on finding the right set up and workflow for your Agents.

## <span class="header-numbers">4.1.1.A </span> Agent Inbound <br><span class="red italic">(Agent responds to customer)</span>

For Agent inbound flows, the Session is started by the Customer and the Agent will <i>respond</i> to the incoming interaction. There are two primary ways this can be done. 

### Pin Flow

<ul>
<li class="red bold"><a class="dark-gray normal-font">The Pin Flow is best used for escalations from existing interactions, such as a phone or IM conversation</a></li>
<li class="red bold"><a class="dark-gray normal-font">The Customer will trigger a Session (see section 5) and be presented with a 4 digit pin code</a></li>
<li class="red bold"><a class="dark-gray normal-font">The Customer will communicate this pin code to the Agent through the channel they are already using</a></li>
<li class="red bold"><a class="dark-gray normal-font">There is no need for routing because you already know which agent should join the Surfly Session</a></li>
<li class="red bold"><a class="dark-gray normal-font">The Agent types the pin code relayed to them into Surfly and joins the session</a></li>
</ul>

<i>(Please see the "What Happens in Popular Flows" table in section 2.2 to understand the default <b>Roles</b> given to the Customer and Agent in this type of flow.)</i>

#### <span class="red bold">Complexity:</span> Simple

<ul class="dark-gray">
<span class="green bold">Implementation Effort: </span> None <br>
<span class="blue bold">Technical Knowledge Required: </span> None <br>
<span class="red bold">Time Taken to Implement: </span> None <br>
</ul>

The most simple way to use the pin code flow is to use the Start Page built in to app.surfly.com. Simple log in and click "Start". When the Agent recieved a pin code from a Customer, they just have to enter it here.

<div class=image-container>
<img class="medium-image" src="https://github.com/JSPOON3R/JSPOON3R.github.io/blob/main/guide/images/pinstart.gif?raw=true" alt="Medium Image">
</div>

#### <span class="red bold">Complexity:</span> Intermediate

<ul class="dark-gray">
<span class="green bold">Implementation Effort: </span> Low <br>
<span class="blue bold">Technical Knowledge Required: </span> Embedding iFrames, REST API <br>
<span class="red bold">Time Taken to Implement: </span> ~ 30 minutes <br>
</ul>

If you don't want to use app.surfly.com but also don't need to build your own UI, you can simply embed the Surfly start bar into your own application using an iframe with the Surfly Embed API. This will allow you to access Surfly start functionality from within whatever platform your Agents are most comfortable with.

Information on how to configure this flow can be found in <span class="red">Section 5</span>.

<div class=image-container>
<img class="medium-image" src="https://raw.githubusercontent.com/JSPOON3R/JSPOON3R.github.io/main/guide/images/embedded-pin-flow.gif" alt="Medium Image">
</div>


#### <span class="red bold">Complexity:</span> Advanced









### Queue Flow

<ul>
<li class="red bold"><a class="dark-gray normal-font"></a></li>
<li class="red bold"><a class="dark-gray normal-font"></a></li>
<li class="red bold"><a class="dark-gray normal-font"></a></li>
<li class="red bold"><a class="dark-gray normal-font"></a></li>
<li class="red bold"><a class="dark-gray normal-font"></a></li>
</ul>

<i>(Please see the "What Happens in Popular Flows" table in section 2.2 to understand the default <b>Roles</b> given to the Customer and Agent in this type of flow.)</i>

#### <span class="red bold">Complexity:</span> Simple

<ul class="dark-gray">
<span class="green bold">Implementation Effort: </span> None <br>
<span class="blue bold">Technical Knowledge Required: </span> None <br>
<span class="red bold">Time Taken to Implement: </span> None <br>
</ul>

The most simple way to use the queue code flow is to use the Queue Page built in to app.surfly.com. Simple log in and click "Queue". When a Session is started by the Customer, the Agent will see an entry appear in the Queue page. This will, by default, show the URL that the Customer is coming from. The Agent clicks "Take call" to join the inbound Session.
<div class=image-container>
<img class="medium-image" src="https://raw.githubusercontent.com/JSPOON3R/JSPOON3R.github.io/main/guide/images/queuestart.gif" alt="Medium Image">
</div>

#### <span class="red bold">Complexity:</span> Intermediate

<ul class="dark-gray">
<span class="green bold">Implementation Effort: </span> Low <br>
<span class="blue bold">Technical Knowledge Required: </span> Embedding iFrames, REST API <br>
<span class="red bold">Time Taken to Implement: </span> ~ 30 minutes <br>
</ul>

If you don't want to use app.surfly.com but also don't need to build your own UI, you can also use the Surfly Embed API to bring the Surfly queue into your own application using an iframe. This will allow you to access Surfly queue functionality from within whatever platform your Agents are most comfortable with.

Information on how to configure this flow can be found in <span class="red">Section 5</span>.

<div class=image-container>
<img class="medium-image" src="https://raw.githubusercontent.com/JSPOON3R/JSPOON3R.github.io/main/guide/images/zendesk-queue.gif" alt="Medium Image">
</div>


#### <span class="red bold">Complexity:</span> Advanced



## Read More:<br>
<ul>
<li class="red bold"><a class="dark-gray normal-weight"  href="https://docs.surfly.com/tutorials/session-continuation/">Session Continuation<br></a></li><br>
</ul>