

// fetch("https://api.github.com/users")
// .then((res) => {
//   // console.log(res)
//   if (!res.ok) {
//     //? Feetch api'da hatayi bizim yakalamiz gerekiyor.
//     throw new Error(`Hata: ${res.status}`) //? bir hata firlatiyoruz
//   }
//   return res.json()
// })
// .then((data) => {
//   // veri = data
//   // console.log(veri)
//   show(data)
// })
// // .catch((err) => document.write(err))


// const btn = document.getElementById('btn')
// const userSection = document.getElementById("users")
//     function randomUser() {
//     userSection.innerHTML = Math.floor(Math.random()* show.length)
     
//     }
//     btn.addEventListener("click", () => {
//       userSection.innerHTML = Math.floor(Math.random()* show.length)

//     })
// console.log(users)
// const show = (users) => {
//  const userSection = document.getElementById("users")  
//  userSection.innerHTML = Math.floor(Math.random()* show.length)
//     users.forEach((user) => {
//       userSection.innerHTML += `
//           <h1 class="usr" >${user.login}</h1>
//           <img class="usr" src="${user.avatar_url}" width="200px" alt="" />
//           <p class="usr"><a  href="${user.html_url}" target="_blank">URL</a></p> 
//       `
//     })
//   }
 




async function getRandomUser(){
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const user = data.results[0];
  displayUser(user)
  console.log(user)
}

function displayUser(user){
const name = document.getElementById("name");
const gender = document.getElementById("gender");
const email = document.getElementById("e-mail");
const phone = document.getElementById("ephone");
const age = document.getElementById("age");
const image = document.getElementById("image");

name.innerText = `${user.name.title} ${user.name.first} ${user.name.last}`
gender.innerText = `${user.gender}`
email.innerText = `${user.email}`
phone.innerText = `${user.phone}`
age.innerText = `${user.dob.age}`
image.setAttribute('src', `${user.picture.large}`);
}


getRandomUser()