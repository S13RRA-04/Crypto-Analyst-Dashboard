import { TestBed } from '@angular/core/testing';

import { DuneService } from './dune.service';

describe('DuneService', () => {
  let service: DuneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DuneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
