let main = document.getElementById("main")
let aboutt = document.getElementById("abu")
let servicee = document.getElementById("salman")
let teamm = document.getElementById("toy")
let pricee = document.getElementById("prince")
let blogg = document.getElementById("bank")
let contact = document.getElementById("connect")


function about(params) {
    main.style.display = "none"
    aboutt.style.display = "block"
    servicee.style.display = "none"
    pricee.style.display = "none"
    blogg.style.display = "none"
    contact.style.display = "none"
    teamm.style.display = "none"

    
}
function service() {
    main.style.display = "none"
    aboutt.style.display = "none"
    servicee.style.display = "block"
    pricee.style.display = "none"
    blogg.style.display = "none"
    contact.style.display = "none"
    teamm.style.display = "none"

    servicee.style.top = '20%';

    
}
function team() {
    main.style.display = "none"
    aboutt.style.display = "none"
    servicee.style.display = "none"
    pricee.style.display = "none"
    blogg.style.display = "none"
    contact.style.display = "none"
    teamm.style.display = "block"

    // teamm.style.top = '20%';

    
}
function price() {
    main.style.display = "none"
    aboutt.style.display = "none"
    servicee.style.display = "none"
    pricee.style.display = "block"
    blogg.style.display = "none"
    contact.style.display = "none"
    teamm.style.display = "none"

    // teamm.style.top = '20%';

    
}
function blog(){
    main.style.display = "none"
    aboutt.style.display = "none"
    servicee.style.display = "none"
    pricee.style.display = "none"
    blogg.style.display = "block"
    contact.style.display = "none"
    teamm.style.display = "none"

    // teamm.style.top = '20%';

    
}
function home(){
    main.style.display = "block"
    aboutt.style.display = "block"
    servicee.style.display = "block"
    pricee.style.display = "block"
    blogg.style.display = "block"
    contact.style.display = "block"
    teamm.style.display = "block"

    // teamm.style.top = '20%';

    
}

var navbar = document.getElementById('aysh');
navbar.style.position = 'fixed';
navbar.style.top = '0';
navbar.style.left = '0';
navbar.style.width = '100%';