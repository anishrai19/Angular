import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnaceOperatorComponent } from './furnace-operator.component';

describe('FurnaceOperatorComponent', () => {
  let component: FurnaceOperatorComponent;
  let fixture: ComponentFixture<FurnaceOperatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FurnaceOperatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnaceOperatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
