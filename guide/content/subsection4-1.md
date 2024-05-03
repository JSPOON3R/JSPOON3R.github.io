
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

If you don't want to use app.surfly.com but also don't need to build your own UI, you can simply embed the Surfly start bar into your own application using an iframe. This will allow you to access Surfly functionality from within whatever platform your Agents are most comfortable with.

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

The most simple way to use the queue code flow is to use the Queue Page built in to app.surfly.com. Simple log in and click "Queue". When a Session is started by the Customer, the Agent will see an entry appear in the Queue page. This will, by default, show the URL that the Customer is coming from. More information can be added here. 

<div class=image-container>
<img class="medium-image" src="https://raw.githubusercontent.com/JSPOON3R/JSPOON3R.github.io/main/guide/images/queuestart.gif" alt="Medium Image">
</div>

#### <span class="red bold">Complexity:</span> Intermediate

<ul class="dark-gray">
<span class="green bold">Implementation Effort: </span> Low <br>
<span class="blue bold">Technical Knowledge Required: </span> Embedding iFrames, REST API <br>
<span class="red bold">Time Taken to Implement: </span> ~ 30 minutes <br>
</ul>

If you don't want to use app.surfly.com but also don't need to build your own UI, you can simply embed the Surfly start bar into your own application using an iframe. This will allow you to access Surfly functionality from within whatever platform your Agents are most comfortable with.

Information on how to configure this flow can be found in <span class="red">Section 5</span>.

<div class=image-container>
<img class="medium-image" src="https://raw.githubusercontent.com/JSPOON3R/JSPOON3R.github.io/main/guide/images/embedded-pin-flow.gif" alt="Medium Image">
</div>


#### <span class="red bold">Complexity:</span> Advanced






















### <span class="red bold">Bold Title <i class="normal-font">thin italics:</i></span> The participant who opened/ loaded the tab. 

#### Lists
<!-- Red bullet points -->
<ul>
<li class="red bold"><a class="dark-gray normal-font">text</a></li>
<li class="red bold"><a class="dark-gray normal-font">text</a></li>
<li class="red bold"><a class="dark-gray normal-font">text</a></li>
</ul>

<!-- Red, bold numbers number sequence list -->
<span class="red bold">1.</span>Step 1<br>
<span class="red bold">2.</span>Step 2<br>
<span class="red bold">3.</span>Step 3<br>



#### Example of Adding Images

<div class=image-container>
<img class="small-image" src="https://demo.surfly.com/img/gif/you-them.gif" alt="Small Image">
</div>

This is additional plain text.

<div class=image-container>
<img class="medium-image" src="https://demo.surfly.com/img/gif/you-them.gif" alt="Medium Image">
</div>

More plain text.

<div class=image-container>
<img class="large-image" src="https://demo.surfly.com/img/gif/you-them.gif" alt="Large Image">
</div>

And yet more plain text.

#### code block

<div class="code-block">
    <pre><code class="language-javascript">// Example JavaScript code block
function greet(name) {
    return 'Hello, ' + name + '!';
}

console.log(greet('World')); // Output: Hello, World!
    </code></pre>
</div>

### Tables

#### with tick/cross icons

<table>
    <!-- Column sizing -->
        <colgroup>
           <col style="width: 32%;"> 
           <col style="width: 17%;"> 
           <col style="width: 17%;"> 
           <col style="width: 17%;"> 
           <col style="width: 17%;"> 
       </colgroup>
            <!-- Columns -->
            <tr>
                <!-- Row -->
                <td class="dark-blue-background lightest-gray bold table-header">Heading 1</td>
                <td class="dark-blue-background lightest-gray bold table-header">Heading 2</td>
                <td class="dark-blue-background lightest-gray bold table-header">Heading 3</td>
                <td class="dark-blue-background lightest-gray bold table-header">Heading 4</td>
                <td class="dark-blue-background lightest-gray bold table-header">Heading 5</td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">Column title</td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
                <td class="lightest-green-background green table-icon tick-icon"></td>
                <td class="lightest-red-background red table-icon cross-icon"></td>
            </tr>
            </table>

#### 2 X {columns} (for Q&A format)

<table>
            <!-- Columns -->
            <tr>
                <!-- Row -->
                <td class="dark-blue-background lightest-gray bold table-header">Heading 1</td>
                <td class="dark-blue-background lightest-gray bold table-header">Heading 2</td>
            </tr>
            <tr>
                <td class="light-blue-background lightest-gray table-column-header">Column 1 text</td>
                <td class="lightest-green-background dark-gray table-text">Column 2 text</td>
            </tr>
</table>

### links

## Read More:<br>
<ul>
<li class="red bold"><a class="dark-gray normal-weight"  href="https://docs.surfly.com/tutorials/session-continuation/">Session Continuation<br></a></li><br>
</ul>