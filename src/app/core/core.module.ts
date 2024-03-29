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
  HttpClientModule,
} from '@angular/common/http';

import {
  TranslateModule,
} from '@ngx-translate/core';

import {
  SocketIoModule,
} from 'ngx-socket-io';

import {
  SharedModule,
} from '@app/shared';

import { ShellComponent } from './shell/shell.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    ShellComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    SharedModule,
    SocketIoModule,
  ],
  exports: []
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
