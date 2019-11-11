import {
  InjectionToken,
} from '@angular/core';

import {
  LanguagesConfig,
} from '../models';

export const LANGUAGES_CONFIG = new InjectionToken<LanguagesConfig>('languagesConfig');
