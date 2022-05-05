import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComponentDemoComponent } from './new-component-demo.component';

describe('NewComponentDemoComponent', () => {
  let component: NewComponentDemoComponent;
  let fixture: ComponentFixture<NewComponentDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewComponentDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewComponentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
