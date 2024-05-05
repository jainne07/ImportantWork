import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tem-driven',
  templateUrl: './tem-driven.component.html',
  styleUrls: ['./tem-driven.component.scss'],
})
export class TemDrivenComponent implements OnInit {
  @ViewChild('signup') signup!: NgForm;
  gender = ['male', 'female'];
  defaultQues = 'teacher';
  answer = '';
  submitted = false;
  users: any;
  constructor() {}

  ngOnInit(): void {}

  suggestNam() {
    this.signup.form.patchValue({
      userData: {
        username: 'John',
      },
    });
  }
  tempForm() {
    console.log(this.signup.value);
    this.submitted = true;
    this.users = [
      {
        username: this.signup.value.userData.username,
        email: this.signup.value.userData.email,
        secret: this.signup.value.secret,
        answer: this.signup.value.answer,
        gender: this.signup.value.gender,
      },
    ];
    this.signup.reset();
  }
}
