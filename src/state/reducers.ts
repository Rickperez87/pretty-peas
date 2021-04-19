import { combineReducers } from "redux";
import { Action } from "./action-interfaces";
import { ActionType } from "./action-types";

export interface FetchRecipesState {
  loading: boolean;
  recipes: any[] | any;
  error: string | null;
}
export interface FetchRecipeState {
  loading: boolean;
  recipe: any[] | any;
  error: string | null;
}

const fetchRecipesInitialState = { loading: false, recipes: [], error: null };
const fetchRecipeInitialState = { loading: false, recipe: [], error: null };

const fetchRecipesReducer = (
  state: FetchRecipesState = fetchRecipesInitialState,
  action: Action
): FetchRecipesState => {
  switch (action.type) {
    case ActionType.FETCH_RECIPES:
      return { loading: true, error: null, recipes: [] };
    case ActionType.FETCH_RECIPES_SUCCESS:
      return { loading: false, error: null, recipes: action.payload };
    case ActionType.FETCH_RECIPES_ERROR:
      return { loading: false, error: action.payload, recipes: [] };
    default:
      return state;
  }
};

const fetchRecipeReducer = (
  state: FetchRecipeState = fetchRecipeInitialState,
  action: Action
): FetchRecipeState => {
  switch (action.type) {
    case ActionType.FETCH_RECIPE:
      return { loading: true, error: null, recipe: [] };
    case ActionType.FETCH_RECIPE_SUCCESS:
      return { loading: false, error: null, recipe: action.payload };
    case ActionType.FETCH_RECIPE_ERROR:
      return { loading: false, error: action.payload, recipe: [] };
    default:
      return state;
  }
};
const reducers = combineReducers({
  recipes: fetchRecipesReducer,
  recipe: fetchRecipeReducer,
});

export default reducers;

export type RootState = ReturnType<typeof reducers>;
