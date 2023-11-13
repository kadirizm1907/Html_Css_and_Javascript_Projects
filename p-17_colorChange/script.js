
 
// let red1 = "filter: invert(16%) sepia(59%) saturate(7300%) hue-rotate(358deg) brightness(100%) contrast(124%);";
// let yellow1 = "filter: invert(100%) sepia(100%) saturate(7500%) hue-rotate(354deg) brightness(108%) contrast(104%);";
// let turkuaz1 = "filter: invert(100%) sepia(96%) saturate(6977%) hue-rotate(101deg) brightness(80%) contrast(105%);" ;
// let blue1 = "filter: invert(7%) sepia(100%) saturate(7474%) hue-rotate(245deg) brightness(103%) contrast(144%);";
// let green1 = "filter: invert(67%) sepia(42%) saturate(5553%) hue-rotate(80deg) brightness(110%) contrast(134%);";
// let grey1 = "filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(199deg) brightness(104%) contrast(102%);";
// let pink1 = "filter: invert(21%) sepia(72%) saturate(3636%) hue-rotate(293deg) brightness(113%) contrast(137%);";
// let purple1 = "filter: invert(20%) sepia(96%) saturate(1310%) hue-rotate(236deg) brightness(91%) contrast(98%);";
//  let orange1 = "invert(71%) sepia(42%) saturate(5650%) hue-rotate(1deg) brightness(104%) contrast(102%);";
const obj1 = document.querySelectorAll("#mn");
// let bg = [red1, yellow1, turkuaz1, blue1 ];
 const bg = Math.floor(Math.random() * obj1.length);
 document.querySelector("#mn").style.backgroundColor = bg;
 document.querySelector('#clrm').addEventListener('click', ()=>{
    const obj1 = document.querySelectorAll(".#mn");
    const bg = Math.floor(Math.random() * obj1.length);
    document.querySelector("#mn").style.backgroundColor = bg;
})


console.log(orange1)

// const color = ["red", "blue", "green", "yellow", "black", "pink", "purple", "brown"];
// const randomNum = Math.floor(Math.random() * color.length);
// document.querySelector("#woman1").style.Color = color[randomNum];

// document.querySelector('#clrw').addEventListener('click', ()=>{
//     const color = ["red", "blue", "green", "yellow", "black", "pink", "purple", "brown"];
//     const randomNum = Math.floor(Math.random() * color.length);
//     document.querySelector("#woman1").style.backgroundColor = color[randomNum];  
//     document.querySelector("#woman1").innerHTML = color[randomNum];
// })





function randomNumber() {

    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);


    document.querySelector('main').style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")"; 
}
function randomNumber1() {

    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);


    document.querySelector('#mn').style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")"; 
}
function randomNumber2() {

    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);


    document.querySelector('#wmn').style.backgroundColor = "rgb(" + r + ", " + g + ", " + b + ")"; 
}
console.log(randomNumber)





//  const background = document.getElementById('background');
//  function changeColor(){
//     return Math.floor(math.random() * 255);
//  }
//  clrw.addEventListener('click', () => {
//     background.style.backgroundColor = 'rgba('+changeColor()+', '+changeColor()+', '+changeColor()+', '+changeColor()+')';
//  })
// function randomNumber(){
//     let r = Math.round(Math.random() * 255);
//     let g = Math.round(Math.random() * 255);
//     let b = Math.round(Math.random() * 255);
//     document.querySelector('woman').style.Color = "rgb(" + r + ", " + g + ", " + b + ")";
// }

const divElem = document.getElementById("divID");
function randomcolor() {
    let bgColor = Math.floor(Math.random() * 255);
    document.getElementById('woman').style.Color = bgColor.value;

}
divElem.addEventListener('click', () => {
    divElem.style.Color =
        "rgba('+randomcolor()+','+randomcolor()+','+randomcolor()+', '+randomcolor()+')"
}) 

// const colors = [];
// function colorWoman() {
//     for (let i = 0; i < 10; i++) {
//         const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//         colors.push(randomColor);
//         document.getElementById("woman").style.Color = randomColor.value;
//         const bgclr =  document.getElementById("clrw");
//         document.getElementById("clrw").addEventListener('click', () => {
//         document.getElementById("woman").style.Color = randomColor;
//     })
//     }
   
// }
// const main = document.querySelector("#woman")
// // main.computedStyleMap.backgroundColor = "brown"
// // Event tanımlayacağınız buton elementlerini yakalayıp ilgili butona ilgili eventı tanımlayınız.
// const btnClick =document.querySelector ("clrw")
// const btnOver = document.querySelector ("clrm")
// function getRandomColor() {
//     const letters = '0123456789ABCDEF';
//     let color = '#';
//     for (let i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
    
// }console.log(getRandomColor)
// // Arka plan rengini değiştiren fonksiyon
// function changeBackgroundColor() {
//     const color = getRandomColor();
//     document.getElementById("woman").style.Color = color;
//     // document.getElementById("colorText").textContent = color;
//     return color;
//     console.log(changeBackgroundColor)
// }
// // Düğmeye tıklanıldığında veya üzerine gelindiğinde arka plan rengini değiştir
// const changeColorButton = document.querySelector('#clrw');
// changeColorButton.addEventListener('click', changeBackgroundColor);
// const mouseOverButton = document.querySelector('#clrm');
// mouseOverButton.addEventListener('mouseover', changeBackgroundColor);

