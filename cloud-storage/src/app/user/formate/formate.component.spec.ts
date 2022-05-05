import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateComponent } from './formate.component';

describe('FormateComponent', () => {
  let component: FormateComponent;
  let fixture: ComponentFixture<FormateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
