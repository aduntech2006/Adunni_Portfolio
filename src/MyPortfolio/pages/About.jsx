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
            Profile & Resume Background
          </span>
          <h1 className="fw-bold fs-2 mb-2" style={{ color: '#0f172a' }}>About Me</h1>
          <div className="mx-auto divider-sky mb-3"></div>
          <p className="col-lg-8 mx-auto fw-medium" style={{ color: '#334155' }}>
            Junior Front-End Developer & Quality Assurance Tester dedicated to building responsive, user-friendly websites and ensuring software release quality.
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
              <p className="small mb-3 fw-semibold" style={{ color: '#0284c7' }}>Junior Front-End Developer | QA Tester</p>
              
              <div className="d-flex justify-content-center gap-2 flex-wrap mb-3">
                <span className="badge-tech">React.js</span>
                <span className="badge-tech">JavaScript</span>
                <span className="badge-tech">HTML5 & CSS3</span>
                <span className="badge-tech">Bootstrap</span>
                <span className="badge-tech">Node.js & Express</span>
                <span className="badge-tech">SQL (MySQL & PostgreSQL)</span>
                <span className="badge-tech">Git & GitHub</span>
                <span className="badge-tech">Manual QA Testing</span>
              </div>

              <div className="pt-3 border-top" style={{ borderColor: '#e2e8f0' }}>
                <span className="pulse-badge">
                  <span className="pulse-dot"></span>
                  Available for Remote & On-site Opportunities
                </span>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-7">
            <div className="card card-modern p-4 p-md-5">
              <span className="badge-category mb-2 d-inline-block">Professional Profile</span>
              <h3 className="fw-bold fs-4 mb-3" style={{ color: '#0f172a' }}>Front-End Engineering & QA Testing</h3>
              
              <p className="lh-lg mb-3 fw-normal" style={{ color: '#1e293b' }}>
                Motivated and detail-oriented Junior Front-End Developer and Quality Assurance Tester with strong competencies in HTML5, CSS3, Bootstrap, JavaScript, and React.js, complemented by back-end foundations in Node.js, Express, and SQL (MySQL & PostgreSQL).
              </p>
              <p className="lh-lg mb-4 fw-normal" style={{ color: '#1e293b' }}>
                Focused on developing responsive, user-friendly web interfaces and ensuring robust software quality through comprehensive manual testing and structured bug reporting. With hands-on experience building independent web applications under Aduntech Solutions, I bring an analytical problem-solving approach, dedication to clean code, and continuous learning to high-performing engineering teams.
              </p>

              {/* Career Focus Strip */}
              <div className="p-3 rounded-3 mb-4" style={{ background: '#f0f9ff', border: '1px solid #bae6fd' }}>
                <span className="d-block fw-bold small text-uppercase mb-1" style={{ color: '#0284c7', letterSpacing: '0.5px' }}>Core Focus & Direction</span>
                <p className="small mb-0 lh-base fw-medium" style={{ color: '#0f172a' }}>
                  Dedicated to delivering high-impact Front-End development and Quality Assurance solutions, collaborating with engineering teams to build performant, accessible websites, and elevating product reliability.
                </p>
              </div>

              {/* Quick Info Grid */}
              <div className="row g-3 small border-top pt-3" style={{ borderColor: '#e2e8f0' }}>
                <div className="col-6 col-md-4">
                  <span className="d-block fw-semibold" style={{ color: '#0284c7' }}>Location</span>
                  <span className="fw-medium" style={{ color: '#0f172a' }}>Ota, Ogun State, Nigeria</span>
                </div>
                <div className="col-6 col-md-4">
                  <span className="d-block fw-semibold" style={{ color: '#0284c7' }}>Phone</span>
                  <a href="tel:09115958843" className="fw-medium text-decoration-none" style={{ color: '#0f172a' }}>09115958843</a>
                </div>
                <div className="col-6 col-md-4">
                  <span className="d-block fw-semibold" style={{ color: '#0284c7' }}>Email</span>
                  <a href="mailto:abiodunhussein0@gmail.com" className="fw-medium text-decoration-none" style={{ color: '#0f172a' }}>abiodunhussein0@gmail.com</a>
                </div>
                <div className="col-6 col-md-4">
                  <span className="d-block fw-semibold" style={{ color: '#0284c7' }}>GitHub</span>
                  <a href="https://github.com/aduntech2006" target="_blank" rel="noreferrer" className="fw-medium text-decoration-none" style={{ color: '#0284c7' }}>aduntech2006 ↗</a>
                </div>
                <div className="col-6 col-md-4">
                  <span className="d-block fw-semibold" style={{ color: '#0284c7' }}>LinkedIn</span>
                  <a href="https://www.linkedin.com/in/abiodun-hussein-b99a11407" target="_blank" rel="noreferrer" className="fw-medium text-decoration-none" style={{ color: '#0284c7' }}>Hussein Barakat ↗</a>
                </div>
                <div className="col-6 col-md-4">
                  <span className="d-block fw-semibold" style={{ color: '#0284c7' }}>Status</span>
                  <span className="fw-bold" style={{ color: '#059669' }}>Open to Offers</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Experience - Aduntech Solutions */}
        <div className="mb-5">
          <div className="text-center mb-4">
            <span className="pulse-badge mb-2">
              <span className="pulse-dot"></span>
              Hands-On Track Record
            </span>
            <h3 className="fw-bold fs-3 mb-2" style={{ color: '#0f172a' }}>Project Experience</h3>
            <div className="mx-auto divider-sky mb-3"></div>
            <p className="fw-medium" style={{ color: '#334155' }}>Personal Web Development Projects under Aduntech Solutions (Independent Projects)</p>
          </div>

          <div className="card card-modern p-4 p-md-5">
            <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3 pb-3 border-bottom" style={{ borderColor: '#e2e8f0' }}>
              <div>
                <h4 className="fw-bold fs-5 mb-0" style={{ color: '#0f172a' }}>Aduntech Solutions</h4>
                <span className="small fw-semibold" style={{ color: '#0284c7' }}>Independent Web Development & QA Projects</span>
              </div>
              <span className="badge-category">Hands-On Practice</span>
            </div>

            <div className="row g-3">
              <div className="col-12 col-md-6">
                <div className="d-flex align-items-start gap-2 mb-3">
                  <span className="fw-bold" style={{ color: '#0284c7' }}>✓</span>
                  <span className="small lh-base" style={{ color: '#1e293b' }}>
                    <strong>Website Interface Development:</strong> Developed dynamic and accessible website interfaces using HTML, CSS, Bootstrap, and JavaScript.
                  </span>
                </div>
                <div className="d-flex align-items-start gap-2 mb-3">
                  <span className="fw-bold" style={{ color: '#0284c7' }}>✓</span>
                  <span className="small lh-base" style={{ color: '#1e293b' }}>
                    <strong>Responsive Design:</strong> Built responsive website layouts seamlessly adapted for mobile, tablet, and desktop screen sizes.
                  </span>
                </div>
                <div className="d-flex align-items-start gap-2 mb-3">
                  <span className="fw-bold" style={{ color: '#0284c7' }}>✓</span>
                  <span className="small lh-base" style={{ color: '#1e293b' }}>
                    <strong>Interactive Shopping Cart:</strong> Created interactive shopping cart drawers with fluid open and close modal drawer functionality.
                  </span>
                </div>
                <div className="d-flex align-items-start gap-2">
                  <span className="fw-bold" style={{ color: '#0284c7' }}>✓</span>
                  <span className="small lh-base" style={{ color: '#1e293b' }}>
                    <strong>Product Grids & Filtering:</strong> Developed structured product catalog grids featuring live category filtering functionality.
                  </span>
                </div>
              </div>

              <div className="col-12 col-md-6">
                <div className="d-flex align-items-start gap-2 mb-3">
                  <span className="fw-bold" style={{ color: '#0284c7' }}>✓</span>
                  <span className="small lh-base" style={{ color: '#1e293b' }}>
                    <strong>Navigation Components:</strong> Engineered reusable navigation systems including responsive navbars and informational footers.
                  </span>
                </div>
                <div className="d-flex align-items-start gap-2 mb-3">
                  <span className="fw-bold" style={{ color: '#0284c7' }}>✓</span>
                  <span className="small lh-base" style={{ color: '#1e293b' }}>
                    <strong>Interactivity Logic:</strong> Implemented modern JavaScript features and DOM events to improve user interaction and engagement.
                  </span>
                </div>
                <div className="d-flex align-items-start gap-2">
                  <span className="fw-bold" style={{ color: '#0284c7' }}>✓</span>
                  <span className="small lh-base" style={{ color: '#1e293b' }}>
                    <strong>Usability & UX:</strong> Continuous audit and refinement of website usability, accessibility, and smooth user flow experience.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quality Assurance & Professional Strengths Row */}
        <div className="row g-4 mb-5">
          
          {/* QA Knowledge Column */}
          <div className="col-12 col-lg-6">
            <div className="card service-card p-4 h-100">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="p-3 rounded-3" style={{ background: '#f0f9ff', color: '#0284c7' }}>
                  <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M9 11l3 3L22 4"></path>
                    <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="fw-bold fs-5 mb-0" style={{ color: '#0f172a' }}>Quality Assurance Knowledge</h4>
                  <span className="small" style={{ color: '#0284c7' }}>Testing & Bug Reporting</span>
                </div>
              </div>

              <ul className="list-unstyled mb-0 small lh-lg" style={{ color: '#1e293b' }}>
                <li className="mb-2 d-flex align-items-start gap-2">
                  <span className="fw-bold" style={{ color: '#0284c7' }}>•</span>
                  <span><strong>Manual Software Testing:</strong> Solid foundational understanding of manual test cases and smoke testing flows.</span>
                </li>
                <li className="mb-2 d-flex align-items-start gap-2">
                  <span className="fw-bold" style={{ color: '#0284c7' }}>•</span>
                  <span><strong>Bug Identification & Reporting:</strong> Ability to detect website errors, reproduce defects, and document actionable bug reports.</span>
                </li>
                <li className="mb-2 d-flex align-items-start gap-2">
                  <span className="fw-bold" style={{ color: '#0284c7' }}>•</span>
                  <span><strong>Functionality Audits:</strong> Basic understanding of website functionality testing, input boundaries, and broken link checks.</span>
                </li>
                <li className="mb-2 d-flex align-items-start gap-2">
                  <span className="fw-bold" style={{ color: '#0284c7' }}>•</span>
                  <span><strong>Usability & Quality:</strong> Deep appreciation of responsiveness, visual hierarchy, and end-user satisfaction.</span>
                </li>
                <li className="d-flex align-items-start gap-2">
                  <span className="fw-bold" style={{ color: '#0284c7' }}>•</span>
                  <span><strong>Continuous Learning:</strong> Passionate interest in adopting modern automated testing suites and QA standards.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Professional Strengths Column */}
          <div className="col-12 col-lg-6">
            <div className="card service-card p-4 h-100">
              <div className="d-flex align-items-center gap-3 mb-3">
                <div className="p-3 rounded-3" style={{ background: '#f0f9ff', color: '#0284c7' }}>
                  <svg width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 14 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="fw-bold fs-5 mb-0" style={{ color: '#0f172a' }}>Professional Strengths</h4>
                  <span className="small" style={{ color: '#0284c7' }}>Core Competencies & Work Ethic</span>
                </div>
              </div>

              <div className="d-flex flex-wrap gap-2 mb-3">
                <span className="badge-tech">Problem-Solving Skills</span>
                <span className="badge-tech">Attention to Detail</span>
                <span className="badge-tech">Willingness to Learn & Improve</span>
                <span className="badge-tech">Independent Work</span>
                <span className="badge-tech">Teamwork & Collaboration</span>
                <span className="badge-tech">Good Communication Skills</span>
                <span className="badge-tech">Passion for Technology & Innovation</span>
              </div>

              <p className="small mb-0 lh-lg" style={{ color: '#1e293b' }}>
                Combines a disciplined analytical mindset with strong curiosity. Able to collaborate proactively with cross-functional teams, communicate technical concepts clearly, and adapt rapidly to new tools and frameworks.
              </p>
            </div>
          </div>

        </div>

        {/* CTA Banner */}
        <div className="card profile-card p-4 p-md-5 text-center">
          <h3 className="fw-bold fs-3 mb-2" style={{ color: '#0f172a' }}>Interested in collaborating on web development or QA testing?</h3>
          <p className="mb-4 col-lg-8 mx-auto fw-medium" style={{ color: '#1e293b' }}>
            I am eager to contribute my Front-End engineering and QA testing capabilities to your team and projects. Let's connect!
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <Link to="/projects" className="btn btn-sky-outline px-4 py-2">
              View Projects
            </Link>
            <Link to="/contact" className="btn btn-sky px-4 py-2">
              Contact Me
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
