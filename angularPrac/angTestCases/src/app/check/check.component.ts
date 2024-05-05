import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.scss'],
})
export class CheckComponent implements OnInit {
  @Input() message!: string;
  messageChild: string="hi parent"
  @Output() outputData =new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
  sendData(){
    this.outputData.emit(this.messageChild);
  }
}
