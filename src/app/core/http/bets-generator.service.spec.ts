import { TestBed } from '@angular/core/testing';

import { BetsGeneratorService } from './bets-generator.service';

describe('BetsGeneratorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BetsGeneratorService = TestBed.get(BetsGeneratorService);
    expect(service).toBeTruthy();
  });
});
