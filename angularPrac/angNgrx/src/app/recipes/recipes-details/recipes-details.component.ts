import { Component, Input, OnInit } from '@angular/core';
import { Recipes } from '../recipes';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as fromapp from '../../app.reducer'
import * as recipeActions from '../store/recipes-actions'
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styles: [
  ]
})
export class RecipesDetailsComponent implements OnInit {
  //@Input() recipe!: Recipes
  recipe!: Recipes
  id!: number;
  constructor(private recipeSer:RecipesService, private router: Router, private route: ActivatedRoute, private store: Store<fromapp.AppState>) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params)=> {
        this.id=+params['id'];
        this.store.select('recipes').pipe(
          map((recipeData: any)=> {
            return recipeData.recipes.find((recipe: any, index: number)=>{
              return index===this.id
            })
          })
         ).subscribe((recipe: Recipes) => {
               this.recipe = recipe;
             }
           );
        //this.recipe=this.recipeSer.getrecipe(this.id)
      }
    )
  }
  editRecipe(){
  this.router.navigate(['edit'], {relativeTo: this.route})
  }
  addShop(){
    this.recipeSer.addIngre(this.recipe.ingredients);
  }
  deleteRecipe(){
    this.store.dispatch(new recipeActions.delRecipe(this.id))
    //this.recipeSer.deleteRecipe(this.id)
  }
}
