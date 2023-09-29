

let card = document.getElementById("red")
let mainPage = document.getElementById("me")
let blog = document.getElementById("bill")
let track = document.getElementById("truck")
let ki = document.getElementById("ki")




function foods(){
    card.style.display= "block"
    ki.style.display= "none"
   
    mainPage.style.display= "none"
    blog.style.display= "none"
    track.style.display= "none"
    document.getElementById("red").style.marginBottom = "-300px";

    document.getElementById("homes").style.color ="white"
    document.getElementById("fri").style.color ="red"
    document.getElementById("deep").style.color ="white"
    document.getElementById("nows").style.color ="white"
    
}
function home() {
    card.style.display= "block"
   
    mainPage.style.display= "flex"
    blog.style.display= "block"
    track.style.display= "block"
    ki.style.display= "none"
    

    document.getElementById("homes").style.color ="red"
    document.getElementById("fri").style.color ="white"
    document.getElementById("deep").style.color ="white"
    document.getElementById("nows").style.color ="white"
}
function dish() {
    card.style.display= "none"
   
    mainPage.style.display= "none"
    blog.style.display= "block"
    track.style.display= "none"
    ki.style.display= "none"
    dish.style.marginTop = '10px'; 
    document.getElementById("bill").style.marginTop = "300px";

    document.getElementById("homes").style.color ="white"
    document.getElementById("fri").style.color ="white"
    document.getElementById("deep").style.color ="red"
    document.getElementById("nows").style.color ="white"
    
}
function now(){
    card.style.display= "none"
   
    mainPage.style.display= "none"
    blog.style.display= "none"
    track.style.display= "block"
    ki.style.display= "none"
   
    document.getElementById("homes").style.color ="white"
    document.getElementById("fri").style.color ="white"
    document.getElementById("deep").style.color ="white"
    document.getElementById("nows").style.color ="red" 

    
}

function blury() {
    card.style.display= "none"
   
    mainPage.style.display= "none"
    blog.style.display= "none"
    track.style.display= "none"
    ki.style.display= "flex"
    
}
