import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import {
  Theme,
  ThemeConfig,
} from '@app/common';

@Component({
  selector: 'app-theme-switcher',
  templateUrl: './theme-switcher.component.html',
  styleUrls: ['./theme-switcher.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeSwitcherComponent {
  @Input() public selectedTheme: Theme;
  @Input() public themes: ThemeConfig[] = [];

  @Output() public selectTheme = new EventEmitter<Theme>();

  public onSelectTheme(themeConfig: ThemeConfig) {
    this.selectTheme.emit(themeConfig.name);
  }
}
