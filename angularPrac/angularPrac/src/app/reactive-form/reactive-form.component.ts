import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  gender=['male','female'];
  signup!:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.signup=new FormGroup({
      userData: new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email])
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([])
    })
    this.signup.patchValue(
      {
        userData:{
          name: 'John'
        }
      })
  }
  get hobbies(){
    return <FormArray>this.signup.get('hobbies')
  }
  addHobbies(){
    const hob=<FormArray>this.signup.get('hobbies')
    return hob.push(new FormControl('',Validators.required))
  }
  reactiveForm(){
    console.log(this.signup.value)
    this.signup.reset();
  }
}
