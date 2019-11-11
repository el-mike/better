import { Theme } from '../enums';

export interface ThemeConfig {
  name: Theme;
  label: string;
  class: string;
}

export type ThemesConfig = {
  [key in Theme]: ThemeConfig;
};
