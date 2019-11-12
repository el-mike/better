import {
  Injectable,
  Inject,
} from '@angular/core';

import {
  HttpClient,
} from '@angular/common/http';

import {
  ENVIRONMENT,
  Environment,
} from '@app/common';

import {
  ApiService,
} from './api.service';

interface PullingResponse {
  ok: number;
}

@Injectable({
  providedIn: 'root'
})
export class BetsSocketControlsService extends ApiService {

  constructor(
    private readonly http: HttpClient,
    @Inject(ENVIRONMENT) readonly env: Environment,
  ) {
    super(`${env.apiUrl}/pulling`);
  }

  public startPulling(rate: number) {
    return this.http.get<PullingResponse>(
      `${this.apiUrl}/start?rate=${rate}`
    );
  }

  public stopPulling() {
    return this.http.get<PullingResponse>(
      `${this.apiUrl}/stop`,
    );
  }
}
