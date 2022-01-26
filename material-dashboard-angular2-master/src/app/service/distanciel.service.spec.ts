import { TestBed } from '@angular/core/testing';

import { DistancielService } from './distanciel.service';

describe('DistancielService', () => {
  let service: DistancielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DistancielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
