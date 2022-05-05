import { TestBed } from '@angular/core/testing';

import { PractService } from './pract.service';

describe('PractService', () => {
  let service: PractService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PractService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
