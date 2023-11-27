let hideSelector; 
hideSelector = "#InsuredAddress,#HasAcceptedDisclaimer-checkbox-group > label > div > div > span"
console.log('Selector masked:', hideSelector);

var cssKeyframes = `
  @keyframes glow {
    0% {
      box-shadow: 0 0 5px rgba(0, 0, 255, 0.7);
    }
    50% {
      box-shadow: 0 0 20px rgba(0, 0, 255, 0.7);
    }
    100% {
      box-shadow: 0 0 5px rgba(0, 0, 255, 0.7);
    }
  }
`;

// Append the keyframes to the style element


function insertCss(code) {
  var style = document.createElement('style');
  style.type = 'text/css';

  if (style.styleSheet) { // IE
    style.styleSheet.cssText = code;
  } else { // Other browsers
    style.appendChild(document.createTextNode(code));
    style.appendChild(document.createTextNode(cssKeyframes));
  }

  document.head.appendChild(style);
}

function insertCssMaskingBorder() {
  var css = hideSelector + ' {border: 2px solid transparent;,border-radius: 10px;,animation: glow 3s infinite alternate;}'; 
  insertCss(css);
}

function insertFixedTextBox() {
  var textBox = document.createElement('div');

  textBox.style.position = 'fixed';
  textBox.style.bottom = '10px';
  textBox.style.left = '10px';
  textBox.style.zIndex = '9999';
  textBox.style.backgroundColor = '#233246';
  textBox.style.padding = '10px';
  textBox.style.border = '1px solid #fff';
  textBox.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.2)';
  textBox.style.color = 'white';
  textBox.style.fontWeight = 'bold';
  textBox.style.opacity = '0.5';
  textBox.innerText = 'Red borders indicate masked areas';

  document.body.appendChild(textBox);
}
insertCssMaskingBorder();
insertFixedTextBox();