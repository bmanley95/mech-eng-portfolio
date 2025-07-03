import { useState, useEffect } from 'react'

interface SparkleProps {
  color: string
  size: number
  top: number
  right: number
  svg: React.ReactNode
}

const duration = 3000 // ms
const delay = 4000 // ms

// Thanks Josh Comeau, this is inspired by your article:
// www.joshwcomeau.com/react/animated-sparkles-in-react/
const Sparkle = ({ color, size, top, right, svg }: SparkleProps) => {
  const [opacity, setOpacity] = useState(0)
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    let currentRotation = 0

    const animateSparkle = () => {
      // reset when nearing maximum integer size
      if (currentRotation >= Number.MAX_SAFE_INTEGER - 361) {
        currentRotation = 0
      }

      setRotation(currentRotation)
      setOpacity(0)

      requestAnimationFrame(() => {
        setOpacity(1)
        setRotation(currentRotation + 360)
      })

      setTimeout(() => {
        setOpacity(0)
      }, duration / 2)

      currentRotation += 360
    }

    animateSparkle()

    const sparkleInterval = setInterval(animateSparkle, delay)

    return () => {
      clearInterval(sparkleInterval)
    }
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        top: `${top}%`,
        right: `${right}%`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity,
        transform: `rotate(${rotation}deg)`,
        transformOrigin: 'center',
        transition: `opacity ${duration / 2}ms ease-in-out, transform ${duration}ms ease-in-out`,
        color: color,
        pointerEvents: 'none',
        zIndex: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {svg}
    </div>
  )
}

export default Sparkle
