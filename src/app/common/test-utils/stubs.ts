import {
  NgModule,
  Component,
  Pipe,
  PipeTransform,
} from '@angular/core';

@Pipe({
  name: 'translate',
})
export class TranslatePipeStub implements PipeTransform {
  public transform(value: any) {
    return value;
  }
}

export class TranslateServiceStub {
  public setDefaultLang() {}
  public use() {}
}

/**
 * This is required for AoT, as compiler will complain
 * that stub Pipes/Components/Directives are not part of any module.
 */
@NgModule({
  declarations: [
    TranslatePipeStub,
  ],
})
export class StubsModule {}
