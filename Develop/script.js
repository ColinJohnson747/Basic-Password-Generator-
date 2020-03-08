// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = document.querySelector("#lowercase");
var totalLetters = document.querySelector("#quantity");
var uppercase = document.querySelector("#uppercase");
var specialCharacter = document.querySelector("#specialCharacters");
var numbers = document.querySelector("#numbers");

function randomLowercase() {
  var letterArray = "abcdefghijklmnopqrstuvwxyz".split("");
  var randomLetterLowercase =
    letterArray[Math.floor(Math.random() * letterArray.length)];
  console.log(randomLetterLowercase);
}

function randomUppercase() {
  var letterArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var randomLetterUppercase =
    letterArray[Math.floor(Math.random() * letterArray.length)];
  console.log(randomLetterUppercase);
}

function randomNumber() {
  var randomNumber = "0123456789".split("");
  var randomNumSelection =
    randomNumber[Math.floor(Math.random() * randomNumber.length)];
  console.log(randomNumSelection);
}

function randomSpecialCharacter() {
  var randomSpecialCharacter = "!@#$%^&&*()-=+][;'.,<>/?`~_".split("");
  var randomCharacterSelection =
    randomSpecialCharacter[
      Math.floor(Math.random() * randomSpecialCharacter.length)
    ];
  console.log(randomCharacterSelection);
}
var confirmNumbers = confirm("Would you like numbers?");
var confirmCharacters = confirm("Would you like characters?");
var confirmUppercase = confirm("Would you like upper case letters?");
var confirmLowercase = confirm("Would you like lower case letters?");
var confirmLength = prompt(
  "How long would you like your password? (8-128 characters)"
);

// Write password to the #password input
function writePassword() {
  var passwordText = document.getElementById("#password");
  var password = parseInt( generatePassword());

  //create alert loop to ask for parameters of password generation (length, characters used, etc)
  function generatePassword() {
    while (password < parseInt(confirmLength)) {
      if (confirmLowercase === true) {
        randomLowercase();
      } else if (password === parseInt(confirmLength)) {
        break;
      } else if (confirmUppercase === true) {
        randomUppercase();
      } else if (password === parseInt(confirmLength)) {
        break;
      } else if (confirmCharacters === true) {
        randomSpecialCharacter();
      } else if (password === parseInt(confirmLength)) {
        break;
      } else if (confirmNumbers === true) {
        randomNumber();
      } else if (password === parseInt(confirmLength)) {
        break;
      }
    }
    passwordText.value = password;
    alert("Your password is" + password);
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
