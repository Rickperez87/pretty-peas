import axios from "axios";
import { Dispatch } from "redux";
import { Action } from "../state/action-interfaces";
import { ActionType } from "../state/action-types";

export const fetchRecipes = (searchTerm: string) => async (
  dispatch: Dispatch<Action>
) => {
  dispatch({ type: ActionType.FETCH_RECIPES });

  try {
    const RANDOM_RECIPE_URL =
      "https://api.spoonacular.com/recipes/complexSearch";
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

    dispatch({
      type: ActionType.FETCH_RECIPES_SUCCESS,
      payload: res.data.results,
    });
  } catch (err) {
    dispatch({ type: ActionType.FETCH_RECIPES_ERROR, payload: err.message });
  }
};

export const fetchRecipe = (id: number) => async (
  dispatch: Dispatch<Action>,
  getState: () => any
) => {
  dispatch({ type: ActionType.FETCH_RECIPE, payload: [] });

  try {
    const GET_RECIPE_INGREDIENTS_URL = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json`;
    const res = await axios.get(GET_RECIPE_INGREDIENTS_URL, {
      params: {
        apiKey: process.env.API_KEY,
      },
    });

    //filter recipe by id
    getState().recipes.recipes;
    const [recipe] = getState().recipes.recipes.filter(
      (recipe: any) => recipe.id === id
    );
    // Add ingredients to recipe object
    recipe.ingredients = res.data.ingredients;
    //Add serving size to recipe object

    // Chnage data to not be ingredients as current but to include entire recipe object.
    recipe.testing = res;
    recipe.srvngs = res.data.ingredients.map(
      (i) => parseInt(i.amount.us.value, 10) / parseInt(res.data.servings, 10)
    );

    dispatch({ type: ActionType.FETCH_RECIPE_SUCCESS, payload: recipe });
  } catch (err) {
    dispatch({ type: ActionType.FETCH_RECIPE_ERROR, payload: err.message });
  }
};
