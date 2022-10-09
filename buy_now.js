// DECLEARATION OF VARIABLES
const userInputF = document.querySelector('.field-input');
const userLeterPreviewF = document.querySelector('.plaque-prev');
const userPricePreviewF = document.querySelector('#plaquePrice');
const buyNowBtn = document.querySelector('.buy-submit');
const userInputDefaultValue = userLeterPreviewF.textContent;

// CREATION OF ELEMENTS
const messageGroup = document.createElement('div')
messageGroup.className = 'message-group';
document.body.appendChild(messageGroup);


// BUY NOW FUNCTION
const buyNow = () => {
  const optSpace = userInputF.value.split(" ").join("").length;

  messageGroup.innerHTML = '<p class="message"></P> <div class="reset-btn"></div>';
  const message = document.querySelector('.message');
  const resetBtn = document.querySelector('.reset-btn');
  resetBtn.textContent = 'Reset';

  if(userInputF.value === ''){
    message.textContent = 'Enter a set of letters.';
  }else if (userInputF.value.toUpperCase() == userInputDefaultValue.toUpperCase()) {
    message.textContent = 'Enter a new text.';
  }else if(optSpace > 15  ) {
    message.textContent = 'We have 15 letters left in stock, and you have exceeded the limit.'
  }else {
    message.className = 'message success';
    resetBtn.className = 'reset-btn reset-success'
    message.textContent = 'HURRAY! Conditions are met ✔';
  }

  // RESET BUTTON FUNCTION
  resetBtn.addEventListener('click', function() {
    messageGroup.style.display = 'none';
    userInputF.value = '';
    userLeterPreviewF.textContent = 'Your name';
    userPricePreviewF.textContent = `$0`

  })

}


// ADDING EVENTLISTENER TO THE BUY NOW BUTTON
buyNowBtn.onclick =() => {
  buyNow();
  messageGroup.style.display = 'flex';
}
