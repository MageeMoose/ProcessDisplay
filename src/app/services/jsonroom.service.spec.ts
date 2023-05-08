import { TestBed } from '@angular/core/testing';

import { JsonroomService } from './jsonroom.service';

describe('JsonroomService', () => {
  let service: JsonroomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonroomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
