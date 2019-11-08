import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  BetsRoutingModule,
} from './bets-routing.module';

import {
  BetsComponent,
} from './containers/bets/bets.component';

const components = [
  BetsComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    BetsRoutingModule
  ]
})
export class BetsModule { }
