import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { CheckComponent } from './check.component';
import { AppComponent } from '../app.component';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilesizePipe } from '../filesize.pipe';

describe('CheckComponent', () => {
  let component: CheckComponent;
  let fixture: ComponentFixture<CheckComponent>;
  let appcomponent: AppComponent;
  let appfixture: ComponentFixture<AppComponent>;
  let debElem: DebugElement;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckComponent, AppComponent, FilesizePipe ],
      imports: [RouterTestingModule, HttpClientModule, FormsModule, ReactiveFormsModule],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckComponent);
    component = fixture.componentInstance;
    appfixture = TestBed.createComponent(AppComponent);
    appcomponent = appfixture.componentInstance;
    debElem=appfixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('check input data bound', async(() => {
    appcomponent.parentMessage="hi child, this message comes from parent";
    appfixture.detectChanges();
    fixture.whenStable().then(()=>{
      let h1 =debElem.nativeElement.querySelector('#childElem').innerText;
      expect(h1).toEqual("hi child, this message comes from parent");
    })
  }));
  it('check output data bound', async(() => {
    fixture.detectChanges();
    appfixture.whenStable().then(()=>{
      component.outputData.subscribe(g=>{
        expect(g).toEqual("hi parent")
      })
      component.sendData();
    })
  }));
});
