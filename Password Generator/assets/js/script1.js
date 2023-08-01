'use strict';

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'italianlime', 'jackfruit', 'kiwi', 'lemon', 'mango', 'nectarine', 'orange', 'pineapple', 'quince', 'raspberry', 'strawberry', 'tangerine', 'uglifruit', 'voavanga', 'watermelon', 'xigua', 'yellowpassionfruit', 'zucchini', 'acerola', 'bilberry', 'cantaloupe', 'damson', 'entawak', 'feijoa', 'guava', 'huckleberry', 'imbe', 'jambul'];
const useLowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const useUppercaseLetters = useLowercaseLetters.toUpperCase();
const useNumbers = '0123456789';
const useSymbols = '!@#$%^&*()\'';

function getRandomCharacter(str) {
  return str[Math.floor(Math.random() * str.length)];
}

function getRandomFruit() {
  return fruits[Math.floor(Math.random() * fruits.length)];
}

function generatePassword(length, characters) {
  let password = '';
  for (let i = 0; i < length; i++) {
    password += getRandomCharacter(characters);
  }
  return password;
}

function generateRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, passwordType) {
  if (!(5 <= length && length <= 128)) {
    return 'Please verify you have chosen a password length between 5 and 128 characters🫣';
  }

  let characters = '';
  if (includeLowercase) characters += useLowercaseLetters;
  if (includeUppercase) characters += useUppercaseLetters;
  if (includeNumbers) characters += useNumbers;
  if (includeSymbols) characters += useSymbols;

  if (passwordType === 'fruit') {
    return generatePassword(length, characters);
  } else {
    return generatePassword(length, characters);
  }
}

function updatePasswordStrength() {
  const includeUppercase = document.getElementById("checkboxUppercase").checked;
  const includeLowercase = document.getElementById("checkboxLowercase").checked;
  const includeNumbers = document.getElementById("checkboxNumbers").checked;
  const includeSymbols = document.getElementById("checkboxSymbols").checked;
  const passwordType = document.querySelector('input[name="passwordType"]:checked').value;

  let numSets = [includeUppercase, includeLowercase, includeNumbers, includeSymbols].filter(Boolean).length;
  let strength = (passwordType === 'fruit') ? ['Weak', 'Medium', 'Strong', 'Very Strong'][Math.min(numSets, 3)] : ['Weak', 'Medium', 'Strong'][Math.min(numSets, 2)];
  document.getElementById("strength").innerText = "Password Strength: " + strength;
}

function generatePasswordAndUpdateStrength() {
  const length = document.getElementById("length").value;
  const includeUppercase = document.getElementById("checkboxUppercase").checked;
  const includeLowercase = document.getElementById("checkboxLowercase").checked;
  const includeNumbers = document.getElementById("checkboxNumbers").checked;
  const includeSymbols = document.getElementById("checkboxSymbols").checked;
  const passwordType = document.querySelector('input[name="passwordType"]:checked').value;

  if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols) {
    document.getElementById("error").innerText = 'At least 1 character set must be selected🫣';
    return;
  }

  let pass = generateRandomPassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols, passwordType);
  if (pass.startsWith('Please verify')) {
    document.getElementById("error").innerText = pass;
  } else {
    document.getElementById("password").value = pass;
    document.getElementById("error").innerText = '';
  }
  updatePasswordStrength();
}

// Event listeners
document.getElementById("generate").onclick = function (event) {
  event.preventDefault();
  generatePasswordAndUpdateStrength();
};

let radios = document.querySelectorAll('input[type=radio][name="passwordType"]');
radios.forEach(radio => radio.addEventListener('change', updatePasswordStrength));

let formElements = ['length', 'checkboxUppercase', 'checkboxLowercase', 'checkboxNumbers', 'checkboxSymbols'];
formElements.forEach(id => {
  document.getElementById(id).addEventListener("input", generatePasswordAndUpdateStrength);
});

// Reveal Password Button Function
function revealPassword() {
  const passwordField = document.getElementById("password");
  passwordField.type = passwordField.type === "password" ? "text" : "password";
}

// Bootstrap Code
const rangeLengthInput = document.getElementById("length");
const rangeInput = document.getElementById("customRange2");

rangeLengthInput.addEventListener("input", function () {
  rangeInput.value = rangeLengthInput.value;
});

rangeInput.addEventListener("input", function () {
  rangeLengthInput.value = rangeInput.value;
});
