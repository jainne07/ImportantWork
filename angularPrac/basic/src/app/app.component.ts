import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  nameChild: string = "Angular Call";
  msg = "";
  constructor(private router: Router) {
    //console.log("parent Called");  
  }
  hasRoute(route: string) {
    return this.router.url.includes(route);
  }

}
