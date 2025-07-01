import React from 'react'
import { Globe } from 'lucide-react'
import { useI18n } from '../hooks/useI18n'
import type { Language } from '../utils/i18n'
import styles from './LanguageSwitcher.module.css'

const LanguageSwitcher: React.FC = () => {
  const { language, setLanguage } = useI18n()

  const toggleLanguage = () => {
    const newLanguage: Language = language === 'en' ? 'fr' : 'en'
    setLanguage(newLanguage)
  }

  return (
    <button
      onClick={toggleLanguage}
      className={styles.languageSwitcher}
      aria-label={`Switch to ${language === 'en' ? 'French' : 'English'}`}
      title={`Switch to ${language === 'en' ? 'Français' : 'English'}`}
    >
      <Globe className={styles.icon} />
      <span>{language === 'en' ? 'FR' : 'EN'}</span>
    </button>
  )
}

export default LanguageSwitcher
