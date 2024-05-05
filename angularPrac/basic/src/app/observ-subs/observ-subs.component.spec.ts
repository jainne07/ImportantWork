import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservSubsComponent } from './observ-subs.component';

describe('ObservSubsComponent', () => {
  let component: ObservSubsComponent;
  let fixture: ComponentFixture<ObservSubsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservSubsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
