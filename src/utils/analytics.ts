// Google Analytics 4 utility functions
// Privacy-friendly analytics implementation

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
  }
}

export const GA_MEASUREMENT_ID =
  import.meta.env.VITE_GA_MEASUREMENT_ID || 'GA_MEASUREMENT_ID'

// Check if analytics is available and user hasn't opted out
export const isAnalyticsEnabled = (): boolean => {
  return (
    typeof window !== 'undefined' &&
    typeof window.gtag === 'function' &&
    !localStorage.getItem('analytics_opt_out') &&
    GA_MEASUREMENT_ID !== 'GA_MEASUREMENT_ID'
  )
}

// Track page views
export const trackPageView = (
  page_title: string,
  page_location?: string
): void => {
  if (!isAnalyticsEnabled()) return

  window.gtag('config', GA_MEASUREMENT_ID, {
    page_title,
    page_location: page_location || window.location.href,
    anonymize_ip: true,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  })
}

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  if (!isAnalyticsEnabled()) return

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}

// Privacy controls
export const optOutAnalytics = (): void => {
  localStorage.setItem('analytics_opt_out', 'true')
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'denied',
    })
  }
}

export const optInAnalytics = (): void => {
  localStorage.removeItem('analytics_opt_out')
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('consent', 'update', {
      analytics_storage: 'granted',
    })
  }
}

export const getAnalyticsStatus = (): boolean => {
  return !localStorage.getItem('analytics_opt_out')
}
