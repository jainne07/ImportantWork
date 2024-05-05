import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';
import { Ingredients } from 'src/app/shared/ingredients.model';

@Component({
  selector: 'app-recipe-edit-form',
  templateUrl: './recipe-edit-form.component.html',
  styles: [],
})
export class RecipeEditFormComponent implements OnInit, OnDestroy {
  recipeForm!: FormGroup;
  id!: number;
  editmode = false;
  recipe!: Recipe;
  dataParams!: Subscription;
  constructor(
    private route: ActivatedRoute,
    private recipeSer: RecipeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editmode = params['id'] != null;
      //console.log('recipe', this.recipe, this.editmode);
      this.initForm();
    });
  }
  private initForm() {
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '';
    let recipeIngredients = new FormArray([]);

    if (this.editmode) {
      const recipe = this.recipeSer.selectRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagpath;
      recipeDescription = recipe.description;
      if (recipe['ingredient']) {
        for (let ingredient of recipe.ingredient) {
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount: new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      name: new FormControl(recipeName, Validators.required),
      imagpath: new FormControl(recipeImagePath, Validators.required),
      description: new FormControl(recipeDescription, Validators.required),
      ingredient: recipeIngredients,
    });
  }
  get recipeControls() {
    return this.recipeForm.get('ingredient') as FormArray;
  }
  onClear() {
    this.recipeForm.reset();
    this.editmode = false;
    this.router.navigate(['/recipes']);
  }
  submit() {
    //  console.log('check', this.editmode);
    console.log(this.recipeForm.value);
    if (this.editmode) {
      this.recipeSer.updateRecipe(this.id, this.recipeForm.value);
    } else {
      this.recipeSer.addRecipe(this.recipeForm.value);
    }
    this.onClear();
  }
  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredient')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }

  onDeleteIngredient(index: number) {
    (<FormArray>this.recipeForm.get('ingredient')).removeAt(index);
  }
  ngOnDestroy(): void {
    // this.dataParams.unsubscribe();
  }
}
