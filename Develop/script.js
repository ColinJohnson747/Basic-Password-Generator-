//Assignment Code
var generateBtn = document.querySelector("#generate");
var confirmLength = prompt(
  "How long would you like your password? (8-128 characters)"
);
var confirmNumbers = confirm("Would you like numbers?");
var confirmCharacters = confirm("Would you like characters?");
var confirmUppercase = confirm("Would you like upper case letters?");
var confirmLowercase = confirm("Would you like lower case letters?");

var lengthValue = parseInt(confirmLength);

function writePassword() {
  var passwordText = document.getElementById("#password");
  var Password = generatePassword();

  function lowerCase() {
    var lower = "abcdefghijklmnopqrstuvwxyz".split("");
    var randomize = Math.floor(Math.random() * 26);
    return lower[randomize];
  }

  function upperCase() {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var randomize = Math.floor(Math.random() * 26);
    return upper[randomize];
  }

  function numbers() {
    var numbers = "1234567890".split("");
    var randomize = Math.floor(Math.random() * 10);
    return numbers[randomize];
  }
  function characters() {
    var characters = "!@#$%^&*()_+][{}';:<>|?".split("");
    var randomize = Math.floor(Math.random() * 23);
    return characters[randomize];
  }

  //create alert loop to ask for parameters of password generation (length, characters used, etc)
  function generatePassword() {
    if (lengthValue => 8 && lengthValue <= 128){
      var chosenEntry = [];

      if (confirmNumbers === true){
        chosenEntry.push(numbers);
      }
      if (confirmCharacters === true){
        chosenEntry.push(characters);
      }
      



    }


  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
