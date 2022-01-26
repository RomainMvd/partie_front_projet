import { TestBed } from '@angular/core/testing';

import { PresentielService } from './presentiel.service';

describe('PresentielService', () => {
  let service: PresentielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresentielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
