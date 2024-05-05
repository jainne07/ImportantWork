import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentService } from './student.service';
import { PostModel } from './post-model';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angtest';
  counter: number= 0;
  result:number=0;
  name: string='';
  userread:boolean=false;
  num: number=11;
  colspanTable=2;
  label: string='label';
  username: string='';
  size= 21210021;
  selectMed: string='one';
  colorList=["red","blue","orange"];
  userList=[{id: 1, name: "suresh"},
  {id: 2, name: "mahesh"},
  {id: 3, name: "ramesh"}];
  parentMessage="hello child!, this message comes from parent";
  recievedData='';
  posts: PostModel[]=[];
  @ViewChild('login') login!:NgForm;
  signupForm!: FormGroup;
  user={}
  constructor(private studentSer:StudentService){}
  ngOnInit(): void {
    this.getDataList();
    this.signupForm=new FormGroup(
      {
        first: new FormControl(null, Validators.required),
        paswrd: new FormControl(null, [Validators.required, Validators.minLength(6)])
      }
    )
  }
  increment(){
    this.counter+=1
  }
  decrement(){
    this.counter-=1
  }
  calc(a:number,b:number){
   return a + b
  }
  recieved(data: any){
    this.recievedData=data;
  }
  getDataList(){
    this.studentSer.getData().subscribe(
      post=>this.posts=post,
      error=>console.log(error.message)
    )
  }
  // saveStudent(){
  //   this.calc(3,4);
  //   this.studentSer.getData().subscribe(
  //     data=>{console.log(data)}
  //   )
  // }
  private showname(){
    this.name="check private"
  }
  private multiply(a:number, b: number){
    return a * b
  }
  btn1(){
    this.label="change label click to btn1"
  }
  btn2(){
    this.label="change label click to btn2"
  }
  inputChng(){
    this.label="change label input changed"
  }
  inputChngEvt(event: any){
    this.label=event.target.value
  }
  setName(){
    this.username="hi angular coder"
  }
  submitHandle(){
   this.user=this.login.value
   console.log(this.login)
  }
  submitReactive(){
    //this.user=this.login.value
    console.log(this.signupForm.value)
   }
}
