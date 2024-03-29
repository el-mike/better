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
  ThemesConfig,
  THEMES_CONFIG,
} from '@app/common';

import {
  FlatPickerItem,
} from '@app/shared';

import * as fromState from '@app/+state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  public theme$: Observable<Theme>;

  public themeItems: FlatPickerItem<Theme>[] = [];

  constructor(
    private readonly store: Store<fromState.AppState>,
    @Inject(THEMES_CONFIG) public readonly themesConfig: ThemesConfig,
  ) {}

  public ngOnInit() {
    this.themeItems = Object.values(this.themesConfig)
      .map(themeConfig => ({
        value: themeConfig.name,
        label: themeConfig.label,
      } as FlatPickerItem<Theme>));

    this.theme$ = this.store.pipe(
      select(fromState.getTheme),
    );
  }

  public selectTheme(theme: Theme) {
    this.store.dispatch(fromState.selectTheme({ theme }));
  }
}
