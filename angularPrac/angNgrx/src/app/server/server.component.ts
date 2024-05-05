import { Component, Input, OnInit, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [
  ]
})
export class ServerComponent implements OnInit {
  @Input() serverEl!: any;
  constructor() { 
    console.log("constructor called")
  }
 ngOnChanges(changes: SimpleChange){
  console.log("ng onChanged");
  console.log(changes)
 }
  ngOnInit(): void {
    console.log("ng init called")
  }

}
