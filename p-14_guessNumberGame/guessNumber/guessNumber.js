console.log("welcome to guess game");

let sayi = Math.round(Math.random() * 100);
console.log(sayi);

let sonucEl = document.getElementById("sonuc");
let listeEl = document.getElementById("liste");
let tahminInput = document.getElementById("tahminInput");
let tahminButton = document.getElementById("tahminButton");

let count = 0;

tahminButton.addEventListener("click", function () {
  let num1 = parseInt(tahminInput.value);
  let li = document.createElement("li");

  if (num1 === sayi) {
    li.textContent = "Girdiğiniz sayı: " + num1 + " Doğru bildiniz!!!";
    listeEl.appendChild(li);
    tahminInput.disabled = true;
    tahminButton.disabled = true;
  } else {
    if (num1 < sayi) {
      li.textContent = "---Girdiğiniz sayı: " + num1 + " Arttırınız!!!" + " " + (4 - count) + " hakkınız kaldı!!!" ;
    } else {
      li.textContent = "---Girdiğiniz sayı: " + num1 + " Azaltınız!!!" + " " +  (4 - count) + " hakkınız kaldı!!!";
    }
    listeEl.appendChild(li);
    count++;
    if (count === 5) {
      sonucEl.textContent = "5 tahmin hakkınız bitti. Doğru cevap: " + sayi;
      tahminInput.disabled = true;
      tahminButton.disabled = true;
    }
  }
});