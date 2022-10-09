// Adding variables to store our data
const usrInput = document.querySelector('.field-input')
const userLetterPreviw = document.querySelector('.plaque-prev')
const userPricePreviw = document.querySelector('#plaquePrice')

// Cout Letter Function
// function countLetters(some_data){
//   // console.log(some_data.length * 5);
//   const optName = some_data.replaceAll(' ', '')
//   const price = optName.length *5;
//
//   // console.log('Username: ', some_data);
//   // console.log('Price: ', price);
//
//   userLetterPreviw.textContent = some_data;
//   userPricePreviw.textContent = '$'+ price;
//
// }

// countLetters('Olayinka')
// countLetters('Dabo')
// countLetters('Henry')
// countLetters('Rob')
// countLetters('Noah Olatoye')
// countLetters('Nkem')

// usrInput.addEventListener('input', function(e){
//   countLetters(e.target.value)
// } )



// Arrow function
const countLetters = (some_data) =>{

  const optName = some_data.replaceAll(' ', '')
  const price = optName.length *5;
  userLetterPreviw.textContent = some_data;
  userPricePreviw.textContent = '$'+ price;

}

usrInput.oninput = (e)=>{
  countLetters(e.target.value)
}


//
