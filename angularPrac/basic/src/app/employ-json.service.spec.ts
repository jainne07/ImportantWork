import { TestBed, tick } from '@angular/core/testing';
import { EmployJsonService } from './employ-json.service';
import { IEmployee } from './employee';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
const expectedUrl = "/assets/data/employee.json";
describe('EmployJsonService', () => {
  let employjsonservice: EmployJsonService;
  let controller: HttpTestingController;
  let employee: IEmployee;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [EmployJsonService],
    });
    employjsonservice = TestBed.inject(EmployJsonService);
    controller = TestBed.inject(HttpTestingController);
    employee = { "id": 1, "name": "Johnes Mathew", "age": 23 }

  });
  afterEach(() => {
    controller.verify();
  });

  it('should be created', () => {
    expect(employjsonservice).toBeTruthy();
  });
  it('get employees data', () => {
    var result: IEmployee[] = [];
    employjsonservice.getEmployee().subscribe((data) => {
      result = data;
    });
    const req = controller.expectOne(expectedUrl);
    expect(req.request.method).toEqual("GET");
    req.flush([employee])
    expect(result[0]).toEqual(employee);
    expect(result[0].name).toBe("Johnes Mathew");
  });
  it('error employees data', () => {
    let error: string = '';
    employjsonservice.getEmployee().subscribe(null, e => {
      error = e;
    });
    const req = controller.expectOne(expectedUrl);
    expect(req.request.method).toEqual("GET");
    req.flush("Something went wrong", {
      status: 404,
      statusText: "server not found"
    })
    expect(error).toBeTruthy();
  });
}); 
