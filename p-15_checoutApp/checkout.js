//***********************************/
//*        CHECKOUT APP
//***********************************/

const deleteProduct = document.querySelector(".delete-div .fa-trash-can")
const products  = document.querySelector(".products")

deleteProduct.addEventListener("click",(e) => {
    if (confirm("Are you sure?")){
        products.textContent = "No product"
        products.classList.add("no-product")
        e.target.parentElement.style.display = "none"
    }
})