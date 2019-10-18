import { TestBed } from '@angular/core/testing';

import { LocationsDataService } from './locations-data.service';

describe('LocationsDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocationsDataService = TestBed.get(LocationsDataService);
    expect(service).toBeTruthy();
  });
});
