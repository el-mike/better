import {
  ActionReducerMap,
  createFeatureSelector,
} from '@ngrx/store';

import * as fromBetsReducer from './bets/bets.reducer';

const betsStateKey = 'bets';

export const betsFeatureStateKey = 'betsFeature';

export interface BetsFeatureState {
  [betsStateKey]: fromBetsReducer.BetsState;
}

export const betsReducers: ActionReducerMap<BetsFeatureState> = {
  bets: fromBetsReducer.reducer,
};

export const getBetsFeatureState = createFeatureSelector<BetsFeatureState>(betsFeatureStateKey);
