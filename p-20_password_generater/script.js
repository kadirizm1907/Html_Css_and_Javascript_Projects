


// function generateRandomPassword(length=10) {
//     const upperCase = "ABCDEFGHIJKLMNOPRSTUVYZ";
//     const lowerCase = "abcdefghijklmnoprstuvyz";
//     const numbers = "0123456789";
//     const symbols = "!@#$%^&*()\_+~|}{[]:;?><,./-=";
//     const requiredLowerCases = lowerCase[Math.floor(Math.random()*lowerCase.length)];
//     const requiredUpperCases = upperCase[Math.floor(Math.random()*upperCase.length)];
//     const requiredNumbers = numbers[Math.floor(Math.random()*numbers.length)];
//     const requiredSymbols = symbols[Math.floor(Math.random()*symbols.length)];
//     console.log(requiredLowerCases)
//     console.log(requiredUpperCases)
//     console.log(requiredNumbers)
//     console.log(requiredSymbols)

// }
// generateRandomPassword()


// let password = randomLowercase + randomUppercase;
//       for (let i = 0; i < 3; i++) {
//         const randomIndex = Math.floor(Math.random() * numbers.length);
//         password += numbers.charAt(randomIndex);
//       }


// function generatePassword() {
//   const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const numbers = '0123456789';
//   const symbols = '!@#$%^&*()_+~|}{[]:;?><,./-=';
//   // at least 1 lowercase letter
//   const randomLowercase = characters.charAt(Math.floor(Math.random() * 26));
//   // at least 1 uppercase letter
//   const randomUppercase = characters.charAt(Math.floor(Math.random() * 26));
//   // at least 3 numbers
//   let password = randomLowercase + randomUppercase;
//   for (let i = 0; i < 3; i++) {
//     const randomIndex = Math.floor(Math.random() * numbers.length);
//     password += numbers.charAt(randomIndex);
//   }
//   // at least 2 symbols
//   for (let i = 0; i < 2; i++) {
//     const randomIndex = Math.floor(Math.random() * symbols.length);
//     password += symbols.charAt(randomIndex);
//   }
//   // Fill the rest of the password with random characters
//   const remainingLength = 10 - password.length;
//   for (let i = 0; i < remainingLength; i++) {
//     const randomIndex = Math.floor(Math.random() * characters.length);
//     password += characters.charAt(randomIndex);
//   }
//   // randomize the order
//   password = password.split('').sort(() => Math.random() - 0.9).join('');
//   // generated password
//   document.getElementById('password-display').innerText = 'Generated Password: ' + password;

//   console.log(password)
// }



function generateRandomPassword(lenght = 10) {
  const upperCases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCases = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~|}{[]:;?><,./-=";
  //? en az 1 küçük harf, 1 büyük harf, 3 rakam, ve 2 tane sembol
  const requiredLowerCase =
    lowerCases[Math.floor(Math.random() * lowerCases.length)];
  console.log(requiredLowerCase);
  const requiredUpperCase =
    upperCases[Math.floor(Math.random() * upperCases.length)];
  console.log(requiredUpperCase);
  const randomNumber1 = numbers.charAt(
    Math.floor(Math.random() * numbers.length)
  );
  const randomSymbol1 = symbols.charAt(
    Math.floor(Math.random() * symbols.length)
  );
  const randomNumber2 = numbers.charAt(
    Math.floor(Math.random() * numbers.length)
  );
  const randomSymbol2 = symbols.charAt(
    Math.floor(Math.random() * symbols.length)
  );
  const randomSymbol3 = symbols.charAt(
    Math.floor(Math.random() * symbols.length)
  );
  const gerekliKarakterler =
    requiredLowerCase +
    requiredUpperCase +
    randomNumber1 +
    randomNumber2 +
    randomSymbol1 +
    randomSymbol2 +
    randomSymbol3;
  console.log(gerekliKarakterler);
  // Geri kalan karakterleri rastgele seçelim
  const remainingCharacters = upperCases + lowerCases + numbers + symbols;
  let password = "";
  for (let i = 0; i < 3; i++) {
    const randomIndex = Math.floor(Math.random() * remainingCharacters.length);
    password += remainingCharacters.charAt(randomIndex);
  }
  password = password + gerekliKarakterler;
  console.log(password);
  password = password
    .split("")
    .sort(function () {
      return 0.5 - Math.random();
    })
    .join("");
  console.log(password);
  return password;
  
}
generateRandomPassword();
const button = document.getElementById("password");
const p = document.querySelector("input");
button.addEventListener("click", () => {
  const paralo = generateRandomPassword();
  p.value = paralo;
  
});


function copy(){
  const copyText = document.getElementById("passText")
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
  p.removeEventListener("click", ()=> {
    generateRandomPassword()

    })
   copy()
}
const date = new Date();
date.setDate(date.getDate() + 0);
document.getElementById("date").innerHTML = date;