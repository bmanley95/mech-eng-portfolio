import { createContext } from 'react'
import type { Language, Translations } from '../utils/i18n'

export interface I18nContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: Translations
}

export const I18nContext = createContext<I18nContextType | undefined>(undefined)
