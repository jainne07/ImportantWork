import { Component, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-messagecontainer',
  template: `
  <div>
      <h3>{{greetMessage}}</h3>
      <ng-content select="app-message"></ng-content>
  </div>
  `
})
export class MessageContainerComponent implements AfterContentInit {
  greetMessage = 'Ignite UI Rocks!';
  @ContentChild(MessageComponent) MessageComponnetContentChild!: MessageComponent;
  ngAfterContentInit() {
      console.log(this.MessageComponnetContentChild);
  }
}
