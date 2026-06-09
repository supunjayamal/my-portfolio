import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${formData.name || 'a visitor'}`)
    const body = encodeURIComponent(
      `Name: ${formData.name || 'Not provided'}\nEmail: ${formData.email || 'Not provided'}\n\n${formData.message || ''}`
    )
    window.location.href = `mailto:supunjayamal07@gmail.com?subject=${subject}&body=${body}`
  }

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  return (
    <section id="contact" className="section" aria-labelledby="contact-title" style={{ paddingBottom: '6rem' }}>
      <div className="container">
        <header className="section-header">
          <h2 className="section-title reveal" id="contact-title">
            Get In <span className="text-blue-500" style={{ color: '#0ea5e9' }}>Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-4 reveal" style={{ width: '5rem', height: '0.25rem', background: '#0ea5e9', margin: '0 auto 1rem', borderRadius: '999px' }} />
          <p className="section-desc reveal reveal-delay-1" style={{ color: '#a1a1aa' }}>
            Currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </header>

        <div className="contact-form-container reveal reveal-delay-2" style={{
          maxWidth: '48rem',
          margin: '0 auto',
          background: 'rgba(15, 15, 17, 0.7)',
          padding: '3rem',
          borderRadius: '1.5rem',
          border: '1px solid rgba(255,255,255,0.06)',
          backdropFilter: 'blur(20px)'
        }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="name" style={{ fontSize: '0.9rem', color: '#d1d5db', fontWeight: 500 }}>Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  value={formData.name} 
                  onChange={handleChange}
                  placeholder="John Doe"
                  style={{
                    padding: '0.8rem 1rem',
                    background: '#1a1a1c',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '0.75rem',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '1rem'
                  }}
                />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <label htmlFor="email" style={{ fontSize: '0.9rem', color: '#d1d5db', fontWeight: 500 }}>Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange}
                  placeholder="john@example.com"
                  style={{
                    padding: '0.8rem 1rem',
                    background: '#1a1a1c',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '0.75rem',
                    color: '#fff',
                    outline: 'none',
                    fontSize: '1rem'
                  }}
                />
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ fontSize: '0.9rem', color: '#d1d5db', fontWeight: 500 }}>Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                required 
                value={formData.message} 
                onChange={handleChange}
                placeholder="Hello, I'd like to talk about..."
                style={{
                  padding: '0.8rem 1rem',
                  background: '#1a1a1c',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '0.75rem',
                  color: '#fff',
                  outline: 'none',
                  fontSize: '1rem',
                  resize: 'vertical'
                }}
              />
            </div>

            <button 
              type="submit"
              className="btn btn--primary"
              style={{
                width: '100%',
                marginTop: '1rem',
                justifyContent: 'center',
                background: '#0ea5e9',
                border: 'none',
                boxShadow: '0 4px 20px rgba(14,165,233,0.2)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '0.5rem' }}>
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
