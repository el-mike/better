import {
  Language,
  Currency,
} from '../enums';

export interface LanguageConfig {
  name: Language;
  label: string;
  currency: Currency;
}

export type LanguagesConfig = {
  [key in Language]: LanguageConfig;
};
