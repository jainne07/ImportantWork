import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: []
})
export class ServerComponent implements OnInit {
  server!: any;

  constructor(private serversService: ServersService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.data
      .subscribe(
        (data: Data) => {
          this.server = data['server'];
        }
      );
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params
      .subscribe(
        (params: Params) => {
          this.server = this.serversService.getServer(+params['id']);
        }
      );
  }

  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'});
  }

}
