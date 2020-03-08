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

// Write password to the #password input
function writePassword() {
  
  var passwordText = document.querySelector("#password");
  var password = generatePassword()
  function generatePassword() {
    for (var i = 0; i < 5; i++) {
      randomSpecialCharacter();
      randomNumber();
      randomUppercase();
      randomLowercase();
    }
  }
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
