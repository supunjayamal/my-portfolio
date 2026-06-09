import { 
  SiReact, SiNodedotjs, SiMongodb, SiPostgresql, SiFlutter, 
  SiGithub, SiDocker, SiPython, SiFirebase, SiTailwindcss, SiLinux, 
  SiTensorflow 
} from 'react-icons/si'
import { 
  FaBrain, FaMicrochip, FaEye, FaRobot, FaChartLine, 
  FaNetworkWired, FaChartBar, FaServer 
} from 'react-icons/fa'

export default function Skills() {
  const mlSkills = [
    { name: 'CNN Architecture', icon: <FaBrain />, color: '#6366f1' },
    { name: 'Edge AI Inference', icon: <FaMicrochip />, color: '#10b981' },
    { name: 'Computer Vision', icon: <FaEye />, color: '#3b82f6' },
    { name: 'TensorFlow', icon: <SiTensorflow />, color: '#ff6f00' },
    { name: 'MediaPipe', icon: <FaRobot />, color: '#0ea5e9' },
    { name: 'Predictive Modeling', icon: <FaChartLine />, color: '#8b5cf6' },
    { name: 'Algorithm Learning', icon: <FaNetworkWired />, color: '#ec4899' },
    { name: 'Data Analysis', icon: <FaChartBar />, color: '#14b8a6' }
  ]

  const fsSkills = [
    { name: 'React / Next.js', icon: <SiReact />, color: '#61dafb' },
    { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
    { name: 'REST APIs', icon: <FaServer />, color: '#fbbf24' },
    { name: 'MongoDB', icon: <SiMongodb />, color: '#4db33d' },
    { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#336791' },
    { name: 'Flutter', icon: <SiFlutter />, color: '#02569b' },
    { name: 'Git / GitHub', icon: <SiGithub />, color: '#ffffff' },
    { name: 'Docker', icon: <SiDocker />, color: '#2496ed' },
    { name: 'Python', icon: <SiPython />, color: '#3776ab' },
    { name: 'Firebase', icon: <SiFirebase />, color: '#ffca28' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38b2ac' },
    { name: 'Linux / Bash', icon: <SiLinux />, color: '#fcc624' }
  ]

  // Double arrays for seamless marquee looping
  const mlMarquee = [...mlSkills, ...mlSkills]
  const fsMarquee = [...fsSkills, ...fsSkills]

  return (
    <section id="skills" className="section" aria-labelledby="skills-section-title">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title reveal" id="skills-section-title">
            Technical Focus &amp; <span className="text-blue-500" style={{ color: '#0ea5e9' }}>Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-4 reveal" style={{ width: '5rem', height: '0.25rem', background: '#0ea5e9', margin: '0 auto 1rem', borderRadius: '999px' }} />
          <p className="section-desc reveal reveal-delay-1" style={{ color: '#a1a1aa' }}>
            A comprehensive overview of my core competencies across Machine Learning and Full-Stack Engineering.
          </p>
        </header>

        <div className="ef-skills-grid reveal reveal-delay-2">
          
          {/* Machine Learning (Tech Stack Animation) */}
          <div className="ef-skill-category">
            <h3 className="ef-skill-category__title">Machine Learning &amp; AI</h3>
            <div className="ef-marquee-container">
              <div className="ef-marquee-track ef-marquee-track--left">
                {mlMarquee.map((skill, i) => (
                  <div key={`${skill.name}-${i}`} className="ef-skill-card group" style={{ '--hover-color': skill.color }}>
                    <span className="ef-skill-card__icon">{skill.icon}</span>
                    <span className="ef-skill-card__text">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Full Stack (Tech Stack Animation) */}
          <div className="ef-skill-category">
            <h3 className="ef-skill-category__title">Full-Stack Development</h3>
            <div className="ef-marquee-container">
              <div className="ef-marquee-track ef-marquee-track--right">
                {fsMarquee.map((skill, i) => (
                  <div key={`${skill.name}-${i}`} className="ef-skill-pill" style={{ '--hover-color': skill.color }}>
                    <span className="ef-skill-pill__icon">{skill.icon}</span>
                    <span className="ef-skill-pill__text">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
