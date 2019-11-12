import {
  Injectable,
  Inject,
} from '@angular/core';

import {
  HttpClient,
} from '@angular/common/http';

import {
  Bet,
  ENVIRONMENT,
  Environment,
} from '@app/common';

import {
  ApiService,
} from './api.service';

@Injectable({
  providedIn: 'root'
})
export class BetService extends ApiService {
  constructor(
    private readonly http: HttpClient,
    @Inject(ENVIRONMENT) readonly env: Environment,
  ) {
    super(`${env.apiUrl}/bets`);
  }

  public getBets() {
    return this.http.get<Bet[]>(
      this.apiUrl,
    );
  }

  public getBet(id: number) {
    return this.http.get<Bet>(
      `${this.apiUrl}/${id}`
    );
  }
}
