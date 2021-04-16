import { combineReducers } from "redux";

const fetchRecipesReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_RECIPES":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  recipes: fetchRecipesReducer,
});
