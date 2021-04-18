import { combineReducers } from "redux";

const fetchRecipesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return action.payload;
    default:
      return state;
  }
};

const fetchRecipeReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_RECIPE":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  recipes: fetchRecipesReducer,
  recipe: fetchRecipeReducer,
});
