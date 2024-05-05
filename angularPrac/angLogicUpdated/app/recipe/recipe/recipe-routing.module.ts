import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from '../recipe.component';
import { RecipeStartComponent } from '../recipe-start/recipe-start.component';
import { RecipeEditFormComponent } from '../recipe-edit-form/recipe-edit-form.component';
import { RecipeDetailsComponent } from '../recipe-details/recipe-details.component';

const routes: Routes = [
  // {
  //   path: 'recipes',
  //   component: RecipeComponent,
  //   children: [
  //     { path: '', component: RecipeStartComponent },
  //     { path: 'new', component: RecipeEditFormComponent },
  //     { path: ':id', component: RecipeDetailsComponent },
  //     { path: ':id/edit', component: RecipeEditFormComponent },
  //   ],
  // },
  {
    path: '',
    component: RecipeComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditFormComponent },
      { path: ':id', component: RecipeDetailsComponent },
      { path: ':id/edit', component: RecipeEditFormComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipeRoutingModule {}
