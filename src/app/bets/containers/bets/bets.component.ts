import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'app-bets',
  templateUrl: './bets.component.html',
  styleUrls: ['./bets.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BetsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
