import { TestBed } from '@angular/core/testing';

import { Challanservice } from './challanservice';

describe('Challanservice', () => {
  let service: Challanservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Challanservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
