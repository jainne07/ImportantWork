import { ActionReducerMap } from '@ngrx/store';
import * as fromShoppingList from './shopping-list/shopping-list-reducers';
import * as fromRecipes from './recipes/store/recipes-reducers';


    export interface AppState {
      shoppinglist: fromShoppingList.State;
      recipes: fromRecipes.State
    }

    export const appReducer: ActionReducerMap<AppState, any> = {
      shoppinglist: fromShoppingList.shoppingListReducer,
      recipes: fromRecipes.recipeReducer
    };