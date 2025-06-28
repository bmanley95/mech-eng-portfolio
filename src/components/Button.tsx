import React from 'react'
import styles from './Button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  as?: 'button' | 'a'
  href?: string
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'medium',
  children,
  className = '',
  disabled = false,
  as = 'button',
  href,
  ...props
}) => {
  const baseClasses = [
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  if (as === 'a' && href) {
    return (
      <a
        href={href}
        className={baseClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={baseClasses} disabled={disabled} {...props}>
      {children}
    </button>
  )
}

export default Button
