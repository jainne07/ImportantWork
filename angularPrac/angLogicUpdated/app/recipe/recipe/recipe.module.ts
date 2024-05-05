import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { RecipeEditFormComponent } from '../recipe-edit-form/recipe-edit-form.component';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';
import { RecipeComponent } from '../recipe.component';
import { RecipeItemComponent } from '../recipe-item/recipe-item.component';
import { RecipeStartComponent } from '../recipe-start/recipe-start.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RecipeListComponent,
    RecipeEditFormComponent,
    RecipeDetailsComponent,
    RecipeComponent,
    RecipeItemComponent,
    RecipeStartComponent
  ],
  imports: [CommonModule, RecipeRoutingModule, ReactiveFormsModule],
})
export class RecipeModule {}
