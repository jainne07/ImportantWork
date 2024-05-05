import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'/auth', pathMatch:'full'},
  {path:'recipes', loadChildren:()=> import('./recipes/recipes.module').then(m=>m.RecipesModule)},
  {path:'shopping', loadChildren:()=> import('./shopping-list/shopping-list.module').then(m=>m.ShoppingListModule)},
  {path:'auth', loadChildren:()=> import('./auth/auth.module').then(m=>m.AuthModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
