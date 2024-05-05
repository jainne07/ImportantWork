import { Recipes } from '../recipes';
import * as recipeActions  from './recipes-actions';

export interface State{
  recipes: Recipes[];
}

const initialState:State = {
  recipes: [],
};

export function recipeReducer(
  state:State = initialState,
  action: recipeActions.recipeActions 
) {
  switch (action.type) {
    case recipeActions.SET_RECI:
      return {
        ...state,
        recipes: [...action.payload],
      };
      case recipeActions.ADD_RECI:
        return {
          ...state,
          recipes: [
            ...state.recipes,
            action.payload,
          ],
        }
      case recipeActions.UPD_RECI:
        const updateIngre = {
          ...state.recipes[action.payload.index],
          ...action.payload.recipe
        };
        const updateIngres = [...state.recipes];
        updateIngres[action.payload.index] = updateIngre;
        return {
          ...state,
          recipes: updateIngres,
        };
      case recipeActions.DEL_RECI:
        return {
          ...state,
          recipes: state.recipes.filter((recipe, index) => {
            return index !== action.payload;
          })
        };
    default:
      return state;
  }
}
