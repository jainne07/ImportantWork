import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Recipes } from '../recipes';
import { RecipesService } from '../recipes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit, OnDestroy {
  //@Output() recipewasSelected=new EventEmitter<Recipes>();
  recipes!: Recipes[];
  subscription!: Subscription;
  // recipes: Recipes[]=[
  //   new Recipes('Sandwich', 'make sandwich using bread and paneer', 'assets/sandwich.jpg'),
  //   new Recipes('Lemon juice', 'make lemon juice using bread and paneer', 'assets/lemon-juice.jpg')
  // ]
  constructor(private recipeSer: RecipesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.recipeSer.recipesChanged
      .subscribe(
        (recipes: Recipes[]) => {
          this.recipes = recipes;
        }
      );
    this.recipes=this.recipeSer.getrecipes();
  }
  // recipeSelect(recipe: Recipes){
  //   //console.log('rec-list', recipe)
  //   this.recipewasSelected.emit(recipe)
  // }
  newRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
