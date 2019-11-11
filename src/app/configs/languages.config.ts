import {
  Language,
  Currency,
  LanguagesConfig,
} from '@app/common';

export const languagesConfig: LanguagesConfig = {
  [Language.EN]:   {
    name: Language.EN,
    label: 'general.en_l',
    currency: Currency.USD,
  },
  [Language.PL]: {
    name: Language.PL,
    label: 'general.pl_l',
    currency: Currency.PLN,
  }
};

