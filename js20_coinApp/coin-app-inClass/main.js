//? Projenin style dosyasini ana js (main.js) kodumuza import ettik.
import "./scss/style.scss"
import { apiRequest } from "./src/apiRequest.js"

//? Selector
const form = document.querySelector("header form")

//? Form için submit event'nin tanimlanmasi
form.addEventListener("submit", (e) => {
  console.log(e.target)
  e.preventDefault() //? tüm submit davranıslarini engelle
  getCoinData() //? API'ye istek at.
  e.target.reset() //? formu silme davranısi calisitir
})

const getCoinData = () => {
  const input = document.querySelector("header form input").value
  if (!input.trim()) {
    alert("Input can not be blank ")
  } else {
    apiRequest(input)
  }
}
