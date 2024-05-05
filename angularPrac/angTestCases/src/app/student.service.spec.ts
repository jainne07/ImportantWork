import { TestBed } from '@angular/core/testing';

import { StudentService } from './student.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PostModel } from './post-model';
describe('StudentService', () => {
  let service: StudentService;
  let http: HttpClient;
  let httpControl: HttpTestingController;
  beforeEach(async() => {
    await TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      declarations:[],
      providers:[StudentService]
    });
    service = TestBed.inject(StudentService);
  });
 beforeEach(()=>{
  httpControl=TestBed.inject(HttpTestingController)
 })
 afterEach(() => {
  httpControl.verify();
});
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('check getData', () => {
   const testdata:PostModel[]=[
    {
      userId: 1,
      id: 1,
      title: "sunt aut facere repellat",
      body: "quia et suscipit\nsuscipit recusandae consequuntur"
    },
    {
      userId: 2,
      id: 2,
      title: "facere repellat",
      body: "recusandae consequuntur"
    }]
    service.getData().subscribe(
      posts=>{
        expect(testdata).toBe(posts,"should be mocked")
      }
    )
    const req=httpControl.expectOne(service.url);
    expect(req.cancelled).toBeFalsy();
    expect(req.request.responseType).toEqual('json')
    expect(req.request.method).toEqual("GET");
    req.flush(testdata)
    expect(testdata[1].title).toBe("facere repellat")
  });
  it('check postData', () => {
    const testdata:PostModel[]=[
     {
       userId: 3,
       id: 3,
       title: "sunt aut facere repellat",
       body: "quia et suscipit\nsuscipit recusandae consequuntur"
     }]
     service.postData().subscribe(
       posts=>{
         expect(testdata).toBe(testdata)
       }
     )
     const req=httpControl.expectOne(service.url);
     expect(req.cancelled).toBeFalsy();
     expect(req.request.responseType).toEqual('json')
     expect(req.request.method).toEqual("POST");
     req.flush(testdata)
     expect(testdata[0].title).toBe("sunt aut facere repellat")
   });
   it('check error getData', () => {
    const errormsg="something went wrong"
     service.getData().subscribe(
       posts=>fail("to get data"),
       error=>{
        expect(error.status).toEqual(404);
        expect(error.error).toBe(errormsg)
       }
     )
     const req=httpControl.expectOne(service.url);
     req.flush(errormsg, {
      status: 404,
      statusText: "server not found"
    })
   });
});
