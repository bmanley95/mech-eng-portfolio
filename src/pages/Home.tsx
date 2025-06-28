import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, MapPin } from 'lucide-react'
import styles from './Home.module.css'
import { portfolioConfig } from '../data/portfolioConfig'

const navigation = [
  { name: 'About', href: 'about' },
  { name: 'Experience', href: 'experience' },
  { name: 'Projects', href: 'projects' },
]

const sections = navigation.map((item) => item.href).reverse()

function Home() {
  const [activeSection, setActiveSection] = useState('about')

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
      document.documentElement.style.setProperty('--grid-opacity', '0.6')
    }

    const handleMouseLeave = () => {
      // Hide grid when mouse leaves the window
      document.documentElement.style.setProperty('--grid-opacity', '0')
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

    // Add event listeners (removed wheel event handler)
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      if (rightColumn) {
        rightColumn.removeEventListener('scroll', handleScroll)
      }
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.layoutGrid}>
        {/* Left Column */}
        <header className={styles.leftColumn}>
          <div className={styles.leftContent}>
            {/* GROUP A */}
            <div className={styles.groupA}>
              <h1 className={styles.mainHeading}>{portfolioConfig.name}</h1>
              <h2 className={styles.subtitle}>{portfolioConfig.title}</h2>
              <p className={styles.tagline}>{portfolioConfig.tagline}</p>
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
                  href={portfolioConfig.social.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="GitHub (opens in a new tab)"
                  title="GitHub"
                  className={styles.socialLink}
                >
                  <Github className={styles.socialIcon} />
                </a>
              </li>
              <li>
                <a
                  href={portfolioConfig.social.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="LinkedIn (opens in a new tab)"
                  title="LinkedIn"
                  className={styles.socialLink}
                >
                  <Linkedin className={styles.socialIcon} />
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${portfolioConfig.email}`}
                  aria-label="Email"
                  title="Email"
                  className={styles.socialLink}
                >
                  <Mail className={styles.socialIcon} />
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
            <div className={styles.sectionContent}>
              <p style={{ marginBottom: 'var(--space-md)' }}>
                {portfolioConfig.bio.intro}
              </p>
              <p style={{ marginBottom: 'var(--space-md)' }}>
                {portfolioConfig.bio.experience}
              </p>
              <p>{portfolioConfig.bio.personal}</p>
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
                <div key={index} className={styles.experienceItem}>
                  <h3
                    className={styles.experienceTitle}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--space-sm)',
                    }}
                  >
                    {job.title} at {job.company}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-text-secondary)',
                      marginBottom: 'var(--space-sm)',
                    }}
                  >
                    {job.duration} • {job.location}
                  </p>
                  <p style={{ marginBottom: 'var(--space-sm)' }}>
                    {job.responsibilities[0]}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 'var(--space-xs)',
                    }}
                  >
                    {job.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        style={{
                          backgroundColor: 'rgba(20, 184, 166, 0.1)',
                          color: '#5eead4',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          fontSize: '0.75rem',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
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
                <div key={index} className={styles.projectItem}>
                  <h3
                    className={styles.projectTitle}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      color: 'var(--color-text-primary)',
                      marginBottom: 'var(--space-sm)',
                    }}
                  >
                    {project.title}
                  </h3>
                  <p style={{ marginBottom: 'var(--space-sm)' }}>
                    {project.description}
                  </p>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 'var(--space-xs)',
                    }}
                  >
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        style={{
                          backgroundColor: 'rgba(20, 184, 166, 0.1)',
                          color: '#5eead4',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                          fontSize: '0.75rem',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className={styles.section}>
            <h2 className={styles.sectionTitle}>Contact</h2>
            <div
              className={styles.sectionContent}
              style={{
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
              }}
            >
              <p style={{ marginBottom: 'var(--space-md)' }}>
                I'm always interested in discussing new engineering challenges
                and opportunities to collaborate on innovative projects.
              </p>
              <p style={{ marginBottom: 'var(--space-lg)' }}>
                Whether you're looking for a mechanical engineer for your team,
                need consulting on a project, or just want to connect, I'd love
                to hear from you.
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-md)',
                  marginBottom: 'var(--space-md)',
                }}
              >
                <MapPin
                  style={{
                    height: '1rem',
                    width: '1rem',
                    color: 'var(--color-text-secondary)',
                  }}
                />
                <span>{portfolioConfig.location}</span>
              </div>
              <a
                href={`mailto:${portfolioConfig.email}`}
                style={{
                  color: 'var(--color-accent)',
                  textDecoration: 'none',
                  fontWeight: '500',
                  borderBottom: '1px solid transparent',
                  transition: 'border-color 0.3s ease',
                  marginTop: 'auto',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderBottomColor =
                    'var(--color-accent)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderBottomColor = 'transparent'
                }}
              >
                Get In Touch
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Home
