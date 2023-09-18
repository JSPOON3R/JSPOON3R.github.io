document.addEventListener('DOMContentLoaded', function() {
  // Your code here

  function insertCss(code) {
    var style = document.createElement('style');
    style.type = 'text/css';

    if (style.styleSheet) {  // IE
      style.styleSheet.cssText = code;
    } else { // Other browsers
      style.innerHTML = code;
    }
    document.getElementsByTagName("head")[0].appendChild(style);
  }

  function insertCssHighContrast() {
    var css = '\
      body {background-image: url(https://raw.githubusercontent.com/JSPOON3R/JSPOON3R.github.io/main/favicon.ico) !important; content: "" !important; background-repeat: no-repeat !important; background-size: cover !important;} \
      img {background-image: url(https://raw.githubusercontent.com/JSPOON3R/JSPOON3R.github.io/main/favicon.ico) !important; background-repeat: no-repeat !important; background-size: cover !important;} \
      * {background-image: url(https://raw.githubusercontent.com/JSPOON3R/JSPOON3R.github.io/main/favicon.ico) !important; content: "" !important; background-repeat: no-repeat !important; background-size: cover !important;}\
    ';
    insertCss(css);
  }

  insertCssHighContrast();

  const imgElements = document.querySelectorAll('img');
  const newImageUrl = 'https://raw.githubusercontent.com/JSPOON3R/JSPOON3R.github.io/main/favicon.ico';

  imgElements.forEach(function(img) {
    img.src = newImageUrl;
    img.srcset = newImageUrl;
    img.xmlns = newImageUrl;
  });

  // End of your code
});