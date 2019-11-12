import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';

import {
  Store,
  select,
} from '@ngrx/store';

import {
  Observable,
} from 'rxjs';

import {
  Bet,
  BetsConfig,
  BETS_CONFIG,
} from '@app/common';

import * as fromState from '../../+state';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BetsComponent implements OnInit {
  public bets$: Observable<Bet[]>;

  constructor(
    private readonly store: Store<fromState.BetsFeatureState>,
    @Inject(BETS_CONFIG) private readonly betsConfig: BetsConfig,
  ) {}

  public ngOnInit() {
    this.bets$ = this.store.pipe(
      select(fromState.selectBets),
    );

    this.store.dispatch(fromState.getBets());
  }

  public generateBets() {
    this.store.dispatch(fromState.generateBets({ size: this.betsConfig.generateSize }));
  }

  public startPulling() {
    this.store.dispatch(fromState.startBetsPulling({ rate: this.betsConfig.pullingRate }));
  }

  public stopPulling() {
    this.store.dispatch(fromState.stopBetsPulling());
  }

  public trackByFn(bet: Bet) {
    return bet.id;
  }
}
