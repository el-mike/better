import { NgModule } from '@angular/core';

import {
  Routes,
  RouterModule,
} from '@angular/router';

import {
  ShellComponent,
} from './core';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/bets',
  },
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/bets',
      },
      {
        path: 'bets',
        loadChildren: () => import('src/app/bets/bets.module').then(module => module.BetsModule),
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
