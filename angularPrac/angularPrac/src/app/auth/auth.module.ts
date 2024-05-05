import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoadingSpinnerComponent } from '../loading-spinner/loading-spinner.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AuthComponent, LoadingSpinnerComponent],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
