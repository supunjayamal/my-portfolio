export default function Milestones() {
  return (
    <section id="milestones" className="section--alt" aria-labelledby="milestones-section-title">
      <div className="container">
        <div className="milestones-inner">

          {/* Left: intro */}
          <div className="milestones-intro reveal">
            <div className="section-label">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M6 1l1.2 3.7H11L8 6.9l1.1 3.7L6 8.4l-3.1 2.2L4 7.1 1 4.7h3.8z" stroke="#f59e0b" strokeWidth="1.2" strokeLinejoin="round"/>
              </svg>
              Academic Milestones
            </div>
            <h2 className="section-title reveal reveal-delay-1" id="milestones-section-title">
              Project Milestones &amp;<br />
              <span className="gradient-text">Key Achievements</span>
            </h2>
            <p className="milestones-intro__desc">
              The following entries document key milestones spanning both academic and
              extracurricular achievements — from a top-ranked deep learning project
              to four consecutive years of university cricket colors and team captaincy.
            </p>

            <div className="milestones-meta">
              <div className="milestones-meta-item">
                <div className="milestones-meta-item__icon" aria-hidden="true">🏆</div>
                <span>Lumina ranked Top 10 out of 33 competitive project submissions</span>
              </div>
              <div className="milestones-meta-item">
                <div className="milestones-meta-item__icon" aria-hidden="true">🏏</div>
                <span>University Cricket Captain — 2025</span>
              </div>
              <div className="milestones-meta-item">
                <div className="milestones-meta-item__icon" aria-hidden="true">🎽</div>
                <span>University Colors awarded for 4 consecutive years (2022–2025)</span>
              </div>
            </div>
          </div>

          {/* Right: timeline */}
          <div className="milestones-timeline reveal reveal-delay-2" role="list" aria-label="Academic milestones timeline">
            <div className="timeline" aria-label="Timeline of academic milestones">
              <div className="timeline__line" aria-hidden="true" />
              <div className="timeline__line-fill" aria-hidden="true" />

              {/* Lumina */}
              <div className="timeline-entry reveal" role="listitem" aria-labelledby="milestone-1-title">
                <div className="timeline-entry__dot" aria-hidden="true" />
                <time className="timeline-entry__date" dateTime="2026-04-27">April 27, 2026</time>
                <h3 className="timeline-entry__title" id="milestone-1-title">
                  Lumina — Final Project Defense &amp; Top 10 Recognition
                </h3>
                <p className="timeline-entry__desc">
                  The Lumina guided photography mobile application was presented and defended
                  as a final project. The custom CNN architecture — trained and deployed entirely
                  on-device via TensorFlow Lite with MediaPipe BlazePose pose estimation —
                  was recognized as a <strong>top 10 project out of 33 competitive entries</strong>,
                  validating both the technical depth and the practical utility of the system.
                </p>
                <div className="tag-group">
                  <span className="tag tag--indigo">🏆 Top 10 / 33</span>
                  <span className="tag tag--indigo">Deep Learning</span>
                  <span className="tag tag--indigo">Final Defense</span>
                </div>
              </div>

              {/* Cricket Captain */}
              <div className="timeline-entry reveal" role="listitem" aria-labelledby="milestone-2-title">
                <div className="timeline-entry__dot timeline-entry__dot--cricket" aria-hidden="true" />
                <time className="timeline-entry__date" dateTime="2025-01-01">2025</time>
                <h3 className="timeline-entry__title" id="milestone-2-title">
                  University Cricket Captain 🏏
                </h3>
                <p className="timeline-entry__desc">
                  Appointed as captain of the university cricket team for the 2025 season,
                  demonstrating leadership, strategic thinking, and the ability to motivate
                  and coordinate a competitive team. This role reflects a proven track record
                  built over four years of consistent contribution to university-level cricket.
                </p>
                <div className="tag-group">
                  <span className="tag" style={{ borderColor:'rgba(16,185,129,0.35)', color:'#6ee7b7', background:'rgba(16,185,129,0.1)' }}>🏏 Team Captain</span>
                  <span className="tag" style={{ borderColor:'rgba(16,185,129,0.35)', color:'#6ee7b7', background:'rgba(16,185,129,0.1)' }}>Leadership</span>
                  <span className="tag" style={{ borderColor:'rgba(16,185,129,0.35)', color:'#6ee7b7', background:'rgba(16,185,129,0.1)' }}>University Cricket</span>
                </div>
              </div>

              {/* University Colors */}
              <div className="timeline-entry reveal" role="listitem" aria-labelledby="milestone-3-title">
                <div className="timeline-entry__dot timeline-entry__dot--gold" aria-hidden="true" />
                <time className="timeline-entry__date timeline-entry__date--gold" dateTime="2022-01-01">2022 · 2023 · 2024 · 2025</time>
                <h3 className="timeline-entry__title" id="milestone-3-title">
                  University Colors — Cricket 🎽
                </h3>
                <p className="timeline-entry__desc">
                  Awarded university colors in cricket for four consecutive years (2022, 2023,
                  2024, and 2025), recognizing outstanding and sustained performance at the
                  university level. Achieving colors across four successive seasons reflects
                  exceptional dedication, consistency, and sporting excellence.
                </p>
                <div className="tag-group">
                  <span className="tag" style={{ borderColor:'rgba(251,191,36,0.4)', color:'#fde68a', background:'rgba(251,191,36,0.1)' }}>🎽 University Colors</span>
                  <span className="tag" style={{ borderColor:'rgba(251,191,36,0.4)', color:'#fde68a', background:'rgba(251,191,36,0.1)' }}>4 Consecutive Years</span>
                  <span className="tag" style={{ borderColor:'rgba(251,191,36,0.4)', color:'#fde68a', background:'rgba(251,191,36,0.1)' }}>2022–2025</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
