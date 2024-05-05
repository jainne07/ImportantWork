import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeDetailsComponent } from './employee-details.component';
import { EmployJsonService } from '../employ-json.service';
import { of, throwError } from 'rxjs'

describe('EmployeeDetailsComponent', () => {
  let component: EmployeeDetailsComponent;
  let fixture: ComponentFixture<EmployeeDetailsComponent>;
  let getMoc: any;
  beforeEach(async () => {
    getMoc = {
      getEmployee: jest.fn()
    }
    await TestBed.configureTestingModule({
      declarations: [EmployeeDetailsComponent],
      providers: [
        {
          provide: EmployJsonService,
          useValue: getMoc
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeDetailsComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges(); 
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get employees', () => {
    jest.spyOn(getMoc, 'getEmployee').mockReturnValue(of([{ "id": 1, "name": "Johnes Mathew", "age": 23 }]));
    fixture.detectChanges();
    console.log('component.employees', component.employees);
    expect(component.employees).not.toBeUndefined();
    expect(component.employees[0].name).toBe("Johnes Mathew");
  });
  it('should not get employees', () => {
    jest.spyOn(getMoc, 'getEmployee').mockReturnValue(throwError({ errorMsg: "Server not found" }));
    fixture.detectChanges();
    console.log('component errorMsg', component.errorMsg);
    expect(component.errorMsg).not.toBeUndefined();

  });
}); 
