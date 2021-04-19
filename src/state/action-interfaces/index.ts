import { ActionType } from "../action-types";

interface FetchRecipesAction {
  type: ActionType.FETCH_RECIPES;
}
interface FetchRecipesSuccessAction {
  type: ActionType.FETCH_RECIPES_SUCCESS;
  payload: any[];
}
interface FetchRecipesErrorAction {
  type: ActionType.FETCH_RECIPES_ERROR;
  payload: string;
}
interface FetchRecipeAction {
  type: ActionType.FETCH_RECIPE;
}
interface FetchRecipeSuccessAction {
  type: ActionType.FETCH_RECIPE_SUCCESS;
  payload: any[];
}
interface FetchRecipeErrorAction {
  type: ActionType.FETCH_RECIPE_ERROR;
  payload: string;
}
export type Action =
  | FetchRecipesAction
  | FetchRecipesSuccessAction
  | FetchRecipesErrorAction
  | FetchRecipeAction
  | FetchRecipeSuccessAction
  | FetchRecipeErrorAction;