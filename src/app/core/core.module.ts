import {
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';

import {
  CommonModule,
} from '@angular/common';

import {
  RouterModule
} from '@angular/router';

import {
  ShellComponent,
} from './shell/shell.component';


const components = [
  ShellComponent,
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ...components,
  ]
})
export class CoreModule {
  constructor(
    @Optional() @SkipSelf() parentModule: CoreModule,
  ) {
    /**
     * Prevents CoreModule from being imported more than one time.
     */
    if (parentModule) {
      throw new Error(
        `${parentModule} has already been loaded. Import CoreModule in the AppModule only.`
      );
    }
  }
}
