import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styles: [
  ]
})
export class ShoppingListComponent implements OnInit {
 ingredient!: Ingredients[];
  constructor(private shopSer: ShoppingService) { }

  ngOnInit(): void {
   this.ingredient=this.shopSer.getIngredient();
   //console.log(this.ingredient)
  }
  onEdit(i: number){
    this.shopSer.selectedIng.next(i)
  }
}
