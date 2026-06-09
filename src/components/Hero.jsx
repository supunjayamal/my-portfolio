import { useEffect, useRef } from 'react'

function initParticles(canvas) {
  const ctx = canvas.getContext('2d')
  let W, H, particles = []
  const PARTICLE_COUNT = 80
  const LINK_DISTANCE = 130
  const ACCENT = '14,165,233'
  let animId

  function resize() {
    W = canvas.width = canvas.offsetWidth
    H = canvas.height = canvas.offsetHeight
  }
  window.addEventListener('resize', resize)
  resize()

  function rand(min, max) { return Math.random() * (max - min) + min }
  function createParticle() {
    return { x: rand(0, W), y: rand(0, H), vx: rand(-0.3, 0.3), vy: rand(-0.3, 0.3), r: rand(1, 2.2), a: rand(0.2, 0.7) }
  }
  for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(createParticle())

  function draw() {
    ctx.clearRect(0, 0, W, H)
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy
      if (p.x < 0 || p.x > W) p.vx *= -1
      if (p.y < 0 || p.y > H) p.vy *= -1
    })
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x
        const dy = particles[i].y - particles[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < LINK_DISTANCE) {
          const alpha = (1 - dist / LINK_DISTANCE) * 0.25
          ctx.beginPath()
          ctx.strokeStyle = `rgba(${ACCENT},${alpha})`
          ctx.lineWidth = 0.6
          ctx.moveTo(particles[i].x, particles[i].y)
          ctx.lineTo(particles[j].x, particles[j].y)
          ctx.stroke()
        }
      }
    }
    particles.forEach(p => {
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${ACCENT},${p.a})`
      ctx.fill()
    })
    animId = requestAnimationFrame(draw)
  }
  draw()
  return () => {
    cancelAnimationFrame(animId)
    window.removeEventListener('resize', resize)
  }
}

function initTypewriter(el) {
  const roles = ['Machine Learning Engineer', 'Full Stack Developer', 'Computer Vision Specialist', 'Edge AI Researcher', 'Deep Learning Engineer']
  let roleIdx = 0, charIdx = 0, deleting = false
  const TYPING_SPEED = 65, DELETING_SPEED = 35, PAUSE_FULL = 2000, PAUSE_EMPTY = 400
  let timer

  function tick() {
    const current = roles[roleIdx]
    if (!deleting) {
      el.textContent = current.slice(0, ++charIdx)
      if (charIdx === current.length) { deleting = true; timer = setTimeout(tick, PAUSE_FULL); return }
      timer = setTimeout(tick, TYPING_SPEED)
    } else {
      el.textContent = current.slice(0, --charIdx)
      if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; timer = setTimeout(tick, PAUSE_EMPTY); return }
      timer = setTimeout(tick, DELETING_SPEED)
    }
  }
  timer = setTimeout(tick, 800)
  return () => clearTimeout(timer)
}

export default function Hero() {
  const canvasRef = useRef(null)
  const typeRef = useRef(null)
  const visualRef = useRef(null)

  useEffect(() => {
    const cleanup = initParticles(canvasRef.current)
    return cleanup
  }, [])

  useEffect(() => {
    const cleanup = initTypewriter(typeRef.current)
    return cleanup
  }, [])

  useEffect(() => {
    const t = setTimeout(() => {
      if (visualRef.current) visualRef.current.classList.add('is-entered')
    }, 350)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" className="hero" aria-labelledby="hero-name">
      <canvas id="hero-canvas" ref={canvasRef} aria-hidden="true" />
      <div className="hero__glow hero__glow--1" aria-hidden="true" />
      <div className="hero__glow hero__glow--2" aria-hidden="true" />

      <div className="container">
        <div className="hero__inner">
          {/* Left: text */}
          <div className="hero__content">
            <div className="hero__greeting">
              <span className="hero__greeting-dot" aria-hidden="true" />
              Hi, I'm
            </div>

            <h1 className="hero__name" id="hero-name">
              <span>Supun</span><br />
              Karunathilaka
            </h1>

            <div className="hero__typewriter-wrap" aria-live="polite" aria-label="Current role">
              <span className="hero__typewriter-prefix">Specialized in</span>
              <span id="hero-typewriter" ref={typeRef} />
              <span className="hero__cursor" aria-hidden="true" />
            </div>

            <p className="hero__sub">
              Demonstrating the deployment of custom machine learning models and
              scalable, data-driven web architectures — from edge inference to
              econometric research.
            </p>

            <div className="hero__ctas">
              <a href="#ml-projects" className="btn btn--primary" id="hero-cta-ml"
                style={{ background: 'linear-gradient(135deg,#0ea5e9,#38bdf8)', boxShadow: '0 4px 20px rgba(14,165,233,0.35)' }}>
                View ML Projects
                <svg className="btn__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#skills" className="btn btn--secondary" id="hero-cta-skills">
                View Skills
                <svg className="btn__icon" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>

            <div className="hero__socials" role="list" aria-label="Social links">
              <a href="https://github.com/supunjayamal" target="_blank" rel="noopener noreferrer" className="hero__social-link" role="listitem" aria-label="GitHub profile">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/supunkarunathilaka" target="_blank" rel="noopener noreferrer" className="hero__social-link" role="listitem" aria-label="LinkedIn profile">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="mailto:supunjayamal07@gmail.com" className="hero__social-link" role="listitem" aria-label="Send email">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>

          {/* Right: Photo */}
          <div className="hero__visual" ref={visualRef}>
            <div className="hero__photo-frame">
              <div className="hero__photo-ring hero__photo-ring--1" aria-hidden="true" />
              <div className="hero__photo-ring hero__photo-ring--2" aria-hidden="true" />
              <div className="hero__photo-glow" aria-hidden="true" />
              <div className="hero__photo-wrap">
                <img src="assets/photo.jpg" alt="Supun Karunathilaka" className="hero__photo" id="hero-photo"
                  onError={(e) => e.currentTarget.parentElement.classList.add('no-photo')} />
                <div className="hero__photo-shine" aria-hidden="true" />
              </div>
              <div className="hero__badge-chip hero__badge-chip--tl" aria-hidden="true">
                <span>🧠</span> AI/ML
              </div>
              <div className="hero__badge-chip hero__badge-chip--br" aria-hidden="true">
                <span>⚡</span> Full Stack
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
