import { DebugElement } from '@angular/core';

import { ComponentFixture } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { Type } from '../models';

export interface FixtureHelper {
  getByDirective: <T>(type: Type<T>) => DebugElement;
  getAllByDirective: <T>(type: Type<T>) => DebugElement[];
  getByCss: (selector: string) => DebugElement;
  getAllByCss: (selector: string) => DebugElement[];
  clickByCss: (selector: string) => void;
}

export const createFixtureHelper = <T>(fixture: ComponentFixture<T>): FixtureHelper => {
  return {
    getByDirective: type => fixture.debugElement.query(By.directive(type)),
    getAllByDirective: type => fixture.debugElement.queryAll(By.directive(type)),
    getByCss: selector => fixture.debugElement.query(By.css(selector)),
    getAllByCss: selector => fixture.debugElement.queryAll(By.css(selector)),
    clickByCss: selector => {
      const debugElement = fixture.debugElement.query(By.css(selector));
      const el: HTMLElement = debugElement.nativeElement;

      el.click();

      fixture.detectChanges();
    },
  };
};
