import {
  InjectionToken,
} from '@angular/core';

import {
  BetsConfig,
} from '../models';

export const BETS_CONFIG = new InjectionToken<BetsConfig>('betsConfig');
