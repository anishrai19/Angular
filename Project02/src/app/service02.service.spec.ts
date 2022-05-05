import { TestBed } from '@angular/core/testing';

import { Service02Service } from './service02.service';

describe('Service02Service', () => {
  let service: Service02Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service02Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
