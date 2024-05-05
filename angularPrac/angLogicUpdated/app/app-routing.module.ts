import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeEditFormComponent } from './recipe/recipe-edit-form/recipe-edit-form.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShoppingModule } from './shopping-list/shopping/shopping.module';
import { RecipeModule } from './recipe/recipe/recipe.module';

const routes: Routes = [
  { path: '', redirectTo: '/shopping-list', pathMatch: 'full' },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./recipe/recipe/recipe.module').then((m) => m.RecipeModule),
  },
  {
    path: 'shopping-list',
    loadChildren: () =>
      import('./shopping-list/shopping/shopping.module').then((m) => m.ShoppingModule),
  },
  // {path: 'recipes', component: RecipeComponent, children:[
  //   {path: '', component: RecipeStartComponent},
  //   {path: 'new', component: RecipeEditFormComponent},
  //   {path: ':id', component: RecipeDetailsComponent},
  //   {path: ':id/edit', component: RecipeEditFormComponent}
  // ]},
  //{path: 'shopping-list', component: ShoppingListComponent},
  { path: '**', component: PagenotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  //imports: [RouterModule.forRoot(routes),ShoppingModule, RecipeModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
