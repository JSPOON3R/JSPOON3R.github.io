# <span class="header-numbers">1.1</span> What is Universal Co-browsing?

Surfly is the only solution that offers true Universal Co-browsing. In the simplest terms possible. Universal co-browsing is our way of saying that a Surfly session can be used to browse absolutely anything that can be loaded from a web browser via the internet. With Surfly, unlike other tools, this includes all websites and all web apps.

We are uniquely able to do this due to the way our technology works. Most co-browsing vendors rely on embedding their code into your website. These are therefore limited to the domains you are able to modify and can increase implementation effort significantly. Surfly can be used without any changes to the target website or the browser being used. We work through middleware.

## Co-browsing Everywhere - Made Simple

### Visiting a Website Without Co-browsing

Let's start with the basics. Imagine you want to navigate to www.amazon.com. How does this actually happen?

<span class="red bold">1.</span> You enter www.amazon.com into your browser <br>
<span class="red bold">2.</span> Your browser asks the Amazon server for the web page <br>
<span class="red bold">3.</span> The Amazon server sends the web page to your browser <br>
<span class="red bold">4.</span> Your browser renders the web page so you can use it <br>

<div class=image-container>
<img class="medium-image" src="https://raw.githubusercontent.com/JSPOON3R/JSPOON3R.github.io/main/guide/images/request.png" alt="Medium Image">
</div>

This is a simple request and response from you the website you are trying to visit. Next, let's look at how most Co-browsing vendors enable you to collaborate with others 


### Enabling Co-browsing

To enable co-browsing on a website, we have to somehow modify its code to enable this new functionality. In the picture above you can see there are two places this could be done - on the website server or on your browser.

#### The Browser (plugins)

Modifying a website from your browser is done with plugins. While these are great for lots of things, they certainly aren't scalable as they require everyone to have the same one installed. 

#### The Server (website code)

Every web page is a page made of code. These pages live on servers and they go to browsers when somebody asks for them. It is possible to modify the webpage code on the server and add a co-browsing tool. Now everyone who asks the server for the webpage will get the co-browsing code included. 

This is how most co-browsing tools work - you add a snippet of code to your website. Now your website can allow two people to share an experience. 

<div class=image-container>
<img class="medium-image" src="https://raw.githubusercontent.com/JSPOON3R/JSPOON3R.github.io/main/guide/images/embedded.png" alt="Medium Image">
</div>

The problem here is that your new co-browsing tool is restricted to the places you are able to add this code. The vast majority of the internet is unavailable to you. Any parts of your website that borrow from other websites (e.g. a google maps iframe) either won't work or will have their functionality reduced. 

### Enabling Universal Co-browsing

Surfly has created a completely unique approach to visual collaboration, and it is the technology employed there that makes the tool so powerful. Surfly works through what we call "Interaction Middleware". This is our fancy way of saying we have another space, in addition to the browser and the server, where you can take full control. 

Let's visit amazon.com again through Surfly. 

<span class="red bold">1.</span> You enter www.amazon.com into your browser <br>
<span class="red bold">2.</span> Your browser asks the Surfly server to get the webpage from Amazon <br>
<span class="red bold">3.</span> Surfly asks the Amazon servers for the website code <br>
<span class="red bold">4.</span> The Amazon server gives the code to Surfly <br>
<span class="red bold">5.</span> Surfly gives it to you <br>
<span class="red bold">6.</span> Your browser renders the webpage so you can use it <br>

<div class=image-container>
<img class="medium-image" src="https://raw.githubusercontent.com/JSPOON3R/JSPOON3R.github.io/main/guide/images/Surfly.png" alt="Medium Image">
</div>

So what's changed? There is now a middle space that the website will pass through on its way to you and the people you are browsing with. This middle space not only allows Surfly to make any modifications to the website here. We enable co-browsing, but we also enable you to change anything you like. You take full control over the browsing experience in a way no other tool can enable. 

## Read More:<br>
<ul>
<li class="red bold" href="https://www.surfly.com/surfly-vs-co-browsing-tools/"><a class="dark-gray normal-font">Surfly vs Other Tools<br></a></li><br>
<li class="red bold" href="https://www.surfly.com/interaction-middleware/"><a class="dark-gray normal-font">Interaction Middleware<br></a></li><br>
</ul>
