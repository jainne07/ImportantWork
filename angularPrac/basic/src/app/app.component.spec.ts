import {
  async,
  ComponentFixture,
  TestBed
} from '@angular/core/testing';

import { AppComponent } from "./app.component";
import { RouterTestingModule } from "@angular/router/testing";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  }));

  test('namechild should be angular', () => {
    expect(component.nameChild).toEqual('Angular Call');
  });
  test('has route called', () => {
    const rout: string = 'null';
    expect(component.hasRoute(rout)).toBeCalled;
  });
});
