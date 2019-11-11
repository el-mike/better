import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

import {
  Language,
  LanguageConfig,
} from '@app/common';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguagePickerComponent {
  @Input() public selectedLanguage: Language;
  @Input() public languages: LanguageConfig[] = [];

  @Output() public selectLanguage = new EventEmitter<Language>();

  public onSelectLanguage(languageConfig: LanguageConfig) {
    this.selectLanguage.emit(languageConfig.name);
  }
}
