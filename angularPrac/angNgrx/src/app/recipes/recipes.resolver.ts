import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Recipes } from './recipes';
import { RecipesService } from './recipes.service';
import { DataRecipeService } from '../shared/data-recipe.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesResolver implements Resolve<Recipes[]> {
  constructor(private recipeSer: RecipesService, private data: DataRecipeService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any{
  //   const recipes = this.recipeSer.getrecipes();
  //   if (recipes.length === 0) {
  //     return this.data.fetchRecipes();
  //   } else {
  //     return recipes;
  //   }
   }
}
