import axios from "axios";

export const fetchRecipes = (searchTerm: string) => async (dispatch) => {
  const RANDOM_RECIPE_URL = "https://api.spoonacular.com/recipes/complexSearch";
  const res = await axios.get(RANDOM_RECIPE_URL, {
    params: {
      query: searchTerm,
      number: 10,
      apiKey: process.env.API_KEY,
      addRecipeInformation: true,
      includeIngredients: true,
      fillIngredients: true,
    },
  });

  dispatch({ type: "FETCH_RECIPES", payload: res.data.results });
};

export const fetchRecipe = (id: number) => async (dispatch, getState) => {
  const GET_RECIPE_INGREDIENTS_URL = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json`;
  const res = await axios.get(GET_RECIPE_INGREDIENTS_URL, {
    params: {
      apiKey: process.env.API_KEY,
    },
  });

  //filter recipe by id
  const [recipe] = getState().recipes.filter((recipe) => recipe.id === id);
  // Add ingredients to recipe object
  recipe.ingredients = res.data.ingredients;

  dispatch({ type: "FETCH_RECIPE", payload: recipe });
};
