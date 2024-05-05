import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildNewComponent } from './child-new.component';

describe('ChildNewComponent', () => {
  let component: ChildNewComponent;
  let fixture: ComponentFixture<ChildNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
