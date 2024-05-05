import { TestBed, ComponentFixture, inject, async } from '@angular/core/testing';
import { PracComponent } from './prac.component';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { UsdInrPipe } from '../usd-inr.pipe';

describe('Component: Basic', () => {

  let component: PracComponent;
  let fixture: ComponentFixture<PracComponent>;
  let el: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        PracComponent, UsdInrPipe
      ]
    }).compileComponents()
    fixture = TestBed.createComponent(PracComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 
