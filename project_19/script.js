let main = document.querySelector(".main");
let trending = document.querySelector(".trending");
let review = document.querySelector(".review");
let blogs = document.querySelector(".blogs");
let contact = document.querySelector(".contact");
let inner = document.querySelector(".inner");
let form = document.querySelector(".form");



function showw(){
    inner.style.display = "flex"
    main.style.display = "none"
    trending.style.display = "none"
    review.style.display = "none"
    blogs.style.display = "none"
    contact.style.display = "none"
    form.style.display = "none"
    
}


function buy(){
    form.style.display = "block"
}
function icon(){
    form.style.display = "none"
}
function goBackToHome() {
    window.location.href = 'index.html';
}


