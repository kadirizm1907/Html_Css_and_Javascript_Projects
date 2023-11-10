

const color = ["red", "blue", "green", "yellow", "black", "pink", "purple", "brown"];

const randomNum = Math.floor(Math.random() * color.length);

document.querySelector("#women").style.color = color[randomNum];


document.querySelector("#clr1").addEventListener('click', () =>{
    const color = ["red", "blue", "green", "yellow", "black", "pink", "purple", "brown"];

const randomNum = Math.floor(Math.random() * color.length);

document.querySelector("#women").style.backgroundColor = color[randomNum];
document.querySelector("#clr1").textContent = color[randomNum];
})