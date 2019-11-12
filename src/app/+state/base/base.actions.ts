import {
  createAction,
  props,
} from '@ngrx/store';

import {
  Theme,
  Language,
} from '@app/common';

export const selectTheme = createAction(
  '[Base] Select Theme',
  props<{ theme: Theme }>()
);

export const selectLanguage = createAction(
  '[Base] Select Language',
  props<{ language: Language }>(),
);
