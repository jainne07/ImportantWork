import { Injectable } from '@angular/core';
import { RecipesService } from '../recipes/recipes.service';
import { HttpClient } from '@angular/common/http';
import { Recipes } from '../recipes/recipes';
import { map, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataRecipeService {
  constructor(private recipeSer: RecipesService, private http: HttpClient) {}

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
          console.log(recipes)
          this.recipeSer.setrecipes(recipes);
        })
      )
  }
}
