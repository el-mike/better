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
  TranslateModule,
} from '@ngx-translate/core';

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
    ThemeSwitcherComponent,
    LanguagePickerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule,
    SharedModule,
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
