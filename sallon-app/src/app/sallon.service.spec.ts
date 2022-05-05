import { TestBed } from '@angular/core/testing';

import { SallonService } from './sallon.service';

describe('SallonService', () => {
  let service: SallonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SallonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
