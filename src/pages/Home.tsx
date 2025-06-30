import { useState, useEffect } from 'react'
import {
  Linkedin,
  Mail,
  MapPin,
  ExternalLink,
  Sparkle as LucideSparkle,
} from 'lucide-react'
import styles from './Home.module.css'
import { portfolioConfig } from '../data/portfolioConfig'
import Sparkle from '../components/Sparkle'
import CalendarModal from '../components/CalendarModal'

const navigation = [
  { name: 'About', href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
]

const sections = navigation.map((item) => item.href).reverse()

function Home() {
  const [activeSection, setActiveSection] = useState('about')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    const rightColumn = document.querySelector(`.${styles.rightColumn}`)
    if (element && rightColumn) {
      const elementTop = element.offsetTop
      rightColumn.scrollTo({
        top: elementTop,
        behavior: 'smooth',
      })
      setActiveSection(sectionId)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      const rightColumn = document.querySelector(`.${styles.rightColumn}`)
      if (!rightColumn) return

      const scrollPosition = rightColumn.scrollTop + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section)
          break
        }
      }
    }

    const handleMouseMove = (e: Event) => {
      const mouseEvent = e as MouseEvent

      const x = (mouseEvent.clientX / window.innerWidth) * 100
      const y = (mouseEvent.clientY / window.innerHeight) * 100

      // Update mouse position variables
      document.documentElement.style.setProperty('--mouse-x', `${x}%`)
      document.documentElement.style.setProperty('--mouse-y', `${y}%`)

      // Show grid on mouse movement with reduced opacity
      document.documentElement.style.setProperty('--grid-opacity', '0.3')
    }

    const handleMouseLeave = () => {
      // Hide grid when mouse leaves the window
      document.documentElement.style.setProperty('--grid-opacity', '0')
    }

    const isDesktop = () => {
      // In responsive mode, just check screen width - don't be too strict about touch
      return window.innerWidth > 1024
    }

    const handlePageScroll = (e: WheelEvent) => {
      // Only handle custom scrolling on desktop layout (above 1024px)
      if (!isDesktop()) {
        return // Let default scrolling behavior handle mobile
      }

      // Don't prevent default if we're in a scrollable area that should scroll naturally
      const target = e.target as HTMLElement
      const rightColumn = document.querySelector(
        `.${styles.rightColumn}`
      ) as HTMLElement

      if (rightColumn && rightColumn.contains(target)) {
        // If scrolling inside the right column, let it scroll naturally
        return
      }

      // Check if we have touch support - only skip custom scrolling for actual mobile devices
      const hasTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0
      const isMobileDevice = hasTouch && window.innerWidth <= 1024

      if (isMobileDevice) {
        // Only skip custom scrolling for actual mobile devices
        return
      }

      // For desktop (including responsive mode), redirect scroll to right column
      e.preventDefault()
      if (rightColumn) {
        // Use requestAnimationFrame for smoother scrolling
        requestAnimationFrame(() => {
          rightColumn.scrollTop += e.deltaY
        })
      }
    }

    // Initialize mouse position on page load
    const initializeMousePosition = () => {
      document.documentElement.style.setProperty('--mouse-x', '50%')
      document.documentElement.style.setProperty('--mouse-y', '50%')
      document.documentElement.style.setProperty('--grid-opacity', '0')
    }

    const rightColumn = document.querySelector(`.${styles.rightColumn}`)

    if (rightColumn) {
      rightColumn.addEventListener('scroll', handleScroll)
    }

    // Initialize on mount
    initializeMousePosition()

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('wheel', handlePageScroll, { passive: false })

    // Handle window resize to update scroll behavior
    const handleResize = () => {
      const newWidth = window.innerWidth
      setWindowWidth(newWidth)

      // Force re-evaluation of desktop/mobile state
      if (!isDesktop()) {
        // On mobile, make sure we're not preventing any scroll events
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

  // Jean Claude van Damme Easter egg for extremely small screens
  if (windowWidth < 200) {
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
        {/* Left Column */}
        <header className={styles.leftColumn}>
          <div className={styles.leftContent}>
            {/* GROUP A */}
            <div className={styles.groupA}>
              <div className={styles.profilePictureContainer}>
                <img
                  src="profile_picture.jpg"
                  alt={`${portfolioConfig.name} profile picture`}
                  className={styles.profilePicture}
                />
              </div>
              <div className={styles.headingContainer}>
                <h1 className={styles.mainHeading}>{portfolioConfig.name}</h1>
                <h2 className={styles.subtitle}>{portfolioConfig.title}</h2>
                <p className={styles.tagline}>{portfolioConfig.tagline}</p>
              </div>
              <div className={styles.mobileProfilePictureContainer}>
                <img
                  src="profile_picture.jpg"
                  alt={`${portfolioConfig.name} profile picture`}
                  className={styles.mobileProfilePicture}
                />
              </div>
            </div>

            {/* GROUP B - Navigation */}
            <nav className={styles.groupB}>
              <ul className={styles.navigation}>
                {navigation.map((item) => (
                  <li key={item.href} className={styles.navItem}>
                    <button
                      onClick={() => scrollToSection(item.href)}
                      className={`${styles.navLink} ${
                        activeSection === item.href ? styles.active : ''
                      }`}
                    >
                      <span className={styles.navIndicator}></span>
                      <span className={styles.navText}>{item.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* GROUP C - Social Links */}
          <div className={styles.groupC}>
            <ul className={styles.socialList}>
              <li>
                <a
                  href={portfolioConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn (opens in a new tab)"
                  title="LinkedIn"
                  className={styles.socialLink}
                >
                  <Linkedin
                    className={`${styles.socialIcon} ${styles.socialIconAligned}`}
                  />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${portfolioConfig.email}`}
                  aria-label="Email"
                  title="Email"
                  className={styles.socialLink}
                >
                  <Mail
                    className={`${styles.socialIcon} ${styles.socialIconAligned}`}
                  />
                </a>
              </li>
              <li className={styles.sparkleContainer}>
                <Sparkle
                  top={3}
                  right={-12}
                  size={10}
                  color={'#D4AF37'}
                  svg={<LucideSparkle size={16} fill={'#D4AF37'} />}
                />
                <a
                  href="brandon_manley_resume.pdf"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Resume (opens in a new tab)"
                  title="Resume"
                  className={styles.socialLink}
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>
        </header>

        {/* Right Column */}
        <main className={styles.rightColumn}>
          {/* GROUP D - About Section */}
          <section id="about" className={styles.section}>
            <h2 className={styles.sectionTitle}>About</h2>
            <div className={`${styles.sectionContent} ${styles.aboutContent}`}>
              <p
                className={styles.spacedParagraph}
                dangerouslySetInnerHTML={{
                  __html: portfolioConfig.bio.intro,
                }}
              />
              <p
                className={styles.spacedParagraph}
                dangerouslySetInnerHTML={{
                  __html: portfolioConfig.bio.experience,
                }}
              />
              <p
                dangerouslySetInnerHTML={{
                  __html: portfolioConfig.bio.personal,
                }}
              />
            </div>
          </section>

          {/* GROUP E - Experience Section */}
          <section
            id="experience"
            className={`${styles.section} ${styles.experienceSection}`}
          >
            <h2 className={styles.sectionTitle}>Experience</h2>
            <div className={styles.sectionContent}>
              {portfolioConfig.workExperience.map((job, index) => (
                <a
                  key={index}
                  href={job.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.experienceItem}
                  onClick={
                    job.link
                      ? undefined
                      : (e) => {
                          e.preventDefault()
                          // No link available for this experience
                        }
                  }
                >
                  <h3
                    className={`${styles.experienceTitle} ${styles.sectionTitleStyle}`}
                  >
                    {job.title} at {job.company}
                    {job.link && (
                      <ExternalLink className={styles.externalLinkIcon} />
                    )}
                  </h3>
                  <p className={styles.jobMeta}>
                    {job.duration} • {job.location}
                  </p>
                  <p className={styles.spacedParagraphSmall}>
                    {job.description}
                  </p>
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

          {/* GROUP F - Projects Section */}
          <section
            id="projects"
            className={`${styles.section} ${styles.projectSection}`}
          >
            <h2 className={styles.sectionTitle}>Projects</h2>
            <div className={styles.sectionContent}>
              {portfolioConfig.projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectItem}
                  onClick={
                    project.link
                      ? undefined
                      : (e) => {
                          e.preventDefault()
                          // No link available for this project
                        }
                  }
                >
                  <div className={styles.projectThumbnail}>
                    <img
                      src={project.thumbnailImg || 'project_placeholder.png'}
                      alt={`${project.title} thumbnail`}
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
                    <p className={styles.spacedParagraphSmall}>
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

          <section id="contact" className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <div className={styles.sectionContent}>
              <p className={styles.spacedParagraph}>
                {portfolioConfig.outro.p1}
              </p>
              <p className={styles.spacedParagraphLarge}>
                {portfolioConfig.outro.p2}
              </p>
              <div className={styles.contactInfo}>
                <MapPin className={styles.contactIcon} />
                <span>{portfolioConfig.location}</span>
              </div>
              <button
                onClick={() => setIsCalendarOpen(true)}
                className={styles.contactButton}
              >
                Schedule a meeting
              </button>
            </div>
          </section>
        </main>
      </div>
      <CalendarModal
        isOpen={isCalendarOpen}
        onClose={() => setIsCalendarOpen(false)}
        calendarUrl={portfolioConfig.calendarUrl}
      />
    </div>
  )
}

export default Home
