import { useEffect, useRef } from 'react'

export default function Projects() {
  const cardRef = useRef(null)

  // 3D tilt effect
  useEffect(() => {
    const card = cardRef.current
    if (!card) return
    const onMove = (e) => {
      const rect = card.getBoundingClientRect()
      const dx = (e.clientX - rect.left) / rect.width - 0.5
      const dy = (e.clientY - rect.top) / rect.height - 0.5
      card.style.transform = `translateY(-6px) rotateX(${-dy * 4}deg) rotateY(${dx * 4}deg)`
    }
    const onLeave = () => { card.style.transform = '' }
    card.addEventListener('mousemove', onMove)
    card.addEventListener('mouseleave', onLeave)
    return () => {
      card.removeEventListener('mousemove', onMove)
      card.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <section id="ml-projects" className="section" aria-labelledby="ml-section-title">
      <div className="container">
        <header className="section-header">
          <div className="section-label reveal" aria-hidden="true">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="5" stroke="#6366f1" strokeWidth="1.5"/>
              <path d="M4 6l1.5 1.5L8 4" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Portfolio
          </div>
          <h2 className="section-title reveal reveal-delay-1" id="ml-section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-desc reveal reveal-delay-2">
            A selection of my best work across Machine Learning, Web Development, and AI-driven applications.
          </p>
        </header>

        <div className="projects-grid">
          <article className="project-card project-card--ml project-card--posea reveal" ref={cardRef} aria-labelledby="lumina-title">
            {/* Banner */}
            <div className="project-card__banner">
              <img
                src="assets/lumina-posea.jpg"
                alt="Posea — Pose Suggesting App using Deep Learning by Team Lumina"
                className="project-card__banner-img"
                onError={(e) => e.currentTarget.parentElement.classList.add('banner--fallback')}
              />
              <div className="project-card__banner-overlay">
                <span className="project-card__banner-group">📸 Team Lumina</span>
              </div>
            </div>

            <div className="project-card__body">
              <div className="project-card__header">
                <span className="project-card__category category--ml">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                    <circle cx="5" cy="5" r="4.5" fill="none" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="5" cy="5" r="2"/>
                  </svg>
                  Deep Learning · Computer Vision
                </span>
                <span className="project-card__badge" title="Recognized as a top 10 project out of 33 competitive entries">🏆 Top 10 / 33 Entries</span>
              </div>

              <h3 className="project-card__title" id="lumina-title">Posea — AI-Powered Pose Suggestion App</h3>
              <p className="project-card__team">by <strong>Team Lumina</strong></p>

              <p className="project-card__overview">
                Posea is a deep learning–powered mobile application designed to help users capture
                well-posed photos in beach environments. The system analyzes the background scene,
                recommends contextually suitable poses, and provides <strong>real-time pose guidance</strong>
                using on-device AI — bridging the gap between professional photography and everyday users.
                The project was recognized as a <strong>Top 10 finalist out of 33 competitive entries</strong>,
                demonstrating the practical impact and technical excellence of the architecture.
              </p>

              <div className="spec-table" role="region" aria-label="Technical specifications for Posea">
                <div className="spec-table__title">Technical Specifications</div>
                <div className="spec-row"><span className="spec-row__key">Architecture</span><span className="spec-row__val">Custom CNN (trained from scratch)</span></div>
                <div className="spec-row"><span className="spec-row__key">Scene Analysis</span><span className="spec-row__val">Background classification (beach environment)</span></div>
                <div className="spec-row"><span className="spec-row__key">Pose Estimation</span><span className="spec-row__val">MediaPipe BlazePose (real-time guidance)</span></div>
                <div className="spec-row"><span className="spec-row__key">Input Dimensions</span><span className="spec-row__val font-mono">224 × 224 px</span></div>
                <div className="spec-row"><span className="spec-row__key">Inference Runtime</span><span className="spec-row__val">TensorFlow Lite (on-device)</span></div>
                <div className="spec-row"><span className="spec-row__key">Regularization</span><span className="spec-row__val"><code>L₂(λ = 0.001)</code> · <code>Dropout(0.5)</code></span></div>
              </div>

              <div className="tag-group" role="list" aria-label="Technologies used">
                <span className="tag tag--indigo" role="listitem">Deep Learning</span>
                <span className="tag tag--indigo" role="listitem">Custom CNN</span>
                <span className="tag tag--indigo" role="listitem">TensorFlow Lite</span>
                <span className="tag tag--indigo" role="listitem">MediaPipe</span>
                <span className="tag" role="listitem">BlazePose</span>
                <span className="tag" role="listitem">Scene Classification</span>
                <span className="tag" role="listitem">Mobile AI</span>
                <span className="tag" role="listitem">Real-time Inference</span>
              </div>
            </div>
          </article>

          {/* Student Performance Prediction */}
          <article className="project-card project-card--research reveal reveal-delay-2" aria-labelledby="student-perf-title">
            <div className="project-card__banner">
              <img
                src="assets/project_student.png"
                alt="Student Performance Prediction Model"
                className="project-card__banner-img"
                onError={(e) => e.currentTarget.parentElement.classList.add('banner--fallback')}
              />
              <div className="project-card__banner-overlay">
                <span className="project-card__banner-group" style={{ background: 'rgba(16,185,129,0.25)', borderColor: 'rgba(16,185,129,0.4)' }}>📊 Predictive Analytics</span>
              </div>
            </div>

            <div className="project-card__body">
              <div className="project-card__header">
                <span className="project-card__category category--research">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="currentColor" aria-hidden="true">
                    <circle cx="5" cy="5" r="4.5" fill="none" stroke="currentColor" strokeWidth="1"/>
                    <circle cx="5" cy="5" r="2"/>
                  </svg>
                  Machine Learning
                </span>
                <a href="https://github.com/EshanFernando0/Student_Performance_Prediction_Model.git" target="_blank" rel="noopener noreferrer" className="project-card__badge" style={{ color: '#fff', background: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)', textDecoration: 'none' }}>
                  View on GitHub ↗
                </a>
              </div>

              <h3 className="project-card__title" id="student-perf-title">Student Performance Prediction Model</h3>
              <p className="project-card__team">by <strong>Supun Karunathilaka</strong></p>

              <p className="project-card__overview">
                An analytical machine learning model developed to predict and evaluate student
                performance based on historical inputs and data sets. The project applies rigorous
                data science methodologies to extract actionable insights from educational metrics.
              </p>

              <div className="spec-table" role="region" aria-label="Technical specifications for Student Performance Model">
                <div className="spec-table__title" style={{ color: '#6ee7b7' }}>Technical Specifications</div>
                <div className="spec-row"><span className="spec-row__key">Core Domain</span><span className="spec-row__val">Predictive Analytics</span></div>
                <div className="spec-row"><span className="spec-row__key">Primary Language</span><span className="spec-row__val font-mono">Python</span></div>
                <div className="spec-row"><span className="spec-row__key">Focus</span><span className="spec-row__val">Data Evaluation &amp; Modeling</span></div>
              </div>

              <div className="tag-group" role="list" aria-label="Technologies used">
                <span className="tag tag--emerald" role="listitem">Machine Learning</span>
                <span className="tag tag--emerald" role="listitem">Python</span>
                <span className="tag" role="listitem">Data Science</span>
                <span className="tag" role="listitem">Predictive Modeling</span>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
