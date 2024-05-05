import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingEditComponent } from '../shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from '../shopping-list.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ShoppingEditComponent, ShoppingListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ShoppingRoutingModule
    ],
})
export class ShoppingModule { }
