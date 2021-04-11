const RANDOM_RECIPE_URL = "https://api.spoonacular.com/recipes/random";

function fetchRandomRecipe() {
  fetch(RANDOM_RECIPE_URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}
