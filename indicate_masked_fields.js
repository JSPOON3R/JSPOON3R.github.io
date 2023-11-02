document.addEventListener('DOMContentLoaded', function () {
    const apiKey = 'a69e09988d8d46a1a6b11ad7245eb023';
    const url = `https://surfly.com/v2/company/options/?api_key=${apiKey}`;
  
    let hideSelector; // Define hideSelector as a global variable
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        hideSelector = data.hide_selector; // Assign the value from the API response to hideSelector
        console.log('Value from hide_selector:', hideSelector);
  
        // Call the functions after you have the hideSelector value
        insertCssHighContrast();
        insertFixedTextBox();
      })
      .catch(error => {
        console.error('Error:', error);
      });
  
    function insertCss(code) {
      var style = document.createElement('style');
      style.type = 'text/css';
  
      if (style.styleSheet) { // IE
        style.styleSheet.cssText = code;
      } else { // Other browsers
        style.appendChild(document.createTextNode(code));
      }
  
      document.head.appendChild(style);
    }
  
    function insertCssHighContrast() {
      var css = hideSelector + ' { border: 2px solid red; }'; // Use hideSelector here
      insertCss(css);
    }
  
    function insertFixedTextBox() {
      var textBox = document.createElement('div');
  
      textBox.style.position = 'fixed';
      textBox.style.top = '10px';
      textBox.style.left = '10px';
      textBox.style.zIndex = '9999';
      textBox.style.backgroundColor = 'red';
      textBox.style.padding = '10px';
      textBox.style.border = '1px solid #fff';
      textBox.style.boxShadow = '0 0 5px rgba(0, 0, 0, 0.2)';
      textBox.style.color = 'white';
      textBox.style.fontWeight = 'bold';
      textBox.innerText = 'Red borders indicate masked fields';
  
      document.body.appendChild(textBox);
    }
  });
  