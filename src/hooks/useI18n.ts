import { useContext } from 'react'
import { I18nContext, type I18nContextType } from '../contexts/I18nContext'

export const useI18n = (): I18nContextType => {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}
