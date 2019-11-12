import {
  Injectable,
  Inject,
} from '@angular/core';

import {
  HttpClient,
} from '@angular/common/http';

import {
  map,
} from 'rxjs/operators';

import {
  Bet,
  ENVIRONMENT,
  Environment,
} from '@app/common';

import {
  ApiService,
} from './api.service';

interface GenerateBetsResponse {
  ok: number;
  bets: Bet[];
}

@Injectable({
  providedIn: 'root'
})
export class BetsGeneratorService extends ApiService {
  constructor(
    private readonly http: HttpClient,
    @Inject(ENVIRONMENT) readonly env: Environment,
  ) {
    super(`${env.apiUrl}/bets-generate`);
  }

  public generateBets(size: number) {
    return this.http.get<GenerateBetsResponse>(
      `${this.apiUrl}?size=${size}`
    ).pipe(
      map(response => response.bets),
    );
  }
}
