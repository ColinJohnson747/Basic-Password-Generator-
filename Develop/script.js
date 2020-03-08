// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCase = document.querySelector("#lowercase");

function randomLowercase() {
  var letterArray = "abcdefghijklmnopqrstuvwxyz".split("");
  var randomLetterLowercase =
    letterArray[Math.floor(Math.random() * letterArray.length)];
  console.log(randomLetterLowercase);
}
randomLowercase();

function randomUppercase() {
  var letterArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  var randomLetterUppercase =
    letterArray[Math.floor(Math.random() * letterArray.length)];
  console.log(randomLetterUppercase);
}
randomUppercase();

function randomNumber() {
  var randomNumber = "0123456789".split("");
  var randomNumSelection =
    randomNumber[Math.floor(Math.random() * randomNumber.length)];
  console.log(randomNumSelection);
}
randomNumber();

function randomSpecialCharacter() {
  var randomSpecialCharacter = "!@#$%^&&*()-=+][;'.,<>/?`~_".split("");
  var randomCharacterSelection =
    randomSpecialCharacter[
      Math.floor(Math.random() * randomSpecialCharacter.length)
    ];
  console.log(randomCharacterSelection);
}
randomSpecialCharacter();

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
