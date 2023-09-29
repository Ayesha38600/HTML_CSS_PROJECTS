let key = "ac5d5af2c1974e13aa489c5d482baf99";
let cardData = document.querySelector(".cardData")
let searchBtn = document.getElementById("searchBtn")
let inputData = document.getElementById("inputData")
const getData = async(input) => {
    let response =await fetch(`https://newsapi.org/v2/everything?q=${input}&apiKey=${key}`);
    let jsonData = await response.json();
    // console.log(jsonData.articles[0].title);
    console.log(jsonData.articles[0]);
    // console.log(response);

cardData.innerHTML = ""



jsonData.articles.forEach((articles) => {
    console.log(articles);


    let divs = document.createElement("div");
    divs.classList.add("card");
    cardData.appendChild(divs);
    divs.innerHTML = `
    <img src="${articles.urlToImage}" alt="">
    <h3>${articles.title}</h3>
    <p>${articles.description}</p>
    
    `
    
});


// let divs = document.createElement("div");
//     divs.classList.add("card");
//     cardData.appendChild(divs);
//     divs.innerHTML = `
//     <img src="${jsonData.articles[0].urlToImage}" alt="">
//     <h3>${jsonData.articles[0].title}</h3>
//     <p>${jsonData.articles[0].description}</p>
    
//     `


    

}
window.addEventListener("load" , function(){
    getData("Pakistan");
})
searchBtn.addEventListener("click" , function (){
    let inputText = inputData.value;
    getData(inputText);
})

// getData();
