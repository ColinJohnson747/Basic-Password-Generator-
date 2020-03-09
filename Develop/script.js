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

  //create alert loop to ask for parameters of password generation (length, characters used, etc)
  function generatePassword() {
   

    if (confirmCharacters === false) {
      function generatePasswordLUN() {
        var length = lengthValue;
        (charset =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"),
          (retVal = "");
        for (var i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
      }
    } else if (confirmNumbers === false) {
      function generatePasswordLUC() {
        var length = lengthValue;
        (charset =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+][{}';:<>|?"),
          (retVal = "");
        for (var i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
      }
    } else if (confirmUppercase === false) {
      function generatePasswordLCN() {
        var length = lengthValue;
        (charset =
          "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+][{}';:<>|?"),
          (retVal = "");
        for (var i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
      }
    } else if (confirmLowercase === false) {
      function generatePasswordUCN() {
        var length = lengthValue;
        (charset =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+][{}';:<>|?"),
          (retVal = "");
        for (var i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
      }
    } else {
      function generatePasswordLUCN() {
        var length = lengthValue;
        (charset =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+][{}';:<>|?"),
          (retVal = "");
        for (var i = 0, n = charset.length; i < length; ++i) {
          retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
      }
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
