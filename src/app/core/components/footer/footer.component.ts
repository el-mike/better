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

import {
  FlatPickerItem,
} from '@app/shared';

import * as fromState from '@app/+state';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent implements OnInit {
  public language$: Observable<Language>;
  public languageItems: FlatPickerItem<Language>[] = [];

  constructor(
    private readonly store: Store<fromState.AppState>,
    @Inject(LANGUAGES_CONFIG) public readonly languagesConfig: LanguagesConfig,
  ) {}

  public ngOnInit() {
    this.languageItems = Object.keys(this.languagesConfig)
      .map(key => this.languagesConfig[key] as LanguageConfig)
      .map(languageConfig => ({
        value: languageConfig.name,
        label: languageConfig.label,
      } as FlatPickerItem<Language>));

    this.language$ = this.store.pipe(
      select(fromState.getLanguage)
    );
  }

  public selectLanguage(language: Language) {
    this.store.dispatch(fromState.selectLanguage({ language }));
  }
}
