import { TestBed } from '@angular/core/testing';

import { ServicelibService } from './servicelib.service';

describe('ServicelibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicelibService = TestBed.get(ServicelibService);
    expect(service).toBeTruthy();
  });
});
