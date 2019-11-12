import {
  Entity,
} from './entity.model';

import {
  Team,
} from './team.model';

export interface Bet extends Entity {
  teams: Team[];
  draw: number;
}
