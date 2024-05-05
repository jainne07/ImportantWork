
import {
  Component,
  ViewChild,
  OnInit
} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: [
  ]
})
export class FormComponent implements OnInit {
  @ViewChild('signup') signup!: NgForm
  idx:number=0;
  editmode=false
  userData:any=[];
    fetchData(){
      console.log('fetchdata',this.signup.value, this.signup.value.firstname)
      let data:any={
        firstname: this.signup.value.firstname,
        lastname: this.signup.value.lastname,
        dob: this.signup.value.dob
      }
      if(this.editmode){
        this.userData[this.idx]=data
        this.editmode=false;
      }else{
        this.userData.push(data)
      }
     
      console.log(this.userData)
      this.signup.reset();
    }
    delete(i:number){
      this.userData.splice(i,1)
    }
    edit(i:number){
      this.idx=+i
      console.log(this.userData[i]);
      this.editmode=true
      if(this.userData[i]){
        this.signup.form.setValue({
          firstname: this.userData[i].firstname,
          lastname: this.userData[i].lastname,
          dob: this.userData[i].dob
        })
      }
    }
  ngOnInit(): void {
  }

}
