let mainPage = document.querySelector(".mainPage");
let cardSection= document.querySelector(".cardSection");
let footer= document.querySelector(".footer");
let innerUX= document.querySelector(".innerUX");
let first= document.getElementById("first");
let second= document.getElementById("second");
let third= document.getElementById("third");
let secPage= document.getElementById("secPage");



function showw() {
    mainPage.style.display = "none"
    secPage.style.display = "none"

    innerUX.style.display = "block"
    footer.style.display = "none"
    
}
function back() {
    mainPage.style.display = "block"
    secPage.style.display = "block"
    innerUX.style.display = "none"
    footer.style.display = "flex"
    
}
function design() {
    mainPage.style.display = "block"
    innerUX.style.display = "none"
    footer.style.display = "flex"
    second.style.display = "flex"
    first.style.display = "none"
    third.style.display = "none"
    
}
function tech() {
    mainPage.style.display = "block"
    innerUX.style.display = "none"
    footer.style.display = "flex"
    second.style.display = "none"
    first.style.display = "none"
    third.style.display = "flex"
    
}
function mobile() {
    mainPage.style.display = "block"
    innerUX.style.display = "none"
    footer.style.display = "flex"
    second.style.display = "flex"
    first.style.display = "none"
    third.style.display = "none"
    
}
function alll() {
    mainPage.style.display = "block"
    innerUX.style.display = "none"
    footer.style.display = "flex"
    second.style.display = "flex"
    first.style.display = "flex"
    third.style.display = "flex"
    
}