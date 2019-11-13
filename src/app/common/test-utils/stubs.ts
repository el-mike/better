import {
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
