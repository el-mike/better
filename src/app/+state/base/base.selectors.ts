import { createSelector } from '@ngrx/store';

import {
  themesConfig,
  languagesConfig,
} from '@app/configs';

import { getBaseState } from '../reducers';

import { BaseState } from './base.reducer';

export const getTheme = createSelector(
  getBaseState,
  (state: BaseState) => state.theme,
);

export const getLanguage = createSelector(
  getBaseState,
  (state: BaseState) => state.language,
);

export const getThemeConfig = createSelector(
  getTheme,
  theme => themesConfig[theme],
);

export const getLanguageConfig = createSelector(
  getLanguage,
  language => languagesConfig[language],
);
