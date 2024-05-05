import { TestBed } from '@angular/core/testing';
import { EmployeesService } from './employee.service';

describe('EmployeesService', () => {
    let employeesService: EmployeesService;

    beforeEach(() => {
        employeesService = new EmployeesService();
    });
    it('should be created', () => {
        expect(employeesService).toBeTruthy();
    });
    it('getEmployee service', () => {
        let employees = employeesService.getEmployees()
        expect(employees[1].name).toBe("Sam Smith");
    });
}); 
