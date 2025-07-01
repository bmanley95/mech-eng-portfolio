import React, { useEffect, useState } from 'react'
import type { Language } from '../utils/i18n'
import { getTranslation } from '../utils/i18n'
import { I18nContext, type I18nContextType } from './I18nContext'

interface I18nProviderProps {
  children: React.ReactNode
}

export const I18nProvider: React.FC<I18nProviderProps> = ({ children }) => {
  // Get initial language from localStorage or browser preference
  const getInitialLanguage = (): Language => {
    const stored = localStorage.getItem('portfolio-language')
    if (stored === 'en' || stored === 'fr') {
      return stored
    }

    // Check browser language
    const browserLang = navigator.language.toLowerCase()
    if (browserLang.startsWith('fr')) {
      return 'fr'
    }

    return 'en' // Default to English
  }

  const [language, setLanguage] = useState<Language>(getInitialLanguage)

  // Update localStorage when language changes
  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    // Update document lang attribute for accessibility
    document.documentElement.lang = language
  }, [language])

  const value: I18nContextType = {
    language,
    setLanguage,
    t: getTranslation(language),
  }

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
