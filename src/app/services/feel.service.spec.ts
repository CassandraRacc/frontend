import { TestBed } from '@angular/core/testing';

import { FeelService } from './feel.service';

describe('FeelService', () => {
  let service: FeelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
