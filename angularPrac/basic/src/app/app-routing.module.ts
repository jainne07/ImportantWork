import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BasicFormComponent } from "./basic-form/basic-form.component";
import { BasicComponent } from "./basic/basic.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { ObservSubsComponent } from "./observ-subs/observ-subs.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PracComponent } from "./prac/prac.component";
import { ReactiveFormComponent } from "./reactive-form/reactive-form.component";
import { TodoListComponent } from "./todo-list/todo-list.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "basic-bind" },
  { path: "prac", component: PracComponent },
  { path: "employee-list", component: EmployeeListComponent },
  { path: "basic-form", component: BasicFormComponent },
  { path: "todo-list", component: TodoListComponent },
  { path: "employee-details", component: EmployeeDetailsComponent },
  { path: "basic-bind", component: BasicComponent },
  { path: "reactive-form", component: ReactiveFormComponent },
  { path: "obsrv", component: ObservSubsComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
