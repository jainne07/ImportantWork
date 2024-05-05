import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styles: [
  ]
})
export class BasicFormComponent implements OnInit {
  @ViewChild('bsForm') bsForm!:NgForm; 
  userData:any; 
  constructor() { }

  ngOnInit(): void {
  }
  getData(val:any){ 
      console.log(val) 
      this.userData=val 
     } 
    
}
