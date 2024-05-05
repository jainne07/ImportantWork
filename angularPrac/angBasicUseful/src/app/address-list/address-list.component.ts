import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent implements OnInit {
  address= [{street: 'bison', country:'India'}, {street: 'ca;culata', country:'India'}]
  constructor() { }

  ngOnInit(): void {
  }

}
