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
  ThemesConfig,
  Theme,
  THEMES_CONFIG,
} from '@app/common';

import * as fromState from '@app/+state';

@Component({
  selector: 'app-flat-picker',
  template: '<div></div>',
})
class FlatPickerStubComponent {
  @Input() selected: any;
  @Input() items: any;
}

const testThemesConfig: ThemesConfig = {
  [Theme.LIGHT]: {
    name: Theme.LIGHT,
    label: 'light',
    class: 'light,'
  },
  [Theme.DARK]: {
    name: Theme.DARK,
    label: 'dark',
    class: 'darak'
  }
};

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let fixtureHelper: FixtureHelper;

  let mockStore: MockStore<fromState.AppState>;
  let mockGetTheme: MemoizedSelector<fromState.AppState, Theme>;
  let dispatchSpy: jest.SpyInstance;

  const initialState = {
    base: {},
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        FlatPickerStubComponent,
        HeaderComponent,
      ],
      providers: [
        { provide: THEMES_CONFIG, useValue: testThemesConfig },
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    fixtureHelper = createFixtureHelper(fixture);

    mockStore = TestBed.get(Store);
    dispatchSpy = jest.spyOn(mockStore, 'dispatch');

    mockGetTheme = mockStore.overrideSelector(fromState.getTheme, Theme.DARK);

    fixture.detectChanges();
  });

  test('component is created properly', async(() => {
    expect(component).toBeTruthy();
  }));

  test('correct themes are passed down to FlatPickerComponent', () => {
    const flatPicker = fixtureHelper.getByDirective(FlatPickerStubComponent);

    expect(flatPicker.componentInstance.items).toEqual([
      {
        value: Theme.LIGHT,
        label: 'light',
      },
      {
        value: Theme.DARK,
        label: 'dark',
      }
    ]);
  });

  test('correct theme is passed down to FlatPickerComponent', () => {
    const flatPicker = fixtureHelper.getByDirective(FlatPickerStubComponent);

    expect(flatPicker.componentInstance.selected).toEqual(Theme.DARK);

    mockGetTheme.setResult(Theme.LIGHT);
    mockStore.refreshState();
    fixture.detectChanges();

    expect(flatPicker.componentInstance.selected).toEqual(Theme.LIGHT);
  });

  test('correct action is dispatched when theme is selected', () => {
    const flatPicker = fixtureHelper.getByDirective(FlatPickerStubComponent);

    flatPicker.triggerEventHandler('selectItem', Theme.LIGHT);

    fixture.detectChanges();

    expect(dispatchSpy).toHaveBeenCalledWith(fromState.selectTheme({ theme: Theme.LIGHT }));
  });
});
