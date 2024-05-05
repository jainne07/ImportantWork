import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-prac',
  templateUrl: './prac.component.html',
  styles: [
  ]
})
export class PracComponent implements OnInit {
  //@Input() parentData:string=""; 
  parentData: string = '';
  //@Output() childEvent=new EventEmitter() 
  person = {
    firstname: "Sam",
    lastname: "Smith",
    profession: "Web developer"
  }
  digit = 234
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params); //  
        this.parentData = params['parentData'];
        //console.log(this.parentData); 
      })
  }

}
