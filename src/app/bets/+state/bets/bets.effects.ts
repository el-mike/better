import { Injectable } from '@angular/core';

import {
  Actions,
  createEffect,
  ofType,
} from '@ngrx/effects';

import { EMPTY } from 'rxjs';

import {
  map,
  mergeMap,
  switchMap,
  catchError,
} from 'rxjs/operators';

import {
  Bet,
  SocketEvent,
  getBetEntityUpdate,
} from '@app/common';

import {
  BetService,
  BetsGeneratorService,
  BetsSocketControlsService,
  SocketService,
} from '@app/core';

import {
  generateBets,
  generateBetsSuccess,
  getBets,
  getBetsSuccess,
  startBetsPulling,
  stopBetsPulling,
  updateBets,
} from './bets.actions';

@Injectable()
export class BetsEffects {
  initBetsSocket$ = createEffect(() => this.socketService.getByEvent<Bet[]>(SocketEvent.BET_UPDATED).pipe(
    map(bets => bets.map(getBetEntityUpdate)),
    map(bets => updateBets({ bets })),
  ));

  get$ = createEffect(() => this.actions$.pipe(
    ofType(getBets),
    mergeMap(() => this.betService.getBets()
      .pipe(
        map(bets => getBetsSuccess({ bets })),
        catchError(() => EMPTY)
      ))
    )
  );

  generateBets$ = createEffect(() => this.actions$.pipe(
    ofType(generateBets),
    mergeMap(action => this.betsGeneratorService.generateBets(action.size)
      .pipe(
        map(bets => generateBetsSuccess({ bets })),
        catchError(() => EMPTY)
      ))
    )
  );

  startBetsPulling$ = createEffect(() => this.actions$.pipe(
    ofType(startBetsPulling),
    switchMap(action => this.betsSocketControlsService.startPulling(action.rate)),
    ),
    { dispatch: false },
  );

  stopBetsPulling$ = createEffect(() => this.actions$.pipe(
    ofType(stopBetsPulling),
    switchMap(() => this.betsSocketControlsService.stopPulling()),
    ),
    { dispatch: false },
  );

  constructor(
    private readonly actions$: Actions,
    private readonly betService: BetService,
    private readonly betsGeneratorService: BetsGeneratorService,
    private readonly betsSocketControlsService: BetsSocketControlsService,
    private readonly socketService: SocketService,
  ) {}
}
