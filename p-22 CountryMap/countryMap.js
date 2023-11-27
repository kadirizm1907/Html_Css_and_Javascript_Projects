 const countryMap = async(input)=>{
   try {
    const res = await fetch("https://restcountries.com/v3.1/all");
    const json = await res.json();
    if(json.data.coins.length === 0){
        setMessage("country can not be found")
    }else{

    }
    
   } catch (error) {
    console.log(error)
   } 
    
    displayCounry(country);
    console.log(country)
}
const setMessage = (msg, type = "warning") => {
    Swal.fire({
      position: "top",
      icon: type,
      title: msg,
      showConfirmButton: true,
      timer: 1500,
    })
  }
  
// function displayCounry(country){
// const name = document.getElementById("name");    
// const region = document.getElementsByClassName('fa-solid fa-earth-oceania');    
// const capitals = document.getElementsByClassName('fas fa-lg fa-landmark');    
// const languages = document.getElementsByClassName('fas fa-lg fa-comments');    
// const currencies = document.getElementsByClassName('fas fa-lg fa-money-bill-wave');    
// const population = document.getElementsByClassName('fa-solid fa-people-group');    
// const border = document.getElementsByClassName('fa-sharp fa-solid fa-road-barrier');    
// const map = document.getElementsByClassName('fa-solid fa-map-location-dot'); 
// const image = document.getElementsByClassName('card-img-top shadow'); 

// // name.innerText = `${country.name.name}`;

// }
displayCounry()
countryMap()