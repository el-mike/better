import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule,
} from '@angular/router';

import {
  BetsComponent,
} from './containers';

const routes: Routes = [
  {
    path: '',
    component: BetsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BetsRoutingModule {}
