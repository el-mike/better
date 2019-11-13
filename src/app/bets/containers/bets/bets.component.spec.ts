import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {
  Component,
  Input,
} from '@angular/core';

import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store, MemoizedSelector } from '@ngrx/store';

import {
  TranslatePipeStub,
  testBets,
  testBetsConfig,
  BETS_CONFIG,
  Bet,
  FixtureHelper,
  createFixtureHelper,
} from '@app/common';

import * as fromState from '../../+state';

import { BetsComponent } from './bets.component';

@Component({
  selector: 'app-bet',
  template: '<div></div>',
})
class BetStubComponent {
  @Input() bet: any;
}

describe('BetsComponent', () => {
  let component: BetsComponent;
  let fixture: ComponentFixture<BetsComponent>;

  let fixtureHelper: FixtureHelper;

  let mockStore: MockStore<fromState.BetsFeatureState>;
  let mockSelectBets: MemoizedSelector<fromState.BetsState, Bet[]>;
  let dispatchSpy: jest.SpyInstance;

  const initialState = {
    betsFeature: {
      bets: {},
    }
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BetsComponent,
        TranslatePipeStub,
        BetStubComponent,
      ],
      providers: [
        { provide: BETS_CONFIG, useValue: testBetsConfig },
        provideMockStore({ initialState }),
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetsComponent);
    component = fixture.componentInstance;

    fixtureHelper = createFixtureHelper(fixture);

    mockStore = TestBed.get(Store);
    dispatchSpy = jest.spyOn(mockStore, 'dispatch');
    mockSelectBets = mockStore.overrideSelector(fromState.selectBets, []);

    fixture.detectChanges();
  });

  test('component is created properly', () => {
    expect(component).toBeTruthy();
  });

  test('bets are selected from store', () => {
    expect(fixtureHelper.getAllByDirective(BetStubComponent).length).toEqual(0);

    mockSelectBets.setResult(testBets);
    mockStore.refreshState();
    fixture.detectChanges();

    expect(fixtureHelper.getAllByDirective(BetStubComponent).length).toEqual(testBets.length);
  });

  test('getBets action is dispatched', () => {
    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy).toHaveBeenCalledWith(fromState.getBets());
  });

  test('generateBets action is dispatched when button is clicked', () => {
    fixtureHelper.clickByCss('#generate-bets-btn');

    expect(dispatchSpy).toHaveBeenCalledWith(fromState.generateBets({ size: testBetsConfig.generateSize }));
  });

  test('startPulling action is dispatched when button is clicked', () => {
    fixtureHelper.clickByCss('#start-pulling-btn');

    expect(dispatchSpy).toHaveBeenCalledWith(fromState.startBetsPulling({ rate: testBetsConfig.pullingRate }));
  });

  test('stopPulling action is dispatched when button is clicked', () => {
    fixtureHelper.clickByCss('#stop-pulling-btn');

    expect(dispatchSpy).toHaveBeenCalledWith(fromState.stopBetsPulling());
  });
});
