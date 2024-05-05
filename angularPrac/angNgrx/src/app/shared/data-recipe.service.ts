import { Injectable } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';
import { HttpClient } from '@angular/common/http';
import { Recipes } from '../recipes/recipes';
import { map, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromapp from '../app.reducer'
import * as recipeActions from '../recipes/store/recipes-actions'
@Injectable({
  providedIn: 'root',
})
export class DataRecipeService {
  constructor(private recipeSer: RecipesService, private http: HttpClient, private store: Store<fromapp.AppState>) {}

  storeRecipes() {
    const recipes = this.recipeSer.getrecipes();
    this.http
      .put(
        'https://ng-recipe-6037e-default-rtdb.firebaseio.com/recipes.json',
        recipes
      )
      .subscribe((resp) => console.log(resp));
  }

  fetchRecipes() {
   return this.http
      .get<Recipes[]>(
        'https://ng-recipe-6037e-default-rtdb.firebaseio.com/recipes.json'
      ).pipe(
        map(recipes => {
          return recipes.map(recipe => {
            return {
              ...recipe,
              ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),tap(recipes => {
          console.log('check recipes',recipes)
          this.store.dispatch(new recipeActions.setRecipe(recipes))
          //this.recipeSer.setrecipes(recipes);
        })
      )
  }
}
