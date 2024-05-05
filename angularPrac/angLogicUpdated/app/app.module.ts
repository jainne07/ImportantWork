import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-item/recipe-item.component';
import { RecipeDetailsComponent } from './recipe/recipe-details/recipe-details.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { HeaderComponent } from './header/header.component';
import { RecipeEditFormComponent } from './recipe/recipe-edit-form/recipe-edit-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RecipeModule } from './recipe/recipe/recipe.module';
import { ShoppingModule } from './shopping-list/shopping/shopping.module';

@NgModule({
  declarations: [
    AppComponent,
    // RecipeComponent,
    // RecipeListComponent,
    // RecipeItemComponent,
    // RecipeDetailsComponent,
    // ShoppingListComponent,
    // ShoppingEditComponent,
    HeaderComponent,
    // RecipeEditFormComponent,
    // RecipeStartComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
