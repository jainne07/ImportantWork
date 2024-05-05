import { Injectable,EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingService } from '../shopping-list/shopping.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  selectedRecipe=new EventEmitter<Recipe>();
  recipe: Recipe[] = [
    new Recipe(
      'Sandwich',
      'make sandwich using bread and paneer',
      'assets/sandwich.jpg',
      [new Ingredients('Bread', 3), new Ingredients('Paneer', 11)]
    ),
    new Recipe(
      'Lemon juice',
      'make lemon juice using bread and paneer',
      'assets/lemon-juice.jpg',
      [new Ingredients('Lemon', 2), new Ingredients('Water', 2)]
    ),
  ];
  constructor(private shopSer: ShoppingService) {}
  getRecipe(){
    return this.recipe
  }
  addIng(ingredient: Ingredients[]){
    this.shopSer.addIngrRecipe(ingredient)
  }
  selectRecipe(id: number){
    return this.recipe[id]
  }
  addRecipe(recipe: Recipe){
    return this.recipe.push(recipe)
  }
  updateRecipe(id:number, recipe: Recipe){
    return this.recipe[id]=recipe
  }
  deleteRecipe(id: number){
    return this.recipe.splice(id, 1)
  }
}
