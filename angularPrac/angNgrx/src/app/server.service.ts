import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServerService {
  servers = [
    { name: 'mainframe server', status: 'active' },
    { name: 'blockchain server', status: 'inactive' },
  ];
  constructor() {}
  logStatus(status: string) {
    console.log(`this is updated status`, status);
  }
  update(id: number, status: string) {
    this.servers[id].status = status;
    this.logStatus(status);
  }
  add(name: string, status: string) {
    this.servers.push({ name: name, status: status });
    this.logStatus(status);
  }
}
