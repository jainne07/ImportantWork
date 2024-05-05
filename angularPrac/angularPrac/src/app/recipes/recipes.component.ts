import { Component, OnInit } from '@angular/core';
import { Recipes } from './recipes';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss'],
})
export class RecipesComponent implements OnInit {
  //selectedRecipe!: Recipes;
  constructor(private recipeSer: RecipesService) {}

  ngOnInit(): void {
    // this.recipeSer.recipeSelected.subscribe((recipe: Recipes) => {
    //   console.log(recipe);
    //   this.selectedRecipe = recipe;
    // });
  }
}
