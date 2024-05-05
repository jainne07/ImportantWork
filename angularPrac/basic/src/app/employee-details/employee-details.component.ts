import { Component, OnInit } from '@angular/core';
import { EmployJsonService } from '../employ-json.service';
import { IEmployee } from '../employee';
@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [
  ]
})
export class EmployeeDetailsComponent implements OnInit {
  public employees: IEmployee[] = [];
  errorMsg = ""
  constructor(private _employ: EmployJsonService) { }

  ngOnInit(): void {
    this._employ.getEmployee().subscribe(data => this.employees = data,
      err => this.errorMsg = err)
  }

}
