let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com';
newAnchorElement.textContent = 'This leads to google';

let firstParagraph = document.querySelector('p');

firstParagraph.append(newAnchorElement);


//remove elements

let firstH1Element = document.querySelector('h1');

firstH1Element.remove();
//firstH1Element.parentElement.removeChild(firstH1Element);


//move elemeents

firstParagraph.parentElement.append(firstParagraph);


//innerHTML

console.log(firstParagraph.innerHTML);

firstParagraph.innerHTML = 'Hi! This is <strong>important</strong>.'