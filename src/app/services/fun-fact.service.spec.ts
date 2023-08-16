import { TestBed } from '@angular/core/testing';

import { FunFactService } from './fun-fact.service';

describe('FunFactService', () => {
  let service: FunFactService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FunFactService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
