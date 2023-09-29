let card1 = document.getElementById("card1");
let card2 = document.getElementById("card2");
let crd = document.querySelectorAll(".crd")
let cardDetails = document.querySelector(".cardDetails")

function men(){
    card1.style.display = "flex"
    card2.style.display = "none"
}
function women(){
    card1.style.display = "none"
    card2.style.display = "flex"
}
function home(){
    card1.style.display = "flex"
    card2.style.display = "flex"
}

crd.forEach((crd) =>{
    crd.addEventListener("click" , function (){
cardDetails.innerHTML = `
<img src="${crd.firstElementChild.src}" alt ="no" >


`
    })
})