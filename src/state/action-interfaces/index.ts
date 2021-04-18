import { ActionType } from "../action-types";

interface FetchRecipesAction {
  type: ActionType.FETCH_RECIPES;
  payload?: any;
}
interface FetchRecipeAction {
  type: ActionType.FETCH_RECIPES;
  payload?: any;
}
export type Action = FetchRecipesAction | FetchRecipeAction;
