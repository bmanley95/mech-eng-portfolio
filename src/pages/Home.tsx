import { useState, useEffect, useRef } from 'react'
import {
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Sparkle as LucideSparkle,
  Cog,
} from 'lucide-react'
import styles from './Home.module.css'
import { getLocalizedContent } from '../data/localizedContent'
import { useI18n } from '../hooks/useI18n'
import Sparkle from '../components/Sparkle'
import CalendarModal from '../components/CalendarModal'
import LanguageSwitcher from '../components/LanguageSwitcher'
import { trackPageView, trackEvent } from '../utils/analytics'

type Section = 'about' | 'projects' | 'experience'

const sections: Section[] = ['about', 'projects', 'experience']

function Home() {
  const { language, t } = useI18n()
  const localizedContent = getLocalizedContent(language)
  const [activeSection, setActiveSection] = useState<Section>('about')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const isScrollingToSection = useRef(false)

  const scrollToSection = (sectionId: Section) => {
    trackEvent('navigate_to_section', 'navigation', sectionId)

    const element = document.getElementById(sectionId)
    const rightColumn = document.querySelector(`.${styles.rightColumn}`)
    if (element && rightColumn) {
      isScrollingToSection.current = true
      setActiveSection(sectionId)

      const elementTop = element.offsetTop
      rightColumn.scrollTo({
        top: elementTop,
        behavior: 'smooth',
      })

      setTimeout(() => {
        isScrollingToSection.current = false
      }, 800)
    }
  }

  useEffect(() => {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', t.meta.description)
    } else {
      const newMetaDescription = document.createElement('meta')
      newMetaDescription.name = 'description'
      newMetaDescription.content = t.meta.description
      document.head.appendChild(newMetaDescription)
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]')
    if (metaKeywords) {
      metaKeywords.setAttribute('content', t.meta.keywords)
    } else {
      const newMetaKeywords = document.createElement('meta')
      newMetaKeywords.name = 'keywords'
      newMetaKeywords.content = t.meta.keywords
      document.head.appendChild(newMetaKeywords)
    }
  }, [language, t, localizedContent.name])

  useEffect(() => {
    trackPageView('Portfolio - Home')

    const handleScroll = () => {
      if (isScrollingToSection.current) {
        return
      }

      const rightColumn = document.querySelector(`.${styles.rightColumn}`)
      if (!rightColumn) return

      const scrollPosition = rightColumn.scrollTop + 50

      let currentSection: Section = 'about'

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && element.offsetTop <= scrollPosition) {
          currentSection = section
        }
      }

      setActiveSection((prevActiveSection) => {
        if (prevActiveSection !== currentSection) {
          trackEvent('view_section', 'navigation', currentSection)
        }
        return currentSection
      })
    }

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent

      const x = (mouseEvent.clientX / window.innerWidth) * 100
      const y = (mouseEvent.clientY / window.innerHeight) * 100
      document.documentElement.style.setProperty('--mouse-x', `${x}%`)
      document.documentElement.style.setProperty('--mouse-y', `${y}%`)

      document.documentElement.style.setProperty('--grid-opacity', '0.3')
    }

    const handleMouseLeave = () => {
      document.documentElement.style.setProperty('--grid-opacity', '0')
    }

    const isDesktop = () => {
      return window.innerWidth > 1024
    }

    const handlePageScroll = (e: WheelEvent) => {
      if (!isDesktop()) {
        return
      }

      const target = e.target as HTMLElement
      const rightColumn = document.querySelector(
        `.${styles.rightColumn}`
      ) as HTMLElement

      if (rightColumn && rightColumn.contains(target)) {
        return
      }

      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isMobileDevice = hasTouch && window.innerWidth <= 1024

      if (isMobileDevice) {
        return
      }

      e.preventDefault()
      if (rightColumn) {
        requestAnimationFrame(() => {
          rightColumn.scrollTop += e.deltaY
        })
      }
    }

    const initializeMousePosition = () => {
      document.documentElement.style.setProperty('--mouse-x', '50%')
      document.documentElement.style.setProperty('--mouse-y', '50%')
      document.documentElement.style.setProperty('--grid-opacity', '0')
    }

    const rightColumn = document.querySelector(`.${styles.rightColumn}`)

    if (rightColumn) {
      rightColumn.addEventListener('scroll', handleScroll)
    }

    initializeMousePosition()

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('wheel', handlePageScroll, { passive: false })

    const handleResize = () => {
      const newWidth = window.innerWidth
      setWindowWidth(newWidth)

      if (!isDesktop()) {
        const rightColumn = document.querySelector(
          `.${styles.rightColumn}`
        ) as HTMLElement
        if (rightColumn) {
          rightColumn.style.overflowY = 'visible'
        }
      } else {
        const rightColumn = document.querySelector(
          `.${styles.rightColumn}`
        ) as HTMLElement
        if (rightColumn) {
          rightColumn.style.overflowY = 'auto'
        }
      }
    }

    window.addEventListener('resize', handleResize)

    return () => {
      if (rightColumn) {
        rightColumn.removeEventListener('scroll', handleScroll)
      }
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('wheel', handlePageScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const isExtremelySmallScreen =
    typeof window !== 'undefined' &&
    windowWidth < 270 &&
    (windowWidth < window.screen.width * 0.5 || window.screen.width < 400)

  if (isExtremelySmallScreen) {
    return (
      <div className={styles.easterEggContainer}>
        <a
          href="https://www.linkedin.com/in/bryce-mcmath-85625a1a3/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.easterEggLink}
        >
          <img
            src="damme.png"
            alt="If your LinkedIn connection request incorporates a Jean Claude van Damme reference, I will accept it."
            className={styles.easterEggImage}
          />
        </a>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <div className={styles.layoutGrid}>
        <header className={styles.leftColumn}>
          <div className={styles.leftContent}>
            <div className={styles.groupA}>
              <div className={styles.profilePictureContainer}>
                <img
                  src="profile_picture.jpg"
                  alt={`${localizedContent.name} ${t.accessibility.profilePictureAlt}`}
                  className={styles.profilePicture}
                />
              </div>
              <div className={styles.headingContainer}>
                <h1 className={styles.mainHeading}>{localizedContent.name}</h1>
                <h2 className={styles.subtitle}>{localizedContent.title}</h2>
                <p className={styles.tagline}>{localizedContent.tagline}</p>
              </div>
              <div className={styles.mobileProfilePictureContainer}>
                <img
                  src="profile_picture.jpg"
                  alt={`${localizedContent.name} ${t.accessibility.profilePictureAlt}`}
                  className={styles.mobileProfilePicture}
                />
              </div>
            </div>

            <nav className={styles.groupB}>
              <ul className={styles.navigation}>
                {sections.map((section) => (
                  <li key={section} className={styles.navItem}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className={`${styles.navLink} ${
                        activeSection === section ? styles.active : ''
                      }`}
                    >
                      <span className={styles.navIndicator}></span>
                      <span className={styles.navText}>
                        {t.navigation[section]}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className={styles.groupC}>
            <ul className={styles.socialList}>
              <li>
                <a
                  href={localizedContent.social.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={t.accessibility.linkedinLabel}
                  title={t.actions.linkedin}
                  className={styles.socialLink}
                  onClick={() =>
                    trackEvent('click_social', 'social', 'linkedin')
                  }
                >
                  <Linkedin
                    className={`${styles.socialIcon} ${styles.socialIconAligned}`}
                  />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${localizedContent.email}`}
                  aria-label={t.accessibility.emailLabel}
                  title={t.actions.email}
                  className={styles.socialLink}
                  onClick={() => trackEvent('click_social', 'social', 'email')}
                >
                  <Mail
                    className={`${styles.socialIcon} ${styles.socialIconAligned}`}
                  />
                </a>
              </li>
              <li>
                <LanguageSwitcher />
              </li>
              <li className={styles.sparkleContainer}>
                <Sparkle
                  top={3}
                  right={language === 'fr' ? -38 : -12}
                  size={10}
                  color={'#D4AF37'}
                  svg={<LucideSparkle size={16} fill={'#D4AF37'} />}
                />
                <a
                  href="Brandon_Manley_Resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={t.accessibility.resumeLabel}
                  title={t.actions.resume}
                  className={styles.socialLink}
                  onClick={() =>
                    trackEvent('download_resume', 'documents', 'pdf')
                  }
                >
                  {t.actions.resume}
                </a>
              </li>
            </ul>
          </div>
        </header>

        <main className={styles.rightColumn}>
          <section id="about" className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.sections.about}</h2>
            <div className={`${styles.sectionContent} ${styles.aboutContent}`}>
              <p
                className={styles.spacedParagraph}
                dangerouslySetInnerHTML={{
                  __html: localizedContent.bio.p1,
                }}
              />
              <p
                className={styles.spacedParagraph}
                dangerouslySetInnerHTML={{
                  __html: localizedContent.bio.p2,
                }}
              />
              <p
                className={styles.spacedParagraph}
                dangerouslySetInnerHTML={{
                  __html: localizedContent.bio.p3,
                }}
              />
            </div>
          </section>

          <div className={styles.sectionDivider}>
            <div className={styles.sectionDividerIcon}>
              <Cog />
            </div>
          </div>

          <section
            id="projects"
            className={`${styles.section} ${styles.projectSection}`}
          >
            <h2 className={styles.sectionTitle}>{t.sections.projects}</h2>
            <div className={styles.sectionContent}>
              {localizedContent.projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectItem}
                  onClick={
                    project.link
                      ? () =>
                          trackEvent('click_project', 'projects', project.title)
                      : (e) => {
                          e.preventDefault()
                        }
                  }
                >
                  <div className={styles.projectThumbnail}>
                    <img
                      src={project.thumbnailImg || 'project_placeholder.png'}
                      alt={`${project.title} ${t.accessibility.projectThumbnailAlt}`}
                      loading="lazy"
                    />
                  </div>
                  <div className={styles.projectContent}>
                    <h3
                      className={`${styles.projectTitle} ${styles.sectionTitleStyle}`}
                    >
                      {project.title}
                      {project.link && (
                        <ExternalLink className={styles.externalLinkIcon} />
                      )}
                    </h3>
                    <p className={styles.projectDescription}>
                      {project.description}
                    </p>
                    <div className={styles.techBadgesContainer}>
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className={styles.techBadge}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <div className={styles.sectionDivider}>
            <div className={styles.sectionDividerIcon}>
              <Cog />
            </div>
          </div>

          <section
            id="experience"
            className={`${styles.section} ${styles.experienceSection}`}
          >
            <h2 className={styles.sectionTitle}>{t.sections.experience}</h2>
            <div className={styles.sectionContent}>
              {localizedContent.workExperience.map((job, index) => (
                <a
                  key={index}
                  href={job.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.experienceItem}
                  onClick={
                    job.link
                      ? () =>
                          trackEvent(
                            'click_experience',
                            'experience',
                            job.company
                          )
                      : (e) => {
                          e.preventDefault()
                        }
                  }
                >
                  <h3
                    className={`${styles.experienceTitle} ${styles.sectionTitleStyle}`}
                  >
                    {job.company}
                    {job.link && (
                      <ExternalLink className={styles.externalLinkIcon} />
                    )}
                  </h3>
                  <p className={styles.jobMeta}>
                    <MapPin className={styles.contactIcon} />
                    {job.location}
                    {' | '}
                    {job.duration}
                  </p>
                  <p className={styles.jobTitle}>{job.title}</p>
                  <p className={styles.jobDescription}>{job.description}</p>
                  <div className={styles.techBadgesContainer}>
                    {job.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techBadge}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </section>

          <div className={styles.sectionDivider}>
            <div className={styles.sectionDividerIcon}>
              <Cog />
            </div>
          </div>

          <section id="contact" className={styles.section}>
            <h2 className={styles.sectionTitle}>{t.sections.contact}</h2>
            <div className={styles.sectionContent}>
              <p className={styles.spacedParagraphLarge}>
                {localizedContent.outro}
              </p>
              <div className={styles.contactInfo}>
                <MapPin className={styles.contactIcon} />
                <span>{localizedContent.location}</span>
              </div>
              <button
                onClick={() => {
                  trackEvent('open_calendar', 'contact', 'schedule_meeting')
                  setIsCalendarOpen(true)
                }}
                className={styles.contactButton}
              >
                {t.actions.scheduleAMeeting}
              </button>
            </div>
          </section>
        </main>
      </div>
      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        calendarUrl={localizedContent.calendarUrl}
      />
    </div>
  )
}

export default Home
