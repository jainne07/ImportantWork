import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients';
import { ShoppingService } from './shopping.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as shoppingActions from './shopping-list-actions'
import * as fromShopping from '../app.reducer'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {
  ingredients!: Observable<{ingredients: Ingredients[]}>
  // ingredients: Ingredients[]=[
  //   new Ingredients('Paneer', 11),
  //   new Ingredients('Bread', 10),
  //   new Ingredients('Lemon', 3),
  // ]
  constructor(private shoppingSer: ShoppingService,private store: Store<fromShopping.AppState>) { }

  ngOnInit(): void {
    this.ingredients=this.store.select('shoppinglist')
   // this.ingredients=this.shoppingSer.getIngre();
  }
  onEdit(id: number){
    return this.store.dispatch(new shoppingActions.start(id))
    //return this.shoppingSer.startEditing.next(id)
  }
  // addIngre(data: any){
  //   this.ingredients.push({
  //     name: data.name,
  //     amount: data.amount
  //   })
  // }
}
