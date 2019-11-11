import {
  Theme,
  ThemesConfig,
} from '@app/common';

// export const themesConfig: ThemeConfig[] = [
//   {
//     name: Theme.LIGHT,
//     label: 'general.theme_light_l',
//     class: 'theme-light',
//   },
//   {
//     name: Theme.DARK,
//     label: 'general.theme_dark_l',
//     class: 'theme-dark'
//   }
// ];

export const themesConfig: ThemesConfig = {
  [Theme.LIGHT]: {
    name: Theme.LIGHT,
    label: 'general.theme_light_l',
    class: 'theme-light',
  },
  [Theme.DARK]: {
    name: Theme.DARK,
    label: 'general.theme_dark_l',
    class: 'theme-dark'
  }
};
