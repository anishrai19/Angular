import { TestBed } from '@angular/core/testing';

import { Pract2Service } from './pract2.service';

describe('Pract2Service', () => {
  let service: Pract2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pract2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
