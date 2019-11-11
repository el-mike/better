import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Inject,
} from '@angular/core';

import {
  Store,
  select,
} from '@ngrx/store';

import {
  Observable,
} from 'rxjs';

import {
  Language,
  LanguageConfig,
  LanguagesConfig,
  LANGUAGES_CONFIG,
} from '@app/common';

import * as fromState from '@app/+state';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  public language$: Observable<Language>;
  public languages: LanguageConfig[] = [];

  constructor(
    private readonly store: Store<fromState.AppState>,
    @Inject(LANGUAGES_CONFIG) public readonly languagesConfig: LanguagesConfig,
  ) {}

  public ngOnInit() {
    this.languages = Object.keys(this.languagesConfig)
      .map(key => this.languagesConfig[key]);

    this.language$ = this.store.pipe(
      select(fromState.getLanguage)
    );
  }

  public selectLanguage(language: Language) {
    this.store.dispatch(fromState.selectLanguage({ language }));
  }
}
