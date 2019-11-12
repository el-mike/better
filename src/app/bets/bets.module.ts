import {
  NgModule,
} from '@angular/core';

import {
  CommonModule,
} from '@angular/common';

import {
  StoreModule,
} from '@ngrx/store';

import {
  EffectsModule,
} from '@ngrx/effects';

import {
  TranslateModule,
} from '@ngx-translate/core';

import {
  betsReducers,
  effects,
  betsFeatureStateKey,
} from './+state';

import {
  BetsRoutingModule,
} from './bets-routing.module';

import {
  BetsComponent,
} from './containers/bets/bets.component';
import { BetComponent } from './components/bet/bet.component';

const components = [
  BetsComponent,
];

@NgModule({
  declarations: [
    ...components,
    BetComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    StoreModule.forFeature(betsFeatureStateKey, betsReducers),
    EffectsModule.forFeature(effects),
    BetsRoutingModule,
  ]
})
export class BetsModule { }
