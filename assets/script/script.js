// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy-btn");
var pwRange = document.querySelector("#pw-range");

function generatePassword() {
  // get value from pwLength slider input
  const pwLength = pwRange.value; 
  charSet = setCharacterArray();
  var pwStr = "";
  
  for(var i = 0; i < pwLength; i++) {
    // pull random character from charSet and add to new string
    const random = Math.random() * charSet.length; 
    const floored = Math.floor(random);
    pwStr += charSet[floored];
  }
  return pwStr;
}

// compile array of characters to use for password based on user input
function setCharacterArray() {
  // arrays of characters to use in password
  const uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const lowercase = ["abcdefghijklmnopqrstuvwxyz"];
  const numbers = ["0123456789"];
  const symbols = [" !\"#$%&'()*+,-.\/:;<=>?@[\\]^_`{|}~"]; // special chars includes " " space
  // empty array for chosen characters
  var chosenChars = [];
  // get selections from inputs
  document.getElementById("uppercase").checked ? chosenChars += uppercase : void 0;
  document.getElementById("lowercase").checked ? chosenChars += lowercase : void 0;
  document.getElementById("numbers").checked ? chosenChars += numbers : void 0;
  document.getElementById("special-char").checked ? chosenChars += symbols : void 0;

  // verify there are characters to use for the password and return
  if (chosenChars.length > 0) {
    return chosenChars
   } else {
      alert("Please select at least one type of character to use in your password!");
   }
}

// copies password to the clipboard
function copyToClipboard() {
  const pasteText = document.querySelector("#password").value;
  navigator.clipboard.writeText(pasteText);
  console.log(pasteText);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// // Get value for password length slider and add to slider as output
function outputUpdate(vol) {
   document.querySelector("#pw-length").value = vol;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Add event listener to copy-to-clipboard button
copyBtn.addEventListener("click", copyToClipboard);