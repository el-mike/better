import {
  NgModule,
} from '@angular/core';

import {
  CommonModule,
} from '@angular/common';

import {
  TranslateModule,
} from '@ngx-translate/core';

import { FlatPickerComponent } from './components/flat-picker/flat-picker.component';



@NgModule({
  declarations: [
    FlatPickerComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
  ],
  exports: [
    FlatPickerComponent,
  ]
})
export class SharedModule { }
