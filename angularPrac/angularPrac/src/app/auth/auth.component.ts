import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthResponseData, AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  isLoginMode =false
  isLoading = false;
  error = null;
  constructor(private authSer: AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  onSwitchMode(){
  this.isLoginMode=!this.isLoginMode
  }
  onSubmit(form: NgForm){
   const email = form.value.email;
   const password = form.value.password;
   this.isLoading = true;
   let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoginMode) {
      authObs = this.authSer.login(email, password);
    } else {
      authObs = this.authSer.signup(email, password);
    }

    authObs.subscribe(
      resData => {
        console.log(resData);
        this.isLoading = false;
        this.error=null;
        this.router.navigate(['/recipes']);
      },
      errorMessage => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
   form.reset()
  }

}
