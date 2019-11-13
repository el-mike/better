import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { ChangeDetectionStrategy } from '@angular/core';

import {
  TranslatePipeStub,
  FixtureHelper,
  createFixtureHelper,
  testBets,
} from '@app/common';

import { BetComponent } from './bet.component';

const testBet = testBets[0];

describe('BetComponent', () => {
  let component: BetComponent;
  let fixture: ComponentFixture<BetComponent>;

  let fixtureHelper: FixtureHelper;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TranslatePipeStub,
        BetComponent,
      ]
    })
    /**
     * Because with OnPush only first .detectChanges() will actually
     * make component to update, we need to override DetectionStrategy.
     */
    .overrideComponent(BetComponent, {
      set: {
        changeDetection: ChangeDetectionStrategy.Default,
      }
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BetComponent);
    component = fixture.componentInstance;

    fixtureHelper = createFixtureHelper(fixture);

    component.bet = testBet;

    fixture.detectChanges();
  });

  test('component is created properly', () => {
    expect(component).toBeTruthy();
  });

  test('renders three outcome containers with proper data', () => {
    const containers = fixtureHelper.getAllByCss('.bet__outcome-container');

    expect(containers.length).toEqual(3);

    const homeTeamName = containers[0].query(By.css('.bet__team-name')).nativeElement.textContent as string;
    const homeTeamOutcome = containers[0].query(By.css('.bet__outcome')).nativeElement.textContent as string;

    const drawOutcome = containers[1].query(By.css('.bet__outcome')).nativeElement.textContent as string;

    const awayTeamName = containers[2].query(By.css('.bet__team-name')).nativeElement.textContent as string;
    const awayTeamOutcome = containers[2].query(By.css('.bet__outcome')).nativeElement.textContent as string;

    expect(homeTeamName).toEqual(testBet.teams[0].name);
    expect(parseFloat(homeTeamOutcome)).toEqual(testBet.teams[0].win);

    expect(parseFloat(drawOutcome)).toEqual(testBet.draw);

    expect(awayTeamName).toEqual(testBet.teams[1].name);
    expect(parseFloat(awayTeamOutcome)).toEqual(testBet.teams[1].win);
  });
});
