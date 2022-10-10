let passwordLenght = document.getElementById("passwordLenght");
let password = document.getElementById("password");

function generatePasword(len) {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAplhabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbol = "!@#$%^&*(){}[]';:/?<>,.~";

  const data = lowerAlphabet + upperAplhabet + numeric + symbol;
  let generator = "";
  for (let index = 0; index < len; index++) {
    generator += data[~~(Math.random() * data.length)];
  }
  return generator;
}

function getPassword() {
  const newPassword = generatePasword(passwordLenght.value);
  password.value = newPassword;
}

//function savePassword() {//}
