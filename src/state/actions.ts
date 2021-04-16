import axios from "axios";

export const fetchRecipes = (searchTerm: string) => async (dispatch) => {
  const RANDOM_RECIPE_URL = "https://api.spoonacular.com/recipes/complexSearch";
  const res = await axios.get(RANDOM_RECIPE_URL, {
    params: { query: searchTerm, number: 10, apiKey: process.env.API_KEY },
  });

  dispatch({ type: "FETCH_RECIPES", payload: res.data.results });

  return { type: "FETCH_RECIPES", payload: searchTerm };
};
