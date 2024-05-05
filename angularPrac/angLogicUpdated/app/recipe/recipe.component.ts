import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss'],
})
export class RecipeComponent implements OnInit, OnDestroy {
  recipe!: Recipe;
  recSel!: Subscription;
  constructor(private RecipeSer: RecipeService) {}

  ngOnInit(): void {
    this.recSel=this.RecipeSer.selectedRecipe.subscribe((recp) => {
      this.recipe = recp;
      console.log(this.recipe);
    });
  }
  ngOnDestroy(): void {
    this.recSel.unsubscribe();
  }
}
