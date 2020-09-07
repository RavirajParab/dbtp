import { TestBed } from '@angular/core/testing';

import { DptpUtilityService } from './dptp-utility.service';

describe('DptpUtilityService', () => {
  let service: DptpUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DptpUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
