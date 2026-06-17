import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ArrowLeft } from 'lucide-react'
import styles from './CustomCursor.module.css'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth <= 768 || ('ontouchstart' in window) || navigator.maxTouchPoints > 0 : false)

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(
        window.innerWidth <= 768 || 
        ('ontouchstart' in window) || 
        navigator.maxTouchPoints > 0
      );
    }
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, [])

  useEffect(() => {
    if (isMobile) {
      document.body.style.cursor = 'auto';
      return;
    }

    // Hide default cursor on body
    document.body.style.cursor = 'none';

    // Move cursor with GSAP
    const onMouseMove = (e) => {
      if (!cursorRef.current) return;
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      })
    }

    // Add event listeners
    window.addEventListener('mousemove', onMouseMove)

    // Handle hover states
    const handleMouseOver = (e) => {
      if (!cursorRef.current) return;
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button')
      ) {
        gsap.to(cursorRef.current, { scale: 1.5, duration: 0.3 })
      }
    }

    const handleMouseOut = (e) => {
      if (!cursorRef.current) return;
      const target = e.target;
      if (
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button')
      ) {
        gsap.to(cursorRef.current, { scale: 1, duration: 0.3 })
      }
    }

    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      document.body.style.cursor = 'auto'; // Reset cursor on cleanup
    }
  }, [isMobile])

  if (isMobile) return null;

  return (
    <div className={styles.cursor} ref={cursorRef}>
      <ArrowLeft className={styles.arrow} strokeWidth={1.5} />
    </div>
  )
}
