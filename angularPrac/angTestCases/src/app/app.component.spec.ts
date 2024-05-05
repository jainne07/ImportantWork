import {
  ComponentFixture,
  TestBed,
  async,
  tick,
  fakeAsync,
} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { StudentService } from './student.service';
import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LowerCasePipe, UpperCasePipe } from '@angular/common';
import { FilesizePipe } from './filesize.pipe';
import { of } from 'rxjs/internal/observable/of';
import { PostModel } from './post-model';
import { throwError } from 'rxjs';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debElem: DebugElement;
  let uppercase: UpperCasePipe;
  let lowercase: LowerCasePipe;
  let filesize: FilesizePipe;
  let service: StudentService
  let createObj: any;
  let createObjects: any;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
      declarations: [AppComponent, FilesizePipe],
      providers: [StudentService],
    }).compileComponents();
    createObj= jasmine.createSpy('fetchdata');
    createObj("this is sample data")
    createObjects= jasmine.createSpyObj('fetchmethod',["add", "sub"]);
    createObjects.add()
    createObjects.sub()
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debElem = fixture.debugElement;
    uppercase= new UpperCasePipe();
    lowercase= new LowerCasePipe();
    filesize= new FilesizePipe();
    service = TestBed.inject(StudentService);
  });
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'angtest'`, () => {
    expect(component.title).toEqual('angtest');
  });

  it('check counter increment', () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    component.increment();
    fixture.detectChanges();
    expect(parseInt(h1.textContent)).toBe(component.counter);
  });
  it('check counter decrement', () => {
    const h1 = fixture.nativeElement.querySelector('h1');
    component.decrement();
    fixture.detectChanges();
    expect(parseInt(h1.textContent)).toBe(component.counter);
  });
  it('check debugElement increment', () => {
    const h1 = debElem.query(By.css('h1'));
    const btn = debElem.query(By.css('#btn-incr'));
    btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(component.counter).toBe(parseInt(h1.nativeElement.textContent));
  });
  it('check call calc method', () => {
    const result = component.calc(4, 5);
    fixture.detectChanges();
    expect(result).toBe(9);
  });
  it('check private function call', () => {
    component['showname']();
    expect(component.name).toBe('check private');
  });
  it('check private function call-1', () => {
    const result = component['multiply'](10, 2);
    expect(result).toBe(20);
  });
  it('spy on check private function call-1', () => {
    const spyon = spyOn<any>(component, 'multiply');
    component['multiply'](10, 2);
    expect(spyon).toHaveBeenCalled();
  });
  it('check interpolation', () => {
    const title: HTMLElement = debElem.nativeElement.querySelector('#title');
    expect(title.textContent).toBe(component.title);
    component.title = 'angular interpolation';
    fixture.detectChanges();
    expect(title.textContent).toBe(component.title);
  });
  it('check property binding', () => {
    const username: HTMLInputElement =
      debElem.nativeElement.querySelector('#user');
    expect(username.disabled).toBeFalsy();
    // component.userread=true;
    // fixture.detectChanges();
    // expect(username.disabled).toBeTrue()
  });
  it('check attribute binding', () => {
    const tabledata: HTMLTableElement =
      debElem.nativeElement.querySelector('#tableData');
    expect(tabledata.getAttribute('colspan')).toEqual(
      component.colspanTable.toString()
    );
  });
  it('check event binding btn1', () => {
    const btn: HTMLButtonElement = debElem.nativeElement.querySelector('#btn1');
    btn.click();
    fixture.detectChanges();
    expect(component.label).toEqual('change label click to btn1');
  });
  it('check event binding btn2', () => {
    const btn: HTMLButtonElement = debElem.nativeElement.querySelector('#btn2');
    btn.click();
    fixture.detectChanges();
    expect(component.label).toEqual('change label click to btn2');
  });
  it('check event binding input change', () => {
    const input: HTMLInputElement =
      debElem.nativeElement.querySelector('#changeInput');
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.label).toEqual('change label input changed');
  });
  it('check event binding input change value', () => {
    const input: HTMLInputElement =
      debElem.nativeElement.querySelector('#chngInt');
    input.value = 'hello';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.label).toEqual('hello');
  });
  it('check ngclass', () => {
    const header: HTMLElement = debElem.nativeElement.querySelector('#header');
    expect(header.getAttribute('class')).toBe('font-blue');
    // component.num=5;
    // fixture.detectChanges();
    // expect(header.getAttribute('class')).toBe('font-red')
  });
  it('check ngStyle', () => {
    const chkStyle: HTMLElement =
      debElem.nativeElement.querySelector('#styleChk');
    expect(chkStyle.getAttribute('style')).toBe('color: black;');
    component.num = 5;
    fixture.detectChanges();
    expect(chkStyle.getAttribute('style')).toBe('color: yellow;');
  });
  //  it('check twoway binding async', async(() => {
  //   component.username="hello input test"
  //   fixture.detectChanges();
  //   fixture.whenStable().then(()=>{
  //     const input:HTMLInputElement=debElem.nativeElement.querySelector('#name')
  //     expect(input.value).toBe("hello input test")
  //   })
  //  }));
  //  it('check twoway binding with setname method async', async(() => {
  //   const btn:HTMLButtonElement=debElem.nativeElement.querySelector('#usernm')
  //   fixture.detectChanges();
  //   fixture.whenStable().then(()=>{
  //     btn.click();
  //     expect(component.username).toBe("hi angular coder")
  //   })
  //   fixture.whenStable().then(()=>{
  //     const input:HTMLInputElement=debElem.nativeElement.querySelector('#name')
  //     expect(input.value).toBe("hi angular coder")
  //   })
  //  }));
  it('check twoway binding fakeasync', fakeAsync(() => {
    component.username = 'hello input test';
    fixture.detectChanges();
    tick();
    const input: HTMLInputElement =
      debElem.nativeElement.querySelector('#name');
    expect(input.value).toBe('hello input test');
  }));
  it('check twoway binding with setname method fakeasync', fakeAsync(() => {
    const btn: HTMLButtonElement =
      debElem.nativeElement.querySelector('#usernm');
    fixture.detectChanges();
    tick();
    btn.click();
    expect(component.username).toBe('hi angular coder');
  }));
  it('check ngif if num is less than 20', () => {
    const div: HTMLDivElement = debElem.nativeElement.querySelector('#div1');
    const div1: HTMLDivElement = debElem.nativeElement.querySelector('#div2');
    expect(div).toBeNull();
    expect(div1).not.toBeNull();
    //expect(div.innerHTML).toBe("Number is less than 20")
  });
  it('check ngif if num is greater than 20', () => {
    component.num = 21;
    fixture.detectChanges();
    const div: HTMLDivElement = debElem.nativeElement.querySelector('#div1');
    const div1: HTMLDivElement = debElem.nativeElement.querySelector('#div2');
    expect(div1).toBeNull();
    expect(div).not.toBeNull();
  });
  it('check ngif if num is less than 20 using ng-Template', () => {
    const trueTemp: HTMLHeadingElement =
      debElem.nativeElement.querySelector('#ng1');
    const falseTemp: HTMLHeadingElement =
      debElem.nativeElement.querySelector('#ng2');
    expect(falseTemp).toBeNull();
    expect(trueTemp).not.toBeNull();
  });
  it('check ngif if num is greater than 20 using ng-Template', () => {
    component.num = 21;
    fixture.detectChanges();
    const trueTemp: HTMLHeadingElement =
      debElem.nativeElement.querySelector('#ng1');
    const falseTemp: HTMLHeadingElement =
      debElem.nativeElement.querySelector('#ng2');
    expect(trueTemp).toBeNull();
    expect(falseTemp).not.toBeNull();
  });
  it('check ngSwitch', () => {
    const div: HTMLDivElement = debElem.nativeElement.querySelector('#switch');
    //console.log(div.childElementCount, div.children.length ,div.children[0].innerHTML)
    expect(div.childElementCount).toEqual(1);
    expect(div.children[0].innerHTML).toEqual('One is selected');
  });
  it('check ngSwitch two', () => {
    const div: HTMLDivElement = debElem.nativeElement.querySelector('#switch');
    component.selectMed = 'two';
    fixture.detectChanges();
    expect(div.childElementCount).toEqual(1);
    expect(div.children[0].innerHTML).toEqual('Two is selected');
  });
  it('check ngfor array list', () => {
    const arr: DebugElement[] = debElem.queryAll(By.css('#colorListName'));
    expect(arr.length).toEqual(3);
    arr.forEach((obj: DebugElement, index: number) => {
      console.log(
        obj.children[0].nativeElement.innerHTML.trim(),
        component.colorList[index]
      );
      expect(obj.children[0].nativeElement.innerHTML.trim()).toEqual(
        component.colorList[index]
      );
    });
  });
  it('check ngfor array of object list', () => {
    const arr: DebugElement[] = debElem.queryAll(By.css('#userListName'));
    expect(arr.length).toEqual(3);
    arr.forEach((obj: DebugElement, index: number) => {
      console.log(
        obj.children[0].nativeElement.innerHTML.trim(),
        component.userList[index].name
      );
      expect(obj.children[0].nativeElement.innerHTML.trim()).toEqual(
        component.userList[index].id + '- ' + component.userList[index].name
      );
    });
  });
  it('check pipe uppercase', () => {
    expect(uppercase.transform(component.title)).toEqual('ANGTEST');
  });
  it('check pipe lowercase', () => {
    expect(lowercase.transform(component.title)).toEqual('angtest');
  });
  it('check pipe filesize', () => {
    expect(filesize.transform(component.size)).toEqual('file size is - 20.23 MB');
  });
  it('check pipe filesize GB', () => {
    expect(filesize.transform(component.size, "GB")).toEqual('file size is - 20.23 GB');
  });
  it('check recieved data', () => {
    component.recieved("hi parent");
    expect(component.recievedData).toEqual("hi parent")
  });
  it('check getdatalist subscribe', fakeAsync(() => {
    const spy=spyOn(service,"getData").and.returnValue(of([]))
    const stubspy=spyOn(service.getData(),'subscribe');
    component.ngOnInit();
    tick();
    expect(spy).toHaveBeenCalledBefore(stubspy)
    expect(stubspy).toHaveBeenCalled();
  }));
  it('check getdatalist subscribe', fakeAsync(() => {
    const spy=spyOn(service,"getData").and.returnValue(of([]))
    const stubspy=spyOn(service.getData(),'subscribe');
    component.ngOnInit();
    tick();
    expect(spy).toHaveBeenCalledBefore(stubspy)
    expect(stubspy).toHaveBeenCalled();
  }));
  it('check getdatalist somedata subscribe successfully', fakeAsync(() => {
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
    const spy=spyOn(service,"getData").and.returnValue(of(testdata))
    component.ngOnInit();
    tick();
    expect(component.posts).toBeDefined();
    expect(component.posts.length).toBe(2)
  }));
  it('check getdatalist somedata subscribe error', fakeAsync(() => {
   const error="something went wrong"
    const spy=spyOn(service,"getData").and.returnValue(throwError(error))
    component.ngOnInit();
    tick();
    expect(error).toBe("something went wrong");
  }));
  it('check createspy', fakeAsync(() => {
    expect(createObj).toBeDefined();
    expect(createObj).toHaveBeenCalled();
    expect(createObj.calls.count()).toEqual(1);
   }));

   it('check createobjspy', fakeAsync(() => {
    expect(createObjects).toBeDefined();
    expect(createObjects.add).toHaveBeenCalled();
    expect(createObjects.add.calls.count()).toEqual(1);
    expect(createObjects.sub).toHaveBeenCalled();
    expect(createObjects.sub.calls.count()).toEqual(1);
   }));

  //  it('check template driven name is invalid', async(() => {
  //   const name=component.login.form.controls['firstname'];
  //   fixture.whenStable().then(()=>{
  //     expect(name.invalid).toBeTruthy();
  //     expect(name.touched).toBeFalse();
  //   })
  //  }));
  //  it('check template driven name is valid', async(() => {
  //   fixture.whenStable().then(()=>{
  //     const name=component.login.form.controls['firstname'].setValue("hello");
  //     fixture.detectChanges();
  //     expect(name.valid).toBeTruthy();
  //     expect(name.value).toBe("hello");
  //   })
  //  }));

   it('check template driven name submithandle', async(() => {
    fixture.whenStable().then(()=>{
      const name=component.login.form.controls['firstname'].setValue("hello");
      const pswrd=component.login.form.controls['password'].setValue("hello123");
      fixture.detectChanges();
      component.user=component.login.value
     expect(component.user).toEqual({firstname: "hello", password: "hello123"})
    })
    component.submitHandle();
   }));
  // it('check reactive form name is invalid', async(() => {
  //   const name=component.signupForm.controls['first'];
  //   fixture.whenStable().then(()=>{
  //     expect(name.invalid).toBeTruthy();
  //     expect(name.touched).toBeFalse();
  //   })
  //  }));
   it('check reactive form submitReactive', async(() => {
    fixture.whenStable().then(()=>{
      const name=component.signupForm.controls['first'].setValue("hello");
      const pswrd=component.signupForm.controls['paswrd'].setValue("hello123");
      //fixture.detectChanges();
    //   component.user=component.login.value
    //  expect(component.user).toEqual({firstname: "hello", password: "hello123"})
    })
    component.submitReactive();
   }));
  // it('check call in savestudent', () => {
  //   spyOn(component, 'calc');
  //   component.saveStudent();
  //   expect(component.calc).toHaveBeenCalled();
  // });
});
