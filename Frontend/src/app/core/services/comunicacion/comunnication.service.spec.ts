import { TestBed } from '@angular/core/testing';

import { ComunnicationService } from './comunnication.service';

describe('ComunnicationService', () => {
  let service: ComunnicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComunnicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
