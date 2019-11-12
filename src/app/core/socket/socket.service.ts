import {
  Injectable,
  Inject,
} from '@angular/core';

import {
  Socket,
} from 'ngx-socket-io';

import {
  shareReplay,
} from 'rxjs/operators';

import {
  ENVIRONMENT,
  Environment,
  SocketEvent,
} from '@app/common';


@Injectable({
  providedIn: 'root'
})
export class SocketService extends Socket {
  constructor(
    @Inject(ENVIRONMENT) readonly env: Environment,
  ) {
    super({
      url: env.socketUrl,
      options: {},
    });
  }

  public getByEvent<T>(event: SocketEvent) {
    return this
      .fromEvent<T>(event)
      .pipe(
        shareReplay(1),
      );
  }
}
