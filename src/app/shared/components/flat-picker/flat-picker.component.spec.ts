import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeDetectionStrategy } from '@angular/core';

import {
  TranslatePipeStub,
  FixtureHelper,
  createFixtureHelper,
} from '@app/common';

import { FlatPickerItem } from './flat-picker-item.model';
import { FlatPickerComponent } from './flat-picker.component';

const testItems: FlatPickerItem[] = [
  {
    value: 'value1',
    label: 'label1',
  },
  {
    value: 'value2',
    label: 'label2',
  },
  {
    value: 'value3',
    label: 'label3',
  }
];

describe('FlatPickerComponent', () => {
  let component: FlatPickerComponent;
  let fixture: ComponentFixture<FlatPickerComponent>;

  let fixtureHelper: FixtureHelper;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TranslatePipeStub,
        FlatPickerComponent,
      ]
    })
    /**
     * Because with OnPush only first .detectChanges() will actually
     * make component to update, we need to override DetectionStrategy.
     */
    .overrideComponent(FlatPickerComponent, {
      set: {
        changeDetection: ChangeDetectionStrategy.Default,
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatPickerComponent);
    component = fixture.componentInstance;

    fixtureHelper = createFixtureHelper(fixture);

    fixture.detectChanges();
  });

  test('component is created properly', () => {
    expect(component).toBeTruthy();
  });

  test('items are correctly rendered', () => {
    component.items = [...testItems];

    fixture.detectChanges();

    expect(fixtureHelper.getAllByCss('.flat-picker__item').length).toEqual(testItems.length);
  });

  test('item representing selected value has active class', () => {
    component.items = [...testItems];
    component.selected = testItems[0].value;

    fixture.detectChanges();

    expect(fixtureHelper.getAllByCss('.flat-picker__item')[0].classes.active).toEqual(true);
    expect(fixtureHelper.getAllByCss('.flat-picker__item')[1].classes.active).toBeFalsy();

    component.selected = testItems[1].value;

    fixture.detectChanges();

    expect(fixtureHelper.getAllByCss('.flat-picker__item')[0].classes.active).toBeFalsy();
    expect(fixtureHelper.getAllByCss('.flat-picker__item')[1].classes.active).toEqual(true);
  });
});
