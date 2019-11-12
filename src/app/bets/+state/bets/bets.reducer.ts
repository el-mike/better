import {
  Action,
  createReducer,
  on,
} from '@ngrx/store';

import {
  EntityState,
  EntityAdapter,
  createEntityAdapter,
} from '@ngrx/entity';

import {
  Bet,
} from '@app/common';

import * as BetsActions from './bets.actions';

export interface BetsState extends EntityState<Bet> {
  generated: boolean;
}

export const adapter: EntityAdapter<Bet> = createEntityAdapter<Bet>();

export const initialState: BetsState = adapter.getInitialState({
  generated: false,
});

const betsReducer = createReducer(
  initialState,
  on(BetsActions.generateBetsSuccess, (state, { bets }) => {
    return adapter.addAll(bets, { ...state, generated: true});
  }),

  on(BetsActions.getBetsSuccess, (state, { bets }) => {
    return adapter.addAll(bets, { ...state, generated: true});
  }),

  on(BetsActions.updateBets, (state, { bets }) => {
    return adapter.updateMany(bets, state);
  }),
);

export function reducer(state: BetsState | undefined, action: Action) {
  return betsReducer(state, action);
}

const {
  selectEntities,
  selectAll,
} = adapter.getSelectors();

export const selectBetEntities = selectEntities;
export const selectAllBets = selectAll;
