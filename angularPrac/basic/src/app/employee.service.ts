import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EmployeesService {

    constructor() { }
    getEmployees() {
        return [
            { id: 1, name: "Johnes Mathew", age: 23 },
            { id: 2, name: "Sam Smith", age: 33 },
            { id: 3, name: "Jimmy", age: 31 }
        ]
    }
} 
