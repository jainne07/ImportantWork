import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title = 'Angular practice';
  data: number = 100;
  myid = "angular";
  bluTxt: string = "text-blue";
  hasError: boolean = false;
  welcome: string = "";
  message = {
    "text-red": this.hasError,
    "text-LightSeaGreen": !this.hasError
  }
  highlight = {
    backgroundColor: "Lavender",
    color: "black",
    width: "280px",
    margin: "0px auto",
    padding: "10px",
    fontWeight: "bold"
  }
  onclick() {
    //console.log("hello u have clicked this!"); 
    this.welcome = "Welcome to angular event handling"
  }
  logDet(val: any) {
    console.log(val);
  }
  name: string = "";
  dispBlk: boolean = true;
  dispNm: boolean = false;
  dispTog() {
    this.dispNm = !this.dispNm;
  }
  colorPick: string = "blue";
  colorType: string[] = ["Red", "Blue", "Green", "Orange"]

}
