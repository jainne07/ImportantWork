import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipes } from '../../recipes';
import { RecipesService } from '../../recipes.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styles: [
  ]
})
export class RecipesItemComponent implements OnInit {
 @Input() recipe!:Recipes
 @Input() index!:number
 //@Output() recipeSelected= new EventEmitter<any>()
  constructor(private recipeSer: RecipesService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  selected(): void{
    //this.recipeSer.recipeSelected.emit(this.recipe)
    //this.recipeSelected.emit()
  }
}
