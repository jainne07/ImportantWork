import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipes } from '../recipes';
import * as fromapp from '../../app.reducer'
import * as recipeActions from '../store/recipes-actions'
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.scss'],
})
export class RecipesEditComponent implements OnInit {
  recipeForm!: FormGroup;
  id!: number;
  editmode = false;
  constructor(
    private route: ActivatedRoute,
    private recipeSer: RecipesService,
    private router: Router,
    private store: Store<fromapp.AppState>
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editmode = params['id'] != null;
      this.initForm();
    });
   
   }

   private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editmode) {
      this.store.select('recipes').pipe(
        map((recipeData: any)=> {
          return recipeData.recipes.find((recipe: any, index: number)=>{
            return index===this.id
          })
        })).subscribe((recipe: Recipes)=>{
          recipeName = recipe.name;
          recipeImagePath = recipe.image;
          recipeDescription = recipe.description;
          if (recipe['ingredients']) {
            for (let ingredient of recipe.ingredients) {
              recipeIngredients.push(
                new FormGroup({
                  'name': new FormControl(ingredient.name, Validators.required),
                  'amount': new FormControl(ingredient.amount, [
                    Validators.required,
                    Validators.pattern(/^[1-9]+[0-9]*$/)
                  ])
                })
              );
            }
          }
        })
      //const recipe = this.recipeSer.getrecipe(this.id);
      // recipeName = recipe.name;
      // recipeImagePath = recipe.image;
      // recipeDescription = recipe.description;
      // if (recipe['ingredients']) {
      //   for (let ingredient of recipe.ingredients) {
      //     recipeIngredients.push(
      //       new FormGroup({
      //         'name': new FormControl(ingredient.name, Validators.required),
      //         'amount': new FormControl(ingredient.amount, [
      //           Validators.required,
      //           Validators.pattern(/^[1-9]+[0-9]*$/)
      //         ])
      //       })
      //     );
      //   }
      // }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'image': new FormControl(recipeImagePath, Validators.required),
      'description': new FormControl(recipeDescription, Validators.required),
      'ingredients': recipeIngredients
    });
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  get recipeControls(){
    return <FormArray>this.recipeForm.get('ingredients')
  }
  recpForm() {
    if (this.editmode) {
      this.store.dispatch(new recipeActions.updateRecipe({index:this.id, recipe: this.recipeForm.value}))
      //this.recipeSer.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.store.dispatch(new recipeActions.addRecipe(this.recipeForm.value))
      //this.recipeSer.addRecipe(this.recipeForm.value);
    }
    this.onCancel();
  }
  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
}
