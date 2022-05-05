import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesFormateComponent } from './leaves-formate.component';

describe('LeavesFormateComponent', () => {
  let component: LeavesFormateComponent;
  let fixture: ComponentFixture<LeavesFormateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeavesFormateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeavesFormateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
