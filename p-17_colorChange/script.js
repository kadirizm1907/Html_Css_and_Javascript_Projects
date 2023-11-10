

const color = ["red","blue","green","yellow","black","pink","purple","brown"];
const randomNum = Math.floor(Math.random() * color.length);


// function randomColor(){
// document.querySelector('main').style.backgroundColor = color[randomNum];
// };
document.querySelector('#btnBg').addEventListener('click', () => {
    const randomNum = Math.floor(Math.random() * color.length);
    const color = ["red","blue","green","yellow","black","pink","purple","brown"];
    document.querySelector('#main').style.backgroundColor = color[randomNum];
    

})
