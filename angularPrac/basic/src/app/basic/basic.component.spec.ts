import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { BasicComponent } from './basic.component';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { FormsModule } from '@angular/forms';

describe('Component: Basic', () => {

  let component: BasicComponent;
  let fixture: ComponentFixture<BasicComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BasicComponent
      ],
      imports: [
        FormsModule
      ],
    }).compileComponents()
    fixture = TestBed.createComponent(BasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('title should be created', () => {
    expect(component.title).toEqual('Angular practice');
  });

  it('Should show welcome tsxt after click', () => {
    const btn = el.query(By.css('#greet'));
    const wel = el.query(By.css('#welc'));
    -  btn.triggerEventHandler('click', {});
    fixture.detectChanges();
    expect(wel.nativeElement.textContent).toBe('Welcome to angular event handling');
  })
  it('should display false toggle', () => {
    component.dispNm = false;
    component.dispTog();
    expect(component.dispNm).toBe(true);
  });

  it('should display true toggle', () => {
    component.dispNm = true;
    component.dispTog();
    expect(component.dispNm).toBe(false);
  });
}); 
