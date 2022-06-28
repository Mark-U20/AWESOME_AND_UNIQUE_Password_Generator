// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//this function generates a password 
function generatePassword() {
  var password = "";
  var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
  var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var specialCharacters = "!@#$^&%*()+=-[]\/{}|:<>?,.";
  var passwordLength = prompt("How many characters would you like your password to be?");

  while (passwordLength < 8 || passwordLength > 128) {
    if (passwordLength < 8) {
      var passwordLength = parseInt(prompt("Your password was too short, please enter a password with at least 8 characters."));
    }
    else {
      var passwordLength = parseInt(prompt("Your password is too long, please enter a password with less than 128 characters."));

    }



  }

  var promptCounter = 0;
//loop until at least ONE prompt is chosen
  while (promptCounter < 1) {
    var lowerCaseCheck = confirm("Would you like to include lowercase letters?");
    if (lowerCaseCheck) {
      promptCounter++;
    }
    var upperCaseCheck = confirm("Would you like to include uppercase letters?");
    if (upperCaseCheck) {
      promptCounter++;
    }
    var numbersCheck = confirm("Would you like to include numbers?");
    if (numbersCheck) {
      promptCounter++;
    }
    var specialCharactersCheck = confirm("Would you like to include special characters?");
    if (specialCharactersCheck) {
      promptCounter++;
    }
    //only if they are indecisive tell them they need to choose at least one
    if (promptCounter < 1) {
      alert("You must choose at least one character type to proceed.");
    }
  }

  var password = "";
  var passwordArray = [];
  var passwordLength = parseInt(passwordLength);
  if (lowerCaseCheck === true) {
    passwordArray.push(lowerCaseCharacters);
  }
  if (upperCaseCheck === true) {
    passwordArray.push(upperCaseCharacters);
  }
  if (numbersCheck === true) {
    passwordArray.push(numbers);
  }
  if (specialCharactersCheck === true) {
    passwordArray.push(specialCharacters);
  }
  for (var i = 0; i < passwordLength; i++) {
    //randomely get a choose a type from the array
    var randomIndex = Math.floor(Math.random() * passwordArray.length); 
    //select string from the array and set to randomCharacter
    var randomCharacter = passwordArray[randomIndex];
    //choose a random character in the string of randomCharacter
    var randomCharacterIndex = Math.floor(Math.random() * randomCharacter.length); 
    //set randomCharacter to a random point in the string
    var randomCharacter = randomCharacter[randomCharacterIndex];
    //append randomcharacter to the password
    password += randomCharacter;
  }
  return password;
}
