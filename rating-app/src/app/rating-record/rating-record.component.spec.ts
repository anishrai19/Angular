import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingRecordComponent } from './rating-record.component';

describe('RatingRecordComponent', () => {
  let component: RatingRecordComponent;
  let fixture: ComponentFixture<RatingRecordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingRecordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
