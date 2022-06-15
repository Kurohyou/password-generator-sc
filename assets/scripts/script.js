// Assignment code here
const setupButton = document.getElementById('setup');
const form = document.getElementById('password-criteria');
const generateBtn = document.getElementById("generate");
const allSpecial = document.getElementById('special-all');
const specialInput = document.getElementById('special-characters');
const characterInput = document.getElementById('characters');
const pwCopy = document.getElementById('pwcopy');
const password = document.getElementById('password');
const copyAlert = document.getElementById('copy-alert');
/**
 * Password generation function adapted from the Generate UUID function of Roll20.net. Generates passwords with the following custom criteria:
 * 8 - 128 characters
 * Character type Options: lowercase, uppercase, numbers, specific special characters, or all special characters.
 * Selections are validated upon form submission
 */
const allSpecialCharacters = ["!","\"","#","$","%","&","’","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];
function generatePassword(event){
  var a = 0,
		b = [];
  const useNumber = document.getElementById('number').checked;
  const useUpper = document.getElementById('uppercase').checked;
  const useLower = document.getElementById('lowercase').checked;
  const specialInput = document.getElementById('special-characters');
  const validSpecial = validateSpecialCharacters({target:specialInput});
  const specials = specialInput.value;
  if([validSpecial,specialInput,useNumber,useUpper,useLower,specials].every((t)=>!t)){
    //Handling for no options selected
    return;
  }
  const numbers = useNumber ?
    '0123456789' :
    '';
  const lowerAlpha = useLower ?
    'abcdefghijklmnopqrstuvwxyz'
    : '';
  const upperAlpha = useUpper ?
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ' :
    '';
  const length = +characterInput.value;
  const chars = [numbers,lowerAlpha,upperAlpha,specials].join('');
  const pw = [...Array(length).keys()].map(()=>{
    return chars[Math.floor(Math.random() * chars.length)];
  }).join('');
  writePassword(pw);
}

// Get references to the #generate element
generateBtn.addEventListener('click',generatePassword);
// Write password to the #password input
function writePassword(password) {
  var passwordText = document.getElementById("password");
  form.className = 'card';
  copyAlert.className += ' active';
  passwordText.value = password;
  setupButton.disabled=false;
  
}

/**
 * Button listener to show the options form
 */
setupButton.addEventListener('click',()=>{
  setupButton.setAttribute('disabled',true);
  form.className += ' active';
});


/**
 * Function to validate that the currently entered special characters are acceptable
 * @param {object} event - The event that triggered the function
 */
function validateSpecialCharacters(event){
  const currentChars = event.target.value.split('');
  const invalid = currentChars.filter((char)=>allSpecialCharacters.indexOf(char) === -1);
  const errorSpan = document.getElementById('special-error');
  let valid = false;
  if(invalid.length){
    errorSpan.replaceChildren(`Invalid special characters selected: ${invalid.join(' ')}`);
    errorSpan.style = '';
  }else{
    errorSpan.replaceChildren('');
    errorSpan.style.display = 'none';
    valid = true;
  }
  if(currentChars.length === allSpecialCharacters.length && !invalid.length){
    allSpecial.checked = true;
  }else{
    allSpecial.checked = false;
  }
  return valid;
}
specialInput.addEventListener('blur',validateSpecialCharacters);

/**
 * Function toggle the full special characters list or delete it
 * @param {object} event - the event that triggered the function
 */
function toggleSpecialCharacters(event){
  specialInput.value = event.target.checked ?
    allSpecialCharacters.join('') :
    '';
  validateSpecialCharacters({target:specialInput});
}
allSpecial.addEventListener('change',toggleSpecialCharacters);

characterInput.addEventListener('change',()=>{
  const length = +characterInput.value;
  if(length > 128){
    characterInput.value = 128;
  }else if(length < 8){
    characterInput.value = 8;
  }
});

/**
 * Copy the password to the clipboard when it is clicked. Code adapted from w3schools.com:
 * 
 */
pwCopy.addEventListener('click',()=>{
  if(!password.value) return;

  /* Select the text field */
  password.select();
  password.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text inside the text field */
  navigator.clipboard.writeText(password.value);

  /* Alert the copied text */
  copyAlert.replaceChildren('Password Copied');
  setTimeout((c)=>{
    c.replaceChildren('Click to copy the password');
  },5000,copyAlert);
  alert("Copied the text: " + copyText.value);
});