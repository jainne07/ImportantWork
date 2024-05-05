import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ObservSubsComponent } from './observ-subs/observ-subs.component';
import { PracComponent } from './prac/prac.component';
import { UsdInrPipe } from './usd-inr.pipe';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { BasicFormComponent } from './basic-form/basic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    EmployeeDetailsComponent,
    ObservSubsComponent,
    PracComponent,
    UsdInrPipe,
    EmployeeListComponent,
    TodoListComponent,
    PageNotFoundComponent,
    ReactiveFormComponent,
    BasicFormComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
