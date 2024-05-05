import { Action, ActionReducerMap } from '@ngrx/store';
import { Ingredients } from '../shared/ingredients';
import * as shoppingActions from './shopping-list-actions';

export interface State{
  ingredients: Ingredients[];
  editIng: Ingredients | null;
  editIndex: number;
}

const initialState:State = {
  ingredients: [new Ingredients('Lemon', 3), new Ingredients('Apple', 3)],
  editIng: null,
  editIndex: -1
};

export function shoppingListReducer(
  state:State = initialState,
  action: shoppingActions.shoppingActions 
) {
  switch (action.type) {
    case shoppingActions.ADD_INGRE:
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          action.payload,
        ],
      };
    case shoppingActions.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [
          ...state.ingredients,
          ...action.payload,
        ],
      };
    case shoppingActions.UPD_INGRE:
      const ingre: Ingredients =
        state.ingredients[state.editIndex];
      const updateIngre = {
        ...ingre,
        ...action.payload.ingredients,
      };
      const updateIngres = [...state.ingredients];
      updateIngres[state.editIndex] =
 updateIngre;
      return {
        ...state,
        ingredients: updateIngres,
        editIng: null,
        editIndex: -1
      };
    case shoppingActions.DEL_INGRE:
      return {
        ...state,
        ingredients: state.ingredients.filter((ig, igIndex) => {
          return igIndex !== state.editIndex;
        }),
        editIng: null,
        editIndex: -1
      };
      case shoppingActions.START:
      return {
        ...state,
       editIng: {...state.ingredients[action.payload]},
       editIndex:action.payload
      };
      case shoppingActions.STOP:
        return {
          ...state,
         editIng: null,
         editIndex: -1
        };
    default:
      return state;
  }
}
