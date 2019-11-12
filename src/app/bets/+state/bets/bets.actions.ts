import {
  createAction,
  props,
} from '@ngrx/store';

import {
  Update,
} from '@ngrx/entity';

import { Bet } from '@app/common';

export const generateBets = createAction(
  '[Bets] Generate Bets',
  props<{ size: number }>(),
);

export const generateBetsSuccess = createAction(
  '[Bets] Generate Bets Success',
  props<{ bets: Bet[] }>(),
);

export const getBets = createAction(
  '[Bets] Get Bets',
);

export const getBetsSuccess = createAction(
  '[Bets] Get Bets Success',
  props<{ bets: Bet[] }>(),
);

export const initBetsSocket = createAction(
  '[Bets] Init Bets Socket',
);

export const startBetsPulling = createAction(
  '[Bets] Start Bets Pulling',
  props<{ rate: number }>(),
);

export const stopBetsPulling = createAction(
  '[Bets] Stop Bets Pulling',
);

export const updateBets = createAction(
  '[Bets] Update Bets',
  props<{ bets: Update<Bet>[] }>(),
);
