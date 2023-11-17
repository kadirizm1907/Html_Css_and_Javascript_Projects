async function countryMap(){
    const res = await fetch("https://restcountries.com/v3.1/all");
    const data = await res.json();
    const country =data;
    displayCounry(country);
    console.log(country)
}
function displayCounry(country){
const name = document.getElementById("name");    
const region = document.getElementsByClassName('fa-solid fa-earth-oceania');    
const capitals = document.getElementsByClassName('fas fa-lg fa-landmark');    
const languages = document.getElementsByClassName('fas fa-lg fa-comments');    
const currencies = document.getElementsByClassName('fas fa-lg fa-money-bill-wave');    
const population = document.getElementsByClassName('fa-solid fa-people-group');    
const border = document.getElementsByClassName('fa-sharp fa-solid fa-road-barrier');    
const map = document.getElementsByClassName('fa-solid fa-map-location-dot'); 
const image = document.getElementsByClassName('card-img-top shadow'); 

// name.innerText = `${country.name.name}`;

}
displayCounry()
countryMap()