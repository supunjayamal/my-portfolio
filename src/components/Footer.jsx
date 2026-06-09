export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer" role="contentinfo" style={{
      padding: '2rem 0',
      textAlign: 'center',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      background: '#0a0a0a',
      marginTop: 'auto'
    }}>
      <div className="container">
        <p style={{
          color: '#a1a1aa',
          fontSize: '0.9rem',
          margin: 0,
          fontWeight: 500
        }}>
          © {year} Supun Karunathilaka. Designed &amp; Built with <span style={{ color: '#ef4444' }}>❤️</span>
        </p>
      </div>
    </footer>
  )
}
