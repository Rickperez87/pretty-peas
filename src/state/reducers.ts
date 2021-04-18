import { combineReducers } from "redux";

interface FetchRecipesAction {
  type: ActionType.FETCH_RECIPES;
  payload?: any;
}
interface FetchRecipeAction {
  type: ActionType.FETCH_RECIPES;
  payload?: any;
}

type Action = FetchRecipesAction | FetchRecipeAction;

enum ActionType {
  FETCH_RECIPES = "FETCH_RECIPES",
  FETCH_RECIPE = "FETCH_RECIPES",
}

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
