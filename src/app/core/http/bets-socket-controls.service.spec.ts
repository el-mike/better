import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import {
  ENVIRONMENT,
  testEnvironment,
} from '@app/common';

import { BetsSocketControlsService } from './bets-socket-controls.service';

const mockApiResponse = {
  ok: 1,
};

describe('BetsSocketControlsService', () => {
  let service: BetsSocketControlsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ENVIRONMENT, useValue: testEnvironment },
      ],
    });

    service = TestBed.get(BetsSocketControlsService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  test('service is created properly', () => {
    expect(service).toBeTruthy();
  });

  describe('#startPulling', () => {
    test('calls pulling/start endpoint with proper rate', () => {
      const testRate = 2;

      service.startPulling(testRate).subscribe(res => {
        expect(res.ok).toEqual(1);
      });

      const req = httpMock.expectOne(`${testEnvironment.apiUrl}/pulling/start?rate=${testRate}`);

      expect(req.request.method).toBe('GET');

      req.flush(mockApiResponse);
    });
  });

  describe('#stopPulling', () => {
    test('calls pulling/stop endpoint', () => {
      service.stopPulling().subscribe(res => {
        expect(res.ok).toEqual(1);
      });

      const req = httpMock.expectOne(`${testEnvironment.apiUrl}/pulling/stop`);

      expect(req.request.method).toBe('GET');

      req.flush(mockApiResponse);
    });
  });
});
