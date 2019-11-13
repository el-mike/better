import {
  Update,
} from '@ngrx/entity';

import {
  Bet,
  Team,
} from '@app/common';

import {
  getBetEntityUpdate,
} from './bet-entity-update';

describe('getBetEntityUpdate', () => {
  const testBet: Bet = {
    id: 1,
    teams: [
      { name: 'team1', win: 2 },
      { name: 'tesm2', win: 1 },
    ],
    draw: 3,
  };

  test('the Update model id is correct', () => {
    const updateModel: Update<Bet> = getBetEntityUpdate(testBet);

    expect(updateModel.id).toEqual(testBet.id);
  });

  test('the Update model changes are correct', () => {
    const updateModel: Update<Bet> = getBetEntityUpdate(testBet);
    const updateChanges = updateModel.changes;

    expect(updateChanges.draw).toEqual(testBet.draw);

    expect(updateChanges.teams[0].name).toEqual(testBet.teams[0].name);
    expect(updateChanges.teams[0].win).toEqual(testBet.teams[0].win);

    expect(updateChanges.teams[1].name).toEqual(testBet.teams[1].name);
    expect(updateChanges.teams[1].name).toEqual(testBet.teams[1].name);
  });
});
