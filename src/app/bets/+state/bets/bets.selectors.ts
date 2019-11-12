import { createSelector } from '@ngrx/store';

import {
  getBetsFeatureState,
  BetsFeatureState,
} from '../reducers';

import * as fromBetsReducer from './bets.reducer';

export const getBetsState = createSelector(
  getBetsFeatureState,
  (state: BetsFeatureState) => state.bets,
);

export const selectBets = createSelector(
  getBetsState,
  fromBetsReducer.selectAllBets,
);
