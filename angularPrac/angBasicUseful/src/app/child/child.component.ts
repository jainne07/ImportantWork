import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataserviceService } from '../dataservice.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {
  // message: string ="hello child component"
  // messagenew: string ="hello message passed"
  message!: string;
  public counter: number = 0;
  // @Output() messageEvent= new EventEmitter<any>();
  constructor(private data: DataserviceService) {}

  ngOnInit(): void {
    this.data.currentMessage.subscribe((message) => (this.message = message));
  }
newMessage(){
  this.data.changeMessage("Hello from Sibling");
}
  // sendMessage(){
  //   this.messageEvent.emit(this.messagenew)
  // }

  // inc(){
  //   this.counter++;
  // }

  // dec(){
  //   this.counter--;
  // }
}
