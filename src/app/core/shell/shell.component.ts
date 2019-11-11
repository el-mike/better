import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';

import {
  Store,
  select,
} from '@ngrx/store';

import {
  Observable,
  Subject,
  Subscription,
} from 'rxjs';

import {
  map,
  takeUntil,
} from 'rxjs/operators';

import {
  TranslateService,
} from '@ngx-translate/core';

import {
  Language,
} from '@app/common';

import * as fromState from '@app/+state';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShellComponent implements OnInit, OnDestroy {
  public destroy$ = new Subject<void>();

  public themeClass$: Observable<string>;

  private languageSubscription: Subscription;

  constructor(
    private readonly store: Store<fromState.AppState>,
    private readonly translate: TranslateService,
  ) { }

  public ngOnInit() {
    this.translate.setDefaultLang(Language.EN.toLowerCase());

    this.themeClass$ = this.store.pipe(
      select(fromState.getThemeConfig),
      map(themeConfig => themeConfig.class),
    );

    this.languageSubscription = this.store.pipe(
      select(fromState.getLanguageConfig),
      map(languageConfig => languageConfig.name),
      takeUntil(this.destroy$),
    )
    .subscribe(language => this.translate.use(language));
  }

  public ngOnDestroy() {
    this.languageSubscription.unsubscribe();
  }
}
