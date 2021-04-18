import { combineReducers } from "redux";
import { Action } from "./action-interfaces";
import { ActionType } from "./action-types";

const fetchRecipesReducer = (state = [], action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_RECIPES:
      return action.payload;
    default:
      return state;
  }
};

const fetchRecipeReducer = (state = [], action: Action) => {
  switch (action.type) {
    case ActionType.FETCH_RECIPE:
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  recipes: fetchRecipesReducer,
  recipe: fetchRecipeReducer,
});
