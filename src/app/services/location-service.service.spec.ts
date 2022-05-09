import { TestBed } from '@angular/core/testing';

import { LocationServiceService } from './dataCityCareServices';

describe('LocationServiceService', () => {
  let service: LocationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
