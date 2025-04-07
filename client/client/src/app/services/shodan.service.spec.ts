import { TestBed } from '@angular/core/testing';

import { ShodanService } from './shodan.service';

describe('ShodanService', () => {
  let service: ShodanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShodanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
