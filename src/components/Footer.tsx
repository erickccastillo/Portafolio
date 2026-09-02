import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={{
      backgroundColor: 'var(--card-bg)',
      padding: '1.5rem',
      textAlign: 'center',
      color: 'var(--text-muted)',
      marginTop: 'auto',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.1)'
    }}>
      <p style={{ marginBottom: '0.5rem' }}>
        &copy; 2026 Tu Nombre | Desarrollador Full-Stack
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
        <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noreferrer" style={footerLinkStyle}>
          LinkedIn
        </a>
        <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer" style={footerLinkStyle}>
          GitHub
        </a>
      </div>
    </footer>
  );
};

const footerLinkStyle = {
  color: 'var(--accent-color)',
  textDecoration: 'none',
  fontSize: '0.9rem'
};

export default Footer;