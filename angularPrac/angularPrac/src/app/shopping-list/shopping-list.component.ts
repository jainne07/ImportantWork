import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients!: Ingredients[]
  // ingredients: Ingredients[]=[
  //   new Ingredients('Paneer', 11),
  //   new Ingredients('Bread', 10),
  //   new Ingredients('Lemon', 3),
  // ]
  constructor(private shoppingSer: ShoppingService) { }

  ngOnInit(): void {
    this.ingredients=this.shoppingSer.getIngre();
  }
  onEdit(id: number){
    return this.shoppingSer.startEditing.next(id)
  }
  // addIngre(data: any){
  //   this.ingredients.push({
  //     name: data.name,
  //     amount: data.amount
  //   })
  // }
}
