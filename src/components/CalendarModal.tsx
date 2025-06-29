import { useEffect } from 'react'
import { X } from 'lucide-react'
import styles from './CalendarModal.module.css'

interface CalendarModalProps {
  isOpen: boolean
  onClose: () => void
  calendarUrl: string
}

function CalendarModal({ isOpen, onClose, calendarUrl }: CalendarModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Book a Chat</h2>
          <button
            onClick={onClose}
            className={styles.closeButton}
            aria-label="Close calendar"
          >
            <X size={20} />
          </button>
        </div>
        <div className={styles.content}>
          <iframe
            src={calendarUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            title="Book a meeting"
            className={styles.iframe}
          />
        </div>
      </div>
    </div>
  )
}

export default CalendarModal
