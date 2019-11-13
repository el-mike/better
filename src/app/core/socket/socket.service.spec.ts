import { TestBed } from '@angular/core/testing';

import {
  ENVIRONMENT,
  testEnvironment,
} from '@app/common';


import { SocketService } from './socket.service';

describe('SocketService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: ENVIRONMENT, useValue: testEnvironment },
    ],
  }));

  it('should be created', () => {
    const service: SocketService = TestBed.get(SocketService);
    expect(service).toBeTruthy();
  });
});
