import { TestBed } from '@angular/core/testing';

import { TemphumService } from './temphum.service';

describe('TemphumService', () => {
  let service: TemphumService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemphumService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
