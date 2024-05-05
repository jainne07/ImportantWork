import { Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  ingredient: Ingredients[] = [
    new Ingredients('Lemon', 2),
    new Ingredients('Water', 2),
  ];
  constructor() {}
  selectedIng=new Subject<number>();
  getIngredient() {
    return this.ingredient;
  }
  selectIngr(id: number){
    return this.ingredient[id]
  }
  addingr(ingredient: Ingredients){
    const existingItem=this.ingredient.findIndex((v)=> v.name.toLowerCase() ===ingredient.name.toLocaleLowerCase())
    //console.log(existingItem);
    if(existingItem === -1){
      this.ingredient.push(ingredient);
    }else{
      const updatedItem = {
        name: ingredient.name,
        amount: ingredient.amount + this.ingredient[existingItem].amount,
      };
      this.ingredient[existingItem]=updatedItem
    }
  }
  updIngr(id:number ,ingredient: Ingredients){
      const updatedItem = {
        name: ingredient.name,
        amount: ingredient.amount
      };
      this.ingredient[id]=updatedItem

  }
  deleteIngr(id:number){
    this.ingredient.splice(id, 1)
}
  addIngrRecipe(ingredient: Ingredients[]){
    this.ingredient.push(...ingredient)
    let result = this.ingredient.reduce((acc: any, curr: Ingredients) => {
    let item = acc.find((item:Ingredients) => item.name.toLowerCase() === curr.name.toLowerCase());
      if (item) {
        item.amount += curr.amount;
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);
    this.ingredient=result;
  }
  
}
