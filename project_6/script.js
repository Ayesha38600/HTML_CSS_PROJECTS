let program = document.getElementById("blue") 
let mainPage = document.getElementById("green")
let plan = document.getElementById("yellow")
let blog = document.getElementById("orange")
let contact = document.getElementById("flower")
let form = document.getElementById("sky")
function programs(){
program.style.display = "block"
mainPage.style.display = "none"
plan.style.display = "none"
blog.style.display = "none"
contact.style.display = "none"
form.style.display = "none"

document.getElementById("home").style.color="white"
document.getElementById("program").style.color="rgb(4, 254, 4)"
document.getElementById("plan").style.color="white"
document.getElementById("blog").style.color="white"
document.getElementById("contact").style.color="white"
    
}
var navbar = document.getElementById('aysh');
navbar.style.position = 'fixed';
navbar.style.top = '0';
navbar.style.left = '0';
navbar.style.width = '100%';

function plans(params) {
    program.style.display = "none"
mainPage.style.display = "none"
plan.style.display = "block"
blog.style.display = "none"
contact.style.display = "none"
form.style.display = "none"


document.getElementById("home").style.color="white"
document.getElementById("program").style.color="white"
document.getElementById("plan").style.color="rgb(4, 254, 4)"
document.getElementById("blog").style.color="white"
document.getElementById("contact").style.color="white"
    
}

function blogs(params) {

        program.style.display = "none"
mainPage.style.display = "none"
plan.style.display = "none"
blog.style.display = "block"
contact.style.display = "none"
form.style.display = "none"


document.getElementById("home").style.color="white"
document.getElementById("program").style.color="white"
document.getElementById("plan").style.color="white"
document.getElementById("blog").style.color="rgb(4, 254, 4)"
document.getElementById("contact").style.color="white"
}

function contacts(params) {

    program.style.display = "none"
mainPage.style.display = "none"
plan.style.display = "none"
blog.style.display = "none"
contact.style.display = "block"
form.style.display = "block"


document.getElementById("home").style.color="white"
document.getElementById("program").style.color="white"
document.getElementById("plan").style.color="white"
document.getElementById("blog").style.color="white"
document.getElementById("contact").style.color="rgb(4, 254, 4)"
}

function homes(params) {

    program.style.display = "block"
mainPage.style.display = "flex"
plan.style.display = "block"
blog.style.display = "block"
contact.style.display = "none"
form.style.display = "none"


document.getElementById("home").style.color="rgb(4, 254, 4)"
document.getElementById("program").style.color="white"
document.getElementById("plan").style.color="white"
document.getElementById("blog").style.color="white"
document.getElementById("contact").style.color="white"
}
// .....//submit 
function submit(params) {
    let name = document.getElementById("name")
    let number = document.getElementById("number")

    if (name.value == "")
    {
        alert("Please Enter Name")

    }
    else if(number.value == "")
{
    alert("Please Enter Number")
}else 
{
    alert("Thanks For Join us !")
}
    
}


// ..........login ................... 
let login = document.getElementById("login")
login.addEventListener("click" ,function (params) {
   let loginPage= document.querySelector(".loginPage").style.display = "block"


    
})
