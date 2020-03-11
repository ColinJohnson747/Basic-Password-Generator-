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

function generatePassword() {
  if (lengthValue => 8 && lengthValue <= 128) {
    var chosenEntry = [];

    if (confirmNumbers === true) {
      chosenEntry.push(numbers);
    }
    if (confirmCharacters === true) {
      chosenEntry.push(characters);
    }
    if (confirmUppercase === true) {
      chosenEntry.push(upperCase);
    }
    if (confirmLowercase === true) {
      chosenEntry.push(lowerCase);
    }
    if (
      confirmLowercase === false &&
      confirmUppercase === false &&
      confirmCharacters === false &&
      confirmNumbers === false
    ) {
      alert(
        "At least on criteria must be selected.\nPlease refresh and try again."
      );
    }
  } else {
    alert("Please choose a password with a length of 8-128.");
  }
  var pass = "";
  for (var i = 0; i < lengthValue; i++) {
    var newRandom = Math.floor(Math.random() * chosenEntry.length);
    pass = pass.concat(chosenEntry[newRandom]());
  }
  return pass;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("#password");

  passwordText.value = passwordText;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
