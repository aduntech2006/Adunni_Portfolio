import { Link } from "react-router-dom";
import hero_image from "../images/WhatsApp Image 2026-10-15 at 07.36.55.jpeg";

export const About = () => {
  return (
    <div className="bg-light-main min-vh-100 py-5">
      <div className="container px-3 px-md-4">
        
        {/* Page Header */}
        <div className="text-center mb-5">
          <span className="pulse-badge mb-3">
            <span className="pulse-dot"></span>
            Profile & Engineering Philosophy
          </span>
          <h1 className="fw-bold fs-2 mb-2" style={{ color: '#0f172a' }}>About Me</h1>
          <div className="mx-auto divider-sky mb-3"></div>
          <p className="col-lg-8 mx-auto fw-medium" style={{ color: '#334155' }}>
            Full-Stack Developer & Software QA Specialist dedicated to building high-performance web applications and ensuring release reliability.
          </p>
        </div>

        {/* Profile & Bio Section */}
        <div className="row g-4 align-items-center mb-5">
          <div className="col-12 col-lg-5 text-center">
            <div className="card card-modern p-4">
              <div className="avatar-glow-ring mb-3 mx-auto" style={{ width: '160px', height: '160px' }}>
                <img 
                  src={hero_image} 
                  alt="Hussein Barakat" 
                  className="img-fluid w-100 h-100 object-fit-cover" 
                />
              </div>
              <h3 className="fw-bold fs-4 mb-1" style={{ color: '#0f172a' }}>Hussein Barakat</h3>
              <p className="small mb-3 fw-semibold" style={{ color: '#0284c7' }}>Full-Stack Engineer & QA Tester</p>
              <div className="d-flex justify-content-center gap-2 flex-wrap mb-3">
                <span className="badge-tech">React 19 / Vite</span>
                <span className="badge-tech">SQL (MySQL & PostgreSQL)</span>
                <span className="badge-tech">Git & GitHub</span>
                <span className="badge-tech">Manual QA Testing</span>
              </div>
              <div className="pt-3 border-top" style={{ borderColor: '#e2e8f0' }}>
                <span className="pulse-badge">
                  <span className="pulse-dot"></span>
                  Available for Remote Roles & Contracts
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="card card-modern p-4 p-md-5">
              <h3 className="fw-bold fs-4 mb-3" style={{ color: '#0f172a' }}>My Story & Engineering Approach</h3>
              <p className="lh-lg mb-3 fw-normal" style={{ color: '#1e293b' }}>
                I am a web developer with a dual passion for building user-centric interfaces and ensuring underlying system robustness. I build reactive SPAs with React, modern JavaScript ES6+, and Bootstrap 5, seamlessly backed by SQL (MySQL & PostgreSQL) database architectures and version-controlled collaborative Git & GitHub workflows.
              </p>
              <p className="lh-lg mb-4 fw-normal" style={{ color: '#1e293b' }}>
                What distinguishes my development process is a rigorous testing mindset. Having developed software and conducted comprehensive QA test suites, I don't just write code—I anticipate edge cases, audit HTTP status codes, construct reproducible bug logs, and verify accessibility across varied screen sizes and browsers before production deployment.
              </p>

              {/* Quick Info Grid */}
              <div className="row g-3 small border-top pt-3" style={{ borderColor: '#e2e8f0' }}>
                <div className="col-6 col-md-4">
                  <span className="d-block fw-semibold" style={{ color: '#0284c7' }}>Specialization</span>
                  <span className="fw-medium" style={{ color: '#0f172a' }}>Full-Stack & QA</span>
                </div>
                <div className="col-6 col-md-4">
                  <span className="d-block fw-semibold" style={{ color: '#0284c7' }}>Location / Mode</span>
                  <span className="fw-medium" style={{ color: '#0f172a' }}>Remote Worldwide</span>
                </div>
                <div className="col-6 col-md-4">
                  <span className="d-block fw-semibold" style={{ color: '#0284c7' }}>Availability</span>
                  <span className="fw-bold" style={{ color: '#059669' }}>Open to Offers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Methodology / Core Principles */}
        <div className="pt-4 mb-5">
          <div className="text-center mb-5">
            <h3 className="fw-bold fs-3 mb-2" style={{ color: '#0f172a' }}>Core Development Principles</h3>
            <div className="mx-auto divider-sky mb-3"></div>
            <p className="fw-medium" style={{ color: '#334155' }}>Three foundational pillars that guide my everyday engineering</p>
          </div>

          <div className="row g-4">
            {/* Pillar 1 */}
            <div className="col-12 col-md-4">
              <div className="card service-card p-4 h-100">
                <div className="mb-3">
                  <svg style={{ color: '#0284c7' }} width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                </div>
                <h4 className="fw-bold fs-5 mb-2" style={{ color: '#0f172a' }}>Clean Component Architecture</h4>
                <p className="small mb-0 lh-lg" style={{ color: '#1e293b' }}>
                  Writing maintainable, modular React components paired with responsive Bootstrap grid layouts for clean, scalable, and lightweight frontends.
                </p>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="col-12 col-md-4">
              <div className="card service-card p-4 h-100">
                <div className="mb-3">
                  <svg style={{ color: '#0284c7' }} width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
                <h4 className="fw-bold fs-5 mb-2" style={{ color: '#0f172a' }}>Defensive Backend Logic</h4>
                <p className="small mb-0 lh-lg" style={{ color: '#1e293b' }}>
                  Implementing safe database transactions with PDO prepared queries, bcrypt password hashing, input sanitization, and structured REST API endpoints.
                </p>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="col-12 col-md-4">
              <div className="card service-card p-4 h-100">
                <div className="mb-3">
                  <svg style={{ color: '#0284c7' }} width="32" height="32" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 11l3 3L22 4"></path>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                  </svg>
                </div>
                <h4 className="fw-bold fs-5 mb-2" style={{ color: '#0f172a' }}>Rigorous QA & Testing</h4>
                <p className="small mb-0 lh-lg" style={{ color: '#1e293b' }}>
                  Constructing manual test logs, functional edge-case matrices, Postman API inspections, and cross-browser responsiveness validation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Banner */}
        <div className="card profile-card p-4 p-md-5 text-center mt-5">
          <h3 className="fw-bold fs-3 mb-2" style={{ color: '#0f172a' }}>Interested in collaborating or discussing an open position?</h3>
          <p className="mb-4 col-lg-8 mx-auto fw-medium" style={{ color: '#1e293b' }}>
            Check out my production-ready work or get in touch directly to discuss technical projects and opportunities.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/projects" className="btn btn-sky-outline px-4 py-2">
              Explore Projects
            </Link>
            <Link to="/contact" className="btn btn-sky px-4 py-2">
              Get In Touch
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
