

// const color = ["red", "blue", "green", "yellow", "black", "pink", "purple", "brown"];
const bgColor = document.getElementById('women');
// const randomNum = Math.floor(Math.random() * color.length);

// document.querySelector("#women").style.color = color[randomNum];
function randomColor(){
    return Math.floor(Math.random()* 255);
};
bgColor.addEventListener('click', () => {
    bgColor.style.backgroundColor = 'rgba('+randomColor()+', '+randomColor()+', '+randomColor()+', '+randomColor()+', '+randomColor()+', '+randomColor()+', '+randomColor()+')'
});
// document.getElementsByClassName("btn btnBg") = bgColor[randomNum];



// document.querySelector("#clr1").addEventListener('click', () =>{
// const color = ["red", "blue", "green", "yellow", "black", "pink", "purple", "brown"];

// const randomNum = Math.floor(Math.random() * color.length);


// document.getElementById("#women").style.backgroundColor = color[randomNum];

// })