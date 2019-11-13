import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import {
  ENVIRONMENT,
  testEnvironment,
  testBets,
} from '@app/common';

import { BetsGeneratorService } from './bets-generator.service';

describe('BetsGeneratorService', () => {
  let service: BetsGeneratorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ENVIRONMENT, useValue: testEnvironment },
      ],
    });

    service = TestBed.get(BetsGeneratorService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#generateBets', () => {
    test('calls bets-generate endpoint with proper size, and properly maps response', () => {
      const testSize = 10;

      service.generateBets(testSize).subscribe(bets => {
        expect(bets.length).toEqual(testBets.length);
        expect(bets[0].id).toEqual(testBets[0].id);
      });

      const req = httpMock.expectOne(`${testEnvironment.apiUrl}/bets-generate?size=${testSize}`);

      expect(req.request.method).toEqual('GET');

      req.flush({
        ok: 1,
        bets: testBets,
      });
    });
  });
});
