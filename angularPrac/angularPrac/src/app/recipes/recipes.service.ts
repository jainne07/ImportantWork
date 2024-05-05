import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients';
import { Recipes } from './recipes';
import { ShoppingService } from '../shopping-list/shopping.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipesService {
  recipeSelected = new EventEmitter<Recipes>();
  recipesChanged = new Subject<Recipes[]>();
  private recipes: Recipes[] = [];
  // recipes: Recipes[]=[
  //   new Recipes('Sandwich', 'make sandwich using bread and paneer', 'assets/sandwich.jpg',[new Ingredients('Bread',3), new Ingredients('Paneer',11)]),
  //   new Recipes('Lemon juice', 'make lemon juice using bread and paneer', 'assets/lemon-juice.jpg',[new Ingredients('Lemon',2), new Ingredients('Water',2)])
  // ]
  constructor(private shoppingSer: ShoppingService) {}

  setrecipes(recipe: Recipes[]) {
    this.recipes = recipe;
    this.recipesChanged.next(this.recipes);
  }
  getrecipes() {
    return this.recipes;
  }
  getrecipe(id: number) {
    return this.recipes[id];
  }
  deleteRecipe(id: number) {
    return this.recipes.splice(id, 1);
  }
  addIngre(ingredient: Ingredients[]) {
    this.shoppingSer.addIngreRecipe(ingredient);
  }
  addRecipe(recipe: Recipes) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes);
  }
  updateRecipe(id: number, recipe: Recipes) {
    this.recipes[id] = recipe;
    this.recipesChanged.next(this.recipes);
  }
}
