import { Language, TranslationSchema } from './types';
import { pt } from './i18n/pt';
import { en } from './i18n/en';
import { es } from './i18n/es';
import { fr } from './i18n/fr';

export const translations: Record<Language, TranslationSchema> = {
  pt,
  en,
  es,
  fr,
};
