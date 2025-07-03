interface SafeHTMLProps {
  content: string
  className?: string
}

/**
 * Safe HTML renderer that replaces dangerouslySetInnerHTML
 * Parses simple HTML tags and renders them as React components
 */
export function SafeHTML({ content, className }: SafeHTMLProps) {
  const parseContent = (text: string) => {
    const parts = text.split(/(<strong>.*?<\/strong>)/g)

    return parts.map((part, index) => {
      if (part.startsWith('<strong>') && part.endsWith('</strong>')) {
        const innerText = part.replace(/<\/?strong>/g, '')
        return <strong key={index}>{innerText}</strong>
      }
      return part
    })
  }

  return <p className={className}>{parseContent(content)}</p>
}
