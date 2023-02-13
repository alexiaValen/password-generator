var charLength = 8;
var choiceArr = [];

var specialChar = ['~', '`', '!', '#', '$', '%', '^', '&', '*', '>', '<', '+', '-', '_', ];
var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numbers = ['0','1','2','3','4','5','6','7','8','9']

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts(); //true or false
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;
  } else {
    passwordTest.value = "";
  }

}

function generatePassword(){
   // generatePassword based on prompts
   var password = "";
   for(var i = 0; i < charLength; i++){
      var random = Math.floor(Math.random() * choiceArr.length);
      password = password + choiceArr[random];
  }
  return password;
}

function getPrompts() {
    charLength = parseInt(prompt("How many characters do you want your password to be? (8-128 characters)"));

    if(isNaN(charLength) || charLength < 8 || charLength > 128) {
        alert('Character length has to be a number, 8-128 digits.');
        return false;
    }

    if (confirm('Would you like lowercase letters in your password?')) {
      choiceArr = choiceArr.concat(lowerCase);
    }
    if (confirm('Would you like uppcase letters in your password?')) {
      choiceArr = choiceArr.concat(upperCase);
    }
    if (confirm('Would you like special characters in your password?')) {
      choiceArr = choiceArr.concat(specialChar);
    }
    if (confirm('Would you like lowercase numbers in your password?')) {
      choiceArr = choiceArr.concat(numbers);
    }
    return true;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
