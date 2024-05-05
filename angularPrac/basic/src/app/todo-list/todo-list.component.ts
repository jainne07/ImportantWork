import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: [
  ]
})
export class TodoListComponent implements OnInit {
   list:any[]=[] 
    constructor() { } 
    ngOnInit(): void { 
    } 
   addTask(val:string){ 
   this.list.push({id:this.list.length, task:val}); 
   } 
   removeTask(id:number){ 
     console.log(id) 
    this.list=this.list.filter(item=> item.id !== id); 
    } 
  
}
