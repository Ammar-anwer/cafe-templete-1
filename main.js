// select eat P
let eat = document.getElementById("eat");
// select drink P
let drink = document.getElementById("drink");
// Select eat div
let eatDiv = document.querySelector(".eat");
// Select drink div
let drinkDiv = document.querySelector(".drinks");
// Event on drink
drink.onclick = function () {
  eatDiv.style.display = "none";
  drinkDiv.style.display = "block";
};
// Event on eat
eat.onclick = function () {
  eatDiv.style.display = "block";
  drinkDiv.style.display = "none";
};
