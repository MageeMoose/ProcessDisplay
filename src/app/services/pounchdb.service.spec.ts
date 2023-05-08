import { TestBed } from '@angular/core/testing';

import { PounchdbService } from './pounchdb.service';

describe('PounchdbService', () => {
  let service: PounchdbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PounchdbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
