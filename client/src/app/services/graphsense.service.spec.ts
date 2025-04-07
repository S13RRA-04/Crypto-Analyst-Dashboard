import { TestBed } from '@angular/core/testing';

import { GraphsenseService } from './graphsense.service';

describe('GraphsenseService', () => {
  let service: GraphsenseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphsenseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
