import { Link } from 'react-router-dom';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-top pt-5 pb-4 mt-5" style={{ background: '#ffffff', borderColor: '#e2e8f0' }}>
      <div className="container px-3 px-md-4">
        <div className="row g-4 justify-content-between align-items-center">
          
          {/* Brand & Brief Tagline */}
          <div className="col-12 col-md-4 text-center text-md-start">
            <h5 className="fw-bold mb-2 fs-5" style={{ color: '#0f172a' }}>
              <span style={{ color: '#0284c7' }}>&lt;</span> Adunni <span style={{ color: '#0284c7' }}>/&gt;</span>
            </h5>
            <p className="small mb-0 fw-medium" style={{ color: '#334155' }}>
              Junior Front-End Developer & QA Tester building responsive, user-friendly websites with high software quality.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="col-12 col-md-4 text-center">
            <div className="d-flex justify-content-center gap-3 flex-wrap small">
              <Link to="/" className="text-decoration-none fw-semibold" style={{ color: '#1e293b' }}>Home</Link>
              <span style={{ color: '#94a3b8' }}>•</span>
              <Link to="/about" className="text-decoration-none fw-semibold" style={{ color: '#1e293b' }}>About</Link>
              <span style={{ color: '#94a3b8' }}>•</span>
              <Link to="/skills" className="text-decoration-none fw-semibold" style={{ color: '#1e293b' }}>Skills</Link>
              <span style={{ color: '#94a3b8' }}>•</span>
              <Link to="/services" className="text-decoration-none fw-semibold" style={{ color: '#1e293b' }}>Services</Link>
              <span style={{ color: '#94a3b8' }}>•</span>
              <Link to="/projects" className="text-decoration-none fw-semibold" style={{ color: '#1e293b' }}>Projects</Link>
              <span style={{ color: '#94a3b8' }}>•</span>
              <Link to="/contact" className="text-decoration-none fw-semibold" style={{ color: '#1e293b' }}>Contact</Link>
            </div>
          </div>

          {/* Back to Top Action */}
          <div className="col-12 col-md-4 text-center text-md-end">
            <button
              onClick={scrollToTop}
              className="btn btn-sky-outline btn-sm px-3 py-2"
              title="Back to Top"
            >
              <span>Back to Top</span>
              <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M18 15l-6-6-6 6"></path>
              </svg>
            </button>
          </div>

        </div>

        {/* Social Links Row */}
        <div className="d-flex justify-content-center align-items-center gap-3 my-4 flex-wrap">
          <a 
            href="https://github.com/aduntech2006" 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-neutral-pill btn-sm d-flex align-items-center gap-2"
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            <span>GitHub</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/abiodun-hussein-b99a11407" 
            target="_blank" 
            rel="noreferrer" 
            className="btn btn-neutral-pill btn-sm d-flex align-items-center gap-2"
          >
            <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
            </svg>
            <span>LinkedIn</span>
          </a>

          <a 
            href="tel:09115958843"
            className="btn btn-neutral-pill btn-sm d-flex align-items-center gap-2"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"></path>
            </svg>
            <span>09115958843</span>
          </a>

          <a 
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abiodunhussein0@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="btn btn-neutral-pill btn-sm d-flex align-items-center gap-2"
          >
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            <span>Email</span>
          </a>
        </div>

        {/* Divider */}
        <hr className="my-3" style={{ borderColor: '#e2e8f0' }} />

        {/* Copyright */}
        <div className="row align-items-center">
          <div className="col-12 text-center small fw-medium" style={{ color: '#334155' }}>
            Designed & Engineered by <span className="fw-bold" style={{ color: '#0f172a' }}>Hussein Barakat (Adunni)</span> © {new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
};
