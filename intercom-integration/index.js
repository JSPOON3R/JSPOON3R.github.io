import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch"; // To make the external API call
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

var follower_link_var;
var leader_link_var;
var conversation_id_var;
var admin_id_var;
var initialCanvas = {
  "canvas": {
    "content": {
      "components": [
        {
          "type": "text",
          "text": "*New co-browsing session*",
          "style": "header",
          "align": "center",
          "margin": {
            "top": "md",
            "bottom": "sm"
          }
        },
        {
          "type": "input",
          "id": "title",
          "placeholder": "",
          "align": "center",
          "width": "full",
          "style": "paragraph"
        },
        {
          "type": "spacer",
          "size": "xs"
        },
        {
          "type": "button",
          "id": "start-new-session",
          "label": "Start on New Page & Send Link",
          "style": "primary",
          "action": {
            "type": "submit"
          }
        },
        {
          "type": "spacer",
          "size": "xl"
        },
        {
          "type": "text",
          "text": "*Join the Customer*",
          "style": "header",
          "align": "center",
          "margin": {
            "top": "md",
            "bottom": "sm"
          }
        },
        {
          "type": "spacer",
          "size": "xs"
        },
        {
          "type": "button",
          "id": "start-customer-session",
          "label": "Start & Join Customer",
          "style": "primary",
          "width": "full",
          "action": {
            "type": "submit"
          }
        }
      ]
    }
  }
};
// Final canvas with dynamic leaderLink and followerLink
var newSessionCanvas = {
  canvas: {
    content: {
      components: [
        {
          type: "text",
          text: "Session created",
          style: "header",
          align: "center"
        },
        {
          type: "button",
          label: "Send Link",
          style: "primary",
          id: "send_button",
          action: {
            type: "submit",
          }
        },
        {
          type: "button",
          label: "Join",
          style: "primary",
          id: "join_button",
          action: {
            type: "url",
            url: ""
          }
        },
        {
          type: "button",
          label: "Go Back",
          style: "primary",
          id: "go_back_button",
          action: {
            type: "submit",
          }
        }
      ]
    }
  }
};
var joinCustomerCanvas = {
  canvas: {
    content: {
      components: [
        {
          type: "text",
          text: "Session created",
          style: "header",
          align: "center"
        },
        {
          type: "button",
          label: "Join Customer Session",
          style: "primary",
          id: "join_button_2",
          action: {
            type: "submit",
          }
        },
        {
          type: "button",
          label: "Go Back",
          style: "primary",
          id: "go_back_button_3",
          action: {
            type: "submit",
          }
        }
      ]
    }
  }
};
var linkSentCanvas = {
    canvas: {
      content: {
        components: [
          {
            type: "text",
            text: "Link sent to the conversation!",
            style: "header",
            align: "center",
          },
          {
            type: "button",
            label: "Go Back",
            style: "primary",
            id: "go_back_button_2",
            action: {
              type: "submit",
            },
          },
        ],
      },
    },
  };
var surflyApiErrorCanvas = {
    canvas: {
      content: {
        components: [
          {
            type: "text",
            text: "Error creating the session",
            style: "header",
            align: "center"
          }
        ]
      }
    }
  };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.use(express.static(path.join(__dirname)));

const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

// Intercom Initialize Endpoint
app.post("/initialize", (req, res) => {
  console.log("Recieved initialize request:", req.body);
  conversation_id_var = req.body.conversation.id;
  admin_id_var = req.body.admin.id;
  console.log("Sending response:", initialCanvas);
  console.log("conversation_id_var:", conversation_id_var);
  console.log("admin_id_var:", admin_id_var);
  res.setHeader('Content-Type', 'application/json');
  res.send(initialCanvas);
});

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  res.setHeader('Surrogate-Control', 'no-store');
  next();
});

// Handle submit actions
app.post("/submit", async (req, res) => {
  console.log("Received submit request:", req.body);

  if (req.body.component_id === "start-new-session") {
    // Extract the input value (URL)
    const inputValues = req.body.input_values;
    const urlToBrowse = inputValues.title;

    try {
      // Make the external API call to Surfly
      const apiResponse = await fetch("https://surfly.com/v2/sessions/?api_key=99671227762b43c2a96daa066ee006e2", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: urlToBrowse
        })
      });

      const apiData = await apiResponse.json();
        leader_link_var = apiData.leader_link;
      follower_link_var = apiData.follower_link;
       console.log("leader_link_var:", leader_link_var);
      console.log("follower_link_var:", follower_link_var);
      //update the url in newSessionCanvas
      newSessionCanvas.canvas.content.components.forEach(component => {
        if (component.id === "join_button") {
          component.action.url = leader_link_var; // Set the leader link
        }
      });

      // Send newSessionCavas back
      res.send(newSessionCanvas);

    } catch (error) {
      console.error("Error calling Surfly API:", error);
      res.send(surflyApiErrorCanvas);
    }
  } 
    else if (req.body.component_id === "start-customer-session") {
      console.log("Join customer session page requested:", intercomData);
      res.send(joinCustomerCanvas);
    }
  else if (req.body.component_id === "send_button") {
    // Extract the follower link and conversation/admin details from payload
    try {
      // Make the POST request to Intercom's Conversations API to reply
      const intercomResponse = await fetch(`https://api.intercom.io/conversations/${conversation_id_var}/reply`, {
        method: "POST",
        headers: {
          Authorization: `Bearer dG9rOjI5NTI3ZWJmXzE1ODhfNDYwZF9iMDc3XzkzMzE0ZTRlOWVkNToxOjA=`, // Replace with your actual token
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          type: "admin",
          message_type: "comment",
          admin_id: admin_id_var,  // ID of the admin sending the message
          body: `Here is the link: ${follower_link_var}`,  // The actual message content
        }),
      });

      const intercomData = await intercomResponse.json();
      console.log("Message posted to Intercom:", intercomData);
      res.send(linkSentCanvas);
    } catch (error) {
      console.error("Error posting message to Intercom:", error);
      res.send({ status: "error", message: "Failed to post the link." });
    }
  } else if (req.body.component_id === "go_back_button") {
    res.send(initialCanvas); // Send the initial canvas to go back
  } else if (req.body.component_id === "go_back_button_2") {
    res.send(newSessionCanvas); // Send the initial canvas to go back
  }
  else if (req.body.component_id === "go_back_button_3") {
    res.setHeader('Content-Type', 'application/json');
    res.send(initialCanvas); // Send the initial canvas to go back
  }else {
    res.send(initialCanvas);
  }
});
