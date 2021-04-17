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

export const fetchIngredients = (id: string) => async (dispatch) => {
  const GET_RECIPE_INGREDIENTS_URL = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json`;
  const res = await axios.get(GET_RECIPE_INGREDIENTS_URL, {
    params: {
      apiKey: process.env.API_KEY,
    },
  });

  dispatch({ type: "FETCH_INGREDIENTS", payload: res.data.results });
};
