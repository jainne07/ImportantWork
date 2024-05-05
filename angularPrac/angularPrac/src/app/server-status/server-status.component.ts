import { Component, Input, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-server-status',
  templateUrl: './server-status.component.html',
  styles: [
  ]
})
export class ServerStatusComponent implements OnInit {
  @Input() account!: any;
  @Input() id!: number;
  constructor(private serverSer:ServerService) { }

  ngOnInit(): void {
  }
  onSetTo(status: string){
       this.serverSer.update(this.id, status)
  }

}
