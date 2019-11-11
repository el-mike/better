import {
  InjectionToken,
} from '@angular/core';

import {
  ThemesConfig,
} from '../models';

export const THEMES_CONFIG = new InjectionToken<ThemesConfig>('themesConfig');
