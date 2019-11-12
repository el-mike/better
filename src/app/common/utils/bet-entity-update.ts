import {
  Update,
} from '@ngrx/entity';

import {
  Bet,
} from '../models';

export const getBetEntityUpdate = (bet: Bet): Update<Bet> => ({
  id: bet.id,
  changes: {
    draw: bet.draw,
    teams: bet.teams,
  }
});
