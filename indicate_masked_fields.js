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
    var css = '#personalIdNumber { border: 2px solid red; }';
    insertCss(css);
}

insertCssHighContrast();

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
    textBox.innerText = 'Red borders indicate masked fields';


    document.body.appendChild(textBox);
}

insertFixedTextBox();














