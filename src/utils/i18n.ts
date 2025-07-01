// Internationalization types and utilities

export type Language = 'en' | 'fr'

export interface Translations {
  // Navigation
  navigation: {
    about: string
    projects: string
    experience: string
  }

  // Sections
  sections: {
    about: string
    projects: string
    experience: string
    contact: string
  }

  // Actions
  actions: {
    resume: string
    scheduleAMeeting: string
    linkedin: string
    email: string
  }

  // Accessibility labels
  accessibility: {
    linkedinLabel: string
    emailLabel: string
    resumeLabel: string
    profilePictureAlt: string
    projectThumbnailAlt: string
  }

  // Meta content
  meta: {
    description: string
    keywords: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    navigation: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
    },
    sections: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      contact: 'Contact',
    },
    actions: {
      resume: 'Resume',
      scheduleAMeeting: 'Schedule a meeting',
      linkedin: 'LinkedIn',
      email: 'Email',
    },
    accessibility: {
      linkedinLabel: 'LinkedIn (opens in a new tab)',
      emailLabel: 'Email',
      resumeLabel: 'Resume (opens in a new tab)',
      profilePictureAlt: 'profile picture',
      projectThumbnailAlt: 'thumbnail',
    },
    meta: {
      description:
        'UVic mechanical engineering graduate. Specializing in composite manufacturing, automotive engineering, and simulation-driven development.',
      keywords:
        'mechanical engineer, UVic, Ballard Power Systems, Wiser Marine Technologies, composite manufacturing, automotive engineering, CAD design, thermal analysis, British Columbia, Canada',
    },
  },
  fr: {
    navigation: {
      about: 'À propos',
      projects: 'Projets',
      experience: 'Expérience',
    },
    sections: {
      about: 'À propos',
      projects: 'Projets',
      experience: 'Expérience',
      contact: 'Contact',
    },
    actions: {
      resume: 'CV',
      scheduleAMeeting: 'Planifier une réunion',
      linkedin: 'LinkedIn',
      email: 'E-mail',
    },
    accessibility: {
      linkedinLabel: 'LinkedIn (ouvre dans un nouvel onglet)',
      emailLabel: 'E-mail',
      resumeLabel: 'CV (ouvre dans un nouvel onglet)',
      profilePictureAlt: 'photo de profil',
      projectThumbnailAlt: 'miniature',
    },
    meta: {
      description:
        "Diplômé en génie mécanique de UVic. Spécialisé dans la fabrication de composites, l'ingénierie automobile et le développement basé sur la simulation.",
      keywords:
        'ingénieur mécanique, UVic, Ballard Power Systems, Wiser Marine Technologies, fabrication de composites, ingénierie automobile, conception CAO, analyse thermique, Colombie-Britannique, Canada',
    },
  },
}

export const getTranslation = (language: Language): Translations => {
  return translations[language] || translations.en
}
