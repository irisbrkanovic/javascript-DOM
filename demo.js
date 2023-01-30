const productNameInput = document.getElementById('product-name');
const remainingChars = document.getElementById('remaining-chars');

const maxAllowedChars = productNameInput.maxLength;

function updateRemainingCharacters(event) {
    const enteredText = event.target.value;
    const enteredTextLegth = enteredText.length;

    const remainingCharacters = maxAllowedChars - enteredTextLegth;

    remainingChars.textContent = remainingCharacters;

if (remainingCharacters === 0) {
    productNameInput.classList.add('error');
    remainingChars.classList.add('error');
} else if (remainingCharacters <= 10) {
    productNameInput.classList.add('warning');
    remainingChars.classList.add('warning');
    productNameInput.classList.remove('error');
    remainingChars.classList.remove('error');
} else {
    productNameInput.classList.remove('warning');
    remainingChars.classList.remove('warning');
    
};


}

productNameInput.addEventListener('input', updateRemainingCharacters);

