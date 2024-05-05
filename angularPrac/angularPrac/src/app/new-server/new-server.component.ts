import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-new-server',
  templateUrl: './new-server.component.html',
  styles: [
  ]
})
export class NewServerComponent implements OnInit {

  constructor(private serverSer:ServerService) { }

  ngOnInit(): void {
  }

  onCreateAcc(name: string, status: string){
    this.serverSer.add(name, status)
  }

}
