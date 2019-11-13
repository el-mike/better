import {
  Bet,
  BetsConfig,
  Environment,
} from '../models';

export const testBets: Bet[] = [
  {
    id: 0,
    draw: 2.14,
    teams: [
      {
        name: 'team1',
        win: 1.67,
      },
      {
        name: 'team2',
        win: 3.73,
      }
    ],
  },
  {
    id: 1,
    draw: 0.12,
    teams: [
      {
        name: 'team1',
        win: 5.84,
      },
      {
        name: 'team2',
        win: 3.75,
      }
    ],
  },
  {
    id: 2,
    draw: 8.38,
    teams: [
      {
        name: 'team1',
        win: 2.11,
      },
      {
        name: 'team2',
        win: 5.39,
      }
    ],
  },
];

export const testBetsConfig: BetsConfig = {
  pullingRate: 1,
  generateSize: 3,
};

export const testEnvironment: Environment = {
  production: false,
  apiUrl: 'testApiUrl',
  socketUrl: 'testSocketUrl',
};
