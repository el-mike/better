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

import { BetService } from './bet.service';

describe('BetService', () => {
  let service: BetService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        { provide: ENVIRONMENT, useValue: testEnvironment },
      ],
    });

    service = TestBed.get(BetService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  test('service is created properly', () => {
    expect(service).toBeTruthy();
  });

  describe('#getBets', () => {
    test('calls for bets collection', () => {
      service.getBets().subscribe(bets => {
        expect(bets.length).toEqual(testBets.length);
      });

      const req = httpMock.expectOne(`${testEnvironment.apiUrl}/bets`);

      expect(req.request.method).toBe('GET');

      req.flush(testBets);
    });
  });

  describe('#getBet', () => {
    test('calls for single bet', () => {
      const testBet = testBets[0];

      service.getBet(testBet.id).subscribe(bet => {
        expect(bet.id).toEqual(testBet.id);
        expect(bet.draw).toEqual(testBet.draw);
        expect(bet.teams.length).toEqual(testBet.teams.length);
      });

      const req = httpMock.expectOne(`${testEnvironment.apiUrl}/bets/${testBet.id}`);

      expect(req.request.method).toBe('GET');

      req.flush(testBet);
    });
  });
});
