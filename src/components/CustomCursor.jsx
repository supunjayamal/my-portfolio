import { useEffect, useRef } from 'react'

/**
 * CustomCursor — a premium glowing dot + trailing ring cursor
 * identical in feel to high-end portfolio sites.
 */
export default function CustomCursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let mouseX = -100, mouseY = -100
    let ringX  = -100, ringY  = -100
    let rafId

    // Move dot instantly to cursor position
    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    }

    // Scale up dot + ring on hoverable elements
    const onEnter = () => {
      dot.classList.add('cursor--hover')
      ring.classList.add('cursor--hover')
    }
    const onLeave = () => {
      dot.classList.remove('cursor--hover')
      ring.classList.remove('cursor--hover')
    }

    // Animate ring to lag behind cursor smoothly
    const animate = () => {
      ringX += (mouseX - ringX) * 0.30
      ringY += (mouseY - ringY) * 0.30
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`
      rafId = requestAnimationFrame(animate)
    }
    animate()

    window.addEventListener('mousemove', onMove)

    // Attach hover detection to all interactive elements
    const addHover = () => {
      document.querySelectorAll('a, button, [role="button"], .skill-pill, .tag, .interest-chip, .project-card, .about-card, .nav__link').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    addHover()
    // Re-run after a short delay to catch late-rendered elements
    const t = setTimeout(addHover, 1000)

    // Hide cursor when mouse leaves window
    const onLeaveWindow = () => { dot.style.opacity = '0'; ring.style.opacity = '0' }
    const onEnterWindow = () => { dot.style.opacity = '1'; ring.style.opacity = '1' }
    document.addEventListener('mouseleave', onLeaveWindow)
    document.addEventListener('mouseenter', onEnterWindow)

    return () => {
      cancelAnimationFrame(rafId)
      clearTimeout(t)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeaveWindow)
      document.removeEventListener('mouseenter', onEnterWindow)
    }
  }, [])

  return (
    <>
      {/* Inner glowing dot */}
      <div ref={dotRef} className="cursor__dot" aria-hidden="true" />
      {/* Outer lagging ring */}
      <div ref={ringRef} className="cursor__ring" aria-hidden="true" />
    </>
  )
}
