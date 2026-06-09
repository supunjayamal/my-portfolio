import { useState, useEffect } from 'react'

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  // Scroll glass effect
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Active nav link tracking
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const navLinks = document.querySelectorAll('.nav__link[data-section]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            navLinks.forEach((link) =>
              link.classList.toggle('is-active', link.dataset.section === id)
            )
          }
        })
      },
      { threshold: 0.35 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleMobileLink = () => setMobileOpen(false)

  return (
    <nav id="main-nav" className={`nav${isScrolled ? ' is-scrolled' : ''}`} role="navigation" aria-label="Primary navigation">
      <div className="container">
        <div className="nav__inner">
          {/* Logo */}
          <a href="#hero" className="nav__logo" aria-label="Portfolio home">
            <div className="nav__logo-mark" style={{ background: 'linear-gradient(135deg, #0ea5e9, #38bdf8)' }} aria-hidden="true">SK</div>
            <span>Portfolio</span>
          </a>

        {/* Desktop links */}
          <div className="nav__links" role="menubar">
            <a href="#hero"        className="nav__link" data-section="hero"        role="menuitem" id="nav-home">Home</a>
            <a href="#about"       className="nav__link" data-section="about"       role="menuitem" id="nav-about">About</a>
            <a href="#ml-projects" className="nav__link" data-section="ml-projects" role="menuitem" id="nav-ml">ML Projects</a>
            <a href="#skills"      className="nav__link" data-section="skills"      role="menuitem" id="nav-skills">Skills</a>
            <a href="#milestones"  className="nav__link" data-section="milestones"  role="menuitem" id="nav-milestones">Milestones</a>
          </div>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {/* Contact Button */}
            <a href="#contact" className="nav__cta" id="nav-cta-contact" style={{ background: '#0ea5e9', border: 'none', color: '#fff', padding: '0.6rem 1.2rem', borderRadius: '999px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.4rem', textDecoration: 'none' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              Contact Me
            </a>

            {/* CV Button */}
            <a href="assets/cv.pdf" target="_blank" rel="noopener" className="nav__cta nav__cta--cv" id="nav-cta-btn">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
                <path d="M8 2v8M5 7l3 3 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 13h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
              Download CV
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className={`nav__hamburger${mobileOpen ? ' is-open' : ''}`}
            id="nav-hamburger"
            aria-expanded={mobileOpen}
            aria-controls="nav-mobile-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            <span/><span/><span/>
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className="nav__mobile-menu" id="nav-mobile-menu" style={{ display: mobileOpen ? 'flex' : 'none' }} role="menu" aria-label="Mobile navigation">
          <a href="#hero"        className="nav__link" data-section="hero"        role="menuitem" onClick={handleMobileLink}>Home</a>
          <a href="#about"       className="nav__link" data-section="about"       role="menuitem" onClick={handleMobileLink}>About</a>
          <a href="#ml-projects" className="nav__link" data-section="ml-projects" role="menuitem" onClick={handleMobileLink}>ML Projects</a>
          <a href="#skills"      className="nav__link" data-section="skills"      role="menuitem" onClick={handleMobileLink}>Skills</a>
          <a href="#milestones"  className="nav__link" data-section="milestones"  role="menuitem" onClick={handleMobileLink}>Milestones</a>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1rem' }}>
            <a href="#contact" className="nav__link" style={{ color: '#0ea5e9', fontWeight: 600, border: '1px solid rgba(14,165,233,0.3)', padding: '0.75rem', borderRadius: '0.75rem', textAlign: 'center' }} onClick={handleMobileLink}>✉ Contact Me</a>
            <a href="assets/cv.pdf" target="_blank" rel="noopener" className="nav__link" style={{ color: '#38bdf8', fontWeight: 600, border: '1px solid rgba(255,255,255,0.1)', padding: '0.75rem', borderRadius: '0.75rem', textAlign: 'center' }} onClick={handleMobileLink}>⬇ Download CV</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
