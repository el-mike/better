import {
  ActionReducerMap,
  createFeatureSelector,
} from '@ngrx/store';

import * as fromBaseReducer from './base/base.reducer';

const baseStateKey = 'base';

export interface AppState {
  [baseStateKey]: fromBaseReducer.BaseState;
}

export const appReducers: ActionReducerMap<AppState> = {
  base: fromBaseReducer.reducer,
};

export const getBaseState = createFeatureSelector<AppState, fromBaseReducer.BaseState>(baseStateKey);
