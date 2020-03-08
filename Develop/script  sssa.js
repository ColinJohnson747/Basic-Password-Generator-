// Assignment Code
var generateBtn = document.querySelector("#generate");



function generatePassword() {
  var confirmLength = prompt(
    "How long would you like your password? (8-128 characters)"
  );
  var confirmNumbers = confirm("Would you like numbers?");
  var confirmCharacters = confirm("Would you like characters?");
  var confirmUppercase = confirm("Would you like upper case letters?");
  var confirmLowercase = confirm("Would you like lower case letters?");


  function generate(length = confirmLength){
    var  uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var numbers = '0123456789';
    var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';




  }
}

// Write password to the #password input
function writePassword() {
  var passwordText = document.getElementById("#password");
  var password = generatePassword();
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
