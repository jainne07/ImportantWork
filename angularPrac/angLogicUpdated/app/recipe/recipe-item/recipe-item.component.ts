import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styles: [
  ]
})
export class RecipeItemComponent implements OnInit {
@Input() recipeItem!: Recipe;

  constructor(private recipeSer: RecipeService) { }

  ngOnInit(): void {
    //console.log('recipeDetails',this.recipeItem);
  }

  // selected(){
  //   this.recipeSer.selectedRecipe.emit(this.recipeItem)
  //   //console.log(this.recipeItem)
  // }
}
