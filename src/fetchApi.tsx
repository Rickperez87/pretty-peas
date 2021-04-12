require("dotenv").config();

const RANDOM_RECIPE_URL = "https://api.spoonacular.com/recipes/random";
const apiKey = `?apiKey=${process.env.API_KEY}`;
function fetchRandomRecipe() {
  console.log(`${RANDOM_RECIPE_URL}${apiKey}`);
  fetch(`${RANDOM_RECIPE_URL}${apiKey}&1&tags=vegetarian`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
}
export default fetchRandomRecipe;
