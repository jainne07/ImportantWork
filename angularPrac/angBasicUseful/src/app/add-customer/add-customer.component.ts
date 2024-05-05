import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {
  customers: string[]=[]
  show=false;
  @ViewChild('signup') signup!: NgForm;
  constructor() { }

  ngOnInit(): void {
  }

  addCust(){
    let name=this.signup.value.customer
    this.show=true;
    console.log(name)
    if(name ==='' || name === null){
      return 
    }
    this.signup.reset();
    console.log(this.customers)
    this.customers.push(name)
  }

}
