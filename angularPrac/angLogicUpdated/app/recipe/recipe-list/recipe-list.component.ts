import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  recipe!: Recipe[];
  constructor(
    private recipeSer: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.recipe = this.recipeSer.getRecipe();
    //console.log('recipe',this.recipe)
  }
  onNew(){
    this.router.navigate(['new'], {relativeTo: this.route})
  }
}
