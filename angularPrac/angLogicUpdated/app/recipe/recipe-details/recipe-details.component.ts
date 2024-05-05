import {
  Component,
  OnInit,
  Input,
  HostListener,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { Recipe } from '../recipe.model';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { RecipeService } from '../recipe.service';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styles: [],
})
export class RecipeDetailsComponent implements OnInit, OnDestroy {
  //@Input() recipeDetail!: Recipe;
  recipeDetail!: Recipe;
  @ViewChild('eleRef') eleRef!: ElementRef;
  dropdown = false;
  dataParams!: Subscription;
  id!: number;
  constructor(private recipeSer: RecipeService, private route: ActivatedRoute, private router: Router) {}
  
    @HostListener('document:click', ['$event']) click(event: Event) {
      if (this.eleRef && this.eleRef.nativeElement.classList.contains('show')) {
        this.dropdown = false;
        this.eleRef.nativeElement.classList.remove('show');
      }
    }
  
 
  ngOnInit(): void {
    this.dataParams=this.route.params.subscribe((params: Params)=>{
      this.id=+params['id']
      this.recipeDetail=this.recipeSer.selectRecipe(this.id)
      //console.log(this.recipeDetail)
    })
  }
  drop(e: Event) {
    e.stopPropagation();
    this.dropdown = !this.dropdown;
  }
  addShopping() {
    this.recipeSer.addIng(this.recipeDetail.ingredient);
    this.router.navigate(['/shopping-list'])
  }
  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
  onDelete() {
    this.recipeSer.deleteRecipe(this.id)
    this.router.navigate(['/recipes'])
  }
  ngOnDestroy(){
    this.dataParams.unsubscribe()
  }
}
