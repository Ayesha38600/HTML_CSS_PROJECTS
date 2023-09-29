let icon  = document.querySelector(".icon");
let ul = document.querySelector("ul");
//show hide , again and again ye toggle krega
icon.addEventListener("click" ,function myfn(params) {
    ul.classList.toggle("showData")
    console.log(ul);
    

    if (ul.className == "showData") {
        document.getElementById("bar").className ="fa-sharp fa-solid fa-xmark";
    }
    else{
        document.getElementById("bar").className ="fa-solid fa-bars";
    }
})
