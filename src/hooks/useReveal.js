import { useEffect } from 'react'

/**
 * useReveal — attaches IntersectionObserver to all
 * .reveal / .reveal-left / .reveal-right / .reveal-scale elements
 * and adds .is-visible when they enter the viewport.
 */
export function useReveal() {
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    )

    const timelineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.1 }
    )

    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale')
      .forEach((el) => revealObserver.observe(el))

    document
      .querySelectorAll('.timeline__line-fill, .timeline-entry')
      .forEach((el) => timelineObserver.observe(el))

    return () => {
      revealObserver.disconnect()
      timelineObserver.disconnect()
    }
  }, [])
}
