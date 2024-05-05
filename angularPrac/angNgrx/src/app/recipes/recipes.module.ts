import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesDetailsComponent } from './recipes-details/recipes-details.component';
import { RecipeStartComponent } from './recipe-start/recipe-start.component';
import { RecipesEditComponent } from './recipes-edit/recipes-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RecipesItemComponent } from './recipes-list/recipes-item/recipes-item.component';
import { DropdownDirective } from '../dropdown.directive';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipesComponent,
    RecipesListComponent,
    RecipesItemComponent,
    RecipesDetailsComponent,
    RecipeStartComponent,
    RecipesEditComponent
  ],
  imports: [CommonModule, RecipesRoutingModule, ReactiveFormsModule, SharedModule],
})
export class RecipesModule {}
