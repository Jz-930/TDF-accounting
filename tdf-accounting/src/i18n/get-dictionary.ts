import 'server-only';
import { Locale } from './config';

// We enumerate all dictionaries here for better type safety and code splitting
const dictionaries = {
  en: () => import('./dictionaries/en').then((module) => module.en),
  zh: () => import('./dictionaries/zh').then((module) => module.zh),
};

export const getDictionary = async (locale: Locale | string) => {
  const key = locale as keyof typeof dictionaries;
  if (key && dictionaries[key]) {
    return dictionaries[key]();
  }
  return dictionaries.en();
};
