import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() selected=new EventEmitter<string>()
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(data: string){
    this.selected.emit(data)
  }

}
