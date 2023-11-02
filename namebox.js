





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
  textBox.style.zIndex = 2147483647;

  textBox.innerText = 'Participants: name';

  document.body.appendChild(textBox);
}
insertFixedTextBox();















