import { useContext } from 'react'
import type { Language, Translations } from '../utils/i18n'
import { I18nContext } from '../contexts/I18nContext'

interface I18nContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: Translations
}

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
