import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child-new',
  templateUrl: './child-new.component.html',
  styles: [
    `
    h2{
      color: orange;
      text-align: center;
    }
    `
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ChildNewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
