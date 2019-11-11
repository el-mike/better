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
  Theme,
  ThemeConfig,
  ThemesConfig,
  THEMES_CONFIG,
} from '@app/common';

import * as fromState from '@app/+state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public theme$: Observable<Theme>;
  
  public themes: ThemeConfig[] = [];

  constructor(
    private readonly store: Store<fromState.AppState>,
    @Inject(THEMES_CONFIG) public readonly themesConfig: ThemesConfig,
  ) {}

  public ngOnInit() {
    this.themes = Object.keys(this.themesConfig)
      .map(key => this.themesConfig[key]);

    this.theme$ = this.store.pipe(
      select(fromState.getTheme),
    );
  }

  public selectTheme(theme: Theme) {
    this.store.dispatch(fromState.selectTheme({ theme }));
  }
}
