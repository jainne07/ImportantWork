import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styles: [
  ]
})
export class CockpitComponent implements OnInit {
  //serverElements: any = [] ;
  @Output() serverAdd=new EventEmitter<{name: string, content: string}>();
  @Output() blueprintAdd=new EventEmitter<any>();
  @ViewChild('newValue', {static: true}) newValue!: ElementRef;
  newServerName = '';
  newServerContent = '';
  constructor() { }

  ngOnInit(): void {
    console.log(this.newValue.nativeElement)
  }
  chkval(){
   console.log(this.newValue.nativeElement.value)
  }
  onaddServer() {
    this.serverAdd.emit({
      name: this.newServerName,
      content: this.newServerContent
    })
  }

  onaddBlue() {
    this.blueprintAdd.emit({
      name: this.newServerName,
      content: this.newServerContent
    });
  }
  // onaddServer() {
  //   // this.serverElements.push({
  //   //   type: 'server',
  //   //   name: this.newServerName,
  //   //   content: this.newServerContent
  //   // });
  // }

  // onaddBlue() {
  //   // this.serverElements.push({
  //   //   type: 'blueprint',
  //   //   name: this.newServerName,
  //   //   content: this.newServerContent
  //   // });
  // }
}
