import { Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  startEditing=new Subject<number>();
  ingredients: Ingredients[]=[
    new Ingredients('Orange', 3),
  ]
  constructor() { }
  getIngre(){
    return this.ingredients
  }
  getIngreId(id: number){
    return this.ingredients[id]
  }
  updateIngre(id: number, newing: Ingredients){
    this.ingredients[id] = newing
  }
  deleteIng(id: number){
    this.ingredients.splice(id, 1)
  }
  addIngre(ingredients: Ingredients){
    this.ingredients.push({
      name: ingredients.name,
      amount: ingredients.amount
    })
  }
  addIngreRecipe(ingredients: Ingredients[]){
    this.ingredients.push(...ingredients)
  }
}
