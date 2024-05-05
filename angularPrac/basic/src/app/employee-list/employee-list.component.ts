import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employee.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styles: [
  ]
})
export class EmployeeListComponent implements OnInit {
  public employees: any[] = []
  constructor(private _employeesService: EmployeesService) { }

  ngOnInit() {
    this.employees = this._employeesService.getEmployees();
  }

}
