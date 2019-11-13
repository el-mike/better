import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  Component,
  Input,
} from '@angular/core';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store, MemoizedSelector } from '@ngrx/store';

import {
  FixtureHelper,
  createFixtureHelper,
  LanguagesConfig,
  Language,
  LANGUAGES_CONFIG,
} from '@app/common';

import * as fromState from '@app/+state';

import { FooterComponent } from './footer.component';

@Component({
  selector: 'app-flat-picker',
  template: '<div></div>',
})
class FlatPickerStubComponent {
  @Input() selected: any;
  @Input() items: any;
}

const testLanguagesConfig: LanguagesConfig = {
  [Language.EN]: {
    name: Language.EN,
    label: 'en',
    currency: null,
  },
  [Language.PL]: {
    name: Language.PL,
    label: 'pl',
    currency: null,
  }
};

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  let fixtureHelper: FixtureHelper;

  let mockStore: MockStore<fromState.AppState>;
  let mockGetLanguage: MemoizedSelector<fromState.AppState, Language>;
  let dispatchSpy: jest.SpyInstance;

  const initialState = {
    base: {},
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FlatPickerStubComponent,
        FooterComponent,
      ],
      providers: [
        { provide: LANGUAGES_CONFIG, useValue: testLanguagesConfig },
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;

    fixtureHelper = createFixtureHelper(fixture);

    mockStore = TestBed.get(Store);
    dispatchSpy = jest.spyOn(mockStore, 'dispatch');

    mockGetLanguage = mockStore.overrideSelector(fromState.getLanguage, Language.EN);

    fixture.detectChanges();
  });

  test('component is created properly', () => {
    expect(component).toBeTruthy();
  });

  test('correct languages are passed down to FlatPickerComponent', () => {
    const flatPicker = fixtureHelper.getByDirective(FlatPickerStubComponent);

    expect(flatPicker.componentInstance.items).toEqual([
      {
        value: Language.EN,
        label: 'en',
      },
      {
        value: Language.PL,
        label: 'pl',
      }
    ]);
  });

  test('correct language is passed down to FlatPickerComponent', () => {
    const flatPicker = fixtureHelper.getByDirective(FlatPickerStubComponent);

    expect(flatPicker.componentInstance.selected).toEqual(Language.EN);

    mockGetLanguage.setResult(Language.PL);
    mockStore.refreshState();
    fixture.detectChanges();

    expect(flatPicker.componentInstance.selected).toEqual(Language.PL);
  });

  test('correct action is dispatched when language is selected', () => {
    const flatPicker = fixtureHelper.getByDirective(FlatPickerStubComponent);

    flatPicker.triggerEventHandler('selectItem', Language.EN);

    fixture.detectChanges();

    expect(dispatchSpy).toHaveBeenCalledWith(fromState.selectLanguage({ language: Language.EN }));
  });
});
