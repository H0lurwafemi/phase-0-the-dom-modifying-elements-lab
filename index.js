// Create a new <h1> element with id 'victory'
const newHeader = document.createElement('h1');
newHeader.id = 'victory';

// Set the text content of the new <h1> element
newHeader.textContent = 'YOUR-NAME is the champion';

// Replace the existing 'main' element with the new <h1> element
const main = document.getElementById('main');
main.parentNode.replaceChild(newHeader, main);

  