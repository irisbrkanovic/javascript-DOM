let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContent = 'Clicked!';
}

paragraphElement.addEventListener('click', changeParagraphText);

//

let inputField = document.querySelector('input');

function retrieveUserInput(event) {
    let enteredText = inputField.value;
    console.log(enteredText);
    console.log(event);
}

inputField.addEventListener('input', retrieveUserInput)