import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

import {
  Bet,
} from '@app/common';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BetComponent implements OnInit {
  @Input() public bet: Bet;

  public get homeTeam() {
    return this.bet.teams[0];
  }

  public get awayTeam() {
    return this.bet.teams[1];
  }

  ngOnInit() {
  }

}
