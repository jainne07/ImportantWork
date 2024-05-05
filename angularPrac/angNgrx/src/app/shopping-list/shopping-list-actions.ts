import { Action } from '@ngrx/store';
import { Ingredients } from '../shared/ingredients';
export const ADD_INGRE = '[shopping list] add ingredients';
export const ADD_INGREDIENTS = '[shopping list] add ingredients recipes';
export const UPD_INGRE = '[shopping list] update ingredients';
export const DEL_INGRE = '[shopping list] delete ingredients';
export const START = '[shopping list] start ingredients';
export const STOP = '[shopping list] stop ingredients';

export class addIngre implements Action {
  readonly type = ADD_INGRE;
  constructor(public payload: Ingredients) {}
}
export class addIngres implements Action {
  readonly type = ADD_INGREDIENTS;
  constructor(public payload: Ingredients[]) {}
}
export class updateIngre implements Action {
  readonly type = UPD_INGRE;
  constructor(public payload: { index: number; ingredients: Ingredients }) {}
}
export class delIngre implements Action {
  readonly type = DEL_INGRE;
  constructor(public payload: number) {}
}
export class start implements Action {
  readonly type = START;
  constructor(public payload: number) {}
}
export class stop implements Action {
  readonly type = STOP;
}
export type shoppingActions =
  | addIngre
  | addIngres
  | updateIngre
  | delIngre
  | start
  | stop;
