import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  Component,
} from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store, MemoizedSelector } from '@ngrx/store';

import {
  TranslateService,
} from '@ngx-translate/core';

import {
  TranslatePipeStub,
  TranslateServiceStub,
  FixtureHelper,
  createFixtureHelper,
  LanguageConfig,
  ThemeConfig,
} from '@app/common';

import * as fromState from '../../+state';

import { ShellComponent } from './shell.component';

@Component({
  selector: 'app-header',
  template: '<div></div>',
})
class HeaderStubComponent {}

@Component({
  selector: 'app-footer',
  template: '<div></div>',
})
class FooterStubComponent {}

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  let fixtureHelper: FixtureHelper;

  let mockStore: MockStore<fromState.AppState>;
  let mockGetLanguageConfig: MemoizedSelector<fromState.AppState, LanguageConfig>;
  let mockGetThemeConfig: MemoizedSelector<fromState.AppState, ThemeConfig>;

  let mockTranslateService: TranslateServiceStub;
  let setDefaultLangSpy: jest.SpyInstance;
  let useSpy: jest.SpyInstance;

  const initialState = {
    base: {},
  };

  const mockLanguage = 'en';
  const mockThemeClass = 'mock-theme';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TranslatePipeStub,
        HeaderStubComponent,
        FooterStubComponent,
        ShellComponent,
      ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceStub },
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;

    fixtureHelper = createFixtureHelper(fixture);

    mockStore = TestBed.get(Store);
    mockTranslateService = TestBed.get(TranslateService);

    mockGetLanguageConfig = mockStore.overrideSelector(fromState.getLanguageConfig, { name: mockLanguage } as any);
    mockGetThemeConfig = mockStore.overrideSelector(fromState.getThemeConfig, { class: mockThemeClass } as any);

    setDefaultLangSpy = jest.spyOn(mockTranslateService, 'setDefaultLang');
    useSpy = jest.spyOn(mockTranslateService, 'use');

    fixture.detectChanges();
  });

  test('component is created properly', () => {
    expect(component).toBeTruthy();
  });

  test('setDefaultLang is called', () => {
    expect(setDefaultLangSpy).toHaveBeenCalled();
  });

  test('correct theme is set', () => {
    const mockThemeClass2 = 'mock-theme-darl';

    expect(fixtureHelper.getByCss('.theme').classes[mockThemeClass]).toBeTruthy();

    mockGetThemeConfig.setResult({ class: mockThemeClass2 } as any);
    mockStore.refreshState();
    fixture.detectChanges();

    expect(fixtureHelper.getByCss('.theme').classes[mockThemeClass]).toBeFalsy();
    expect(fixtureHelper.getByCss('.theme').classes[mockThemeClass2]).toBeTruthy();
  });

  test('correct language is set', () => {
    const mockLanguage2 = 'pl';

    expect(useSpy).toHaveBeenCalledWith(mockLanguage);

    mockGetLanguageConfig.setResult({ name: mockLanguage2 } as any);
    mockStore.refreshState();
    fixture.detectChanges();

    expect(useSpy).toHaveBeenCalledWith(mockLanguage2);
  });
});
