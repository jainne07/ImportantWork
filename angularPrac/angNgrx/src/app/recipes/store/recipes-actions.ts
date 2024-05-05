import { Action } from '@ngrx/store';
import { Recipes } from '../recipes';
export const SET_RECI = '[recipes] set recipes';
export const ADD_RECI = '[recipes] add recipes';
export const UPD_RECI = '[recipes] update recipes';
export const DEL_RECI = '[recipes] del recipes';

export class setRecipe implements Action {
  readonly type = SET_RECI;
  constructor(public payload: Recipes[]) {}
}
export class addRecipe implements Action {
  readonly type = ADD_RECI;
  constructor(public payload: Recipes) {}
}
export class updateRecipe implements Action {
  readonly type = UPD_RECI;
  constructor(public payload: { index: number; recipe: Recipes }) {}
}
export class delRecipe implements Action {
  readonly type = DEL_RECI;
  constructor(public payload: number) {}
}
export type recipeActions =
  | setRecipe
  | addRecipe
  | updateRecipe
  | delRecipe
 