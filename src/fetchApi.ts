require("dotenv").config();
import renderRecipeData from "./renderRecipeData";

const RANDOM_RECIPE_URL = "https://api.spoonacular.com/recipes/random";
const apiKey = `?apiKey=${process.env.API_KEY}`;
async function fetchRandomRecipe() {
  try {
    const res = await fetch(`${RANDOM_RECIPE_URL}${apiKey}&1&tags=vegetarian`);
    const data = await res.json();
    const html = renderRecipeData(data);
    return html;
  } catch (err) {
    console.log(err);
  }
}
export default fetchRandomRecipe;
