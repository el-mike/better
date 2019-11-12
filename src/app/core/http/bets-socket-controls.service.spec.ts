import { TestBed } from '@angular/core/testing';

import { BetsSocketControlsService } from './bets-socket-controls.service';

describe('BetsSocketControlsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BetsSocketControlsService = TestBed.get(BetsSocketControlsService);
    expect(service).toBeTruthy();
  });
});
