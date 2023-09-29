let searchInput = document.getElementById("searchInput");
let searchBtn =document.getElementById("searchBtn");
let foodContainer =document.querySelector(".food-container")


let heading = document.getElementById("heading")
// ................................................. 

let renderFood = async(searchData) =>{


    heading.innerHTML = "Fetching Your Request .........!"
    let data = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchData.value}`);
    let jsonData = await data.json();
    console.log(jsonData);
    console.log(jsonData.meals[0].strMealThumb);
    heading.innerHTML = "Let's Start Best Dishes!....."

foodContainer.innerHTML = ""



jsonData.meals.forEach(meal => {
    let divs = document.createElement("div");
    divs.classList.add("food-card")
    foodContainer.appendChild(divs) ; 
    divs.innerHTML =`<img src ="${meal.strMealThumb}" />
    <h3>${meal.strMeal}</h3>
    <p>${meal.strArea} <span>Dish</span></p>
    <p>${meal.strTags}</p>




    
 
    `
    let button = document.createElement("button")
    button.setAttribute("id" , "view" );
    button.innerText ="view More";
    divs.appendChild(button)
});  
  
}

// ................................................. 
searchBtn.addEventListener("click" ,function (params) {
  
    renderFood(searchInput);
    
})




