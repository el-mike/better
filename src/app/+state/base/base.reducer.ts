import {
  Action,
  createReducer,
  on,
} from '@ngrx/store';

import {
  Theme,
  Language,
} from '@app/common';

import * as AppActions from './base.actions';

export interface BaseState {
  theme: Theme;
  language: Language;
}

export const initialState: BaseState = {
  theme: Theme.DARK,
  language: Language.EN,
};

const baseReducer = createReducer(
  initialState,
  on(AppActions.selectTheme, (state, { theme }) => ({ ...state, theme })),
  on(AppActions.selectLanguage, (state, {language }) => ({ ...state, language })),
);

export function reducer(state: BaseState | undefined, action: Action) {
  return baseReducer(state, action);
}
