import { useState } from "react";
import { Link } from "react-router-dom";
import hero_image from "../images/image.png";
import { projectsData } from "../data/projectsData";

export const Home = () => {
  const [activeProject, setActiveProject] = useState(null);

  // Take the first 4 projects as featured
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <div className="bg-light-main min-vh-100 py-5">
      <div className="container px-3 px-md-4">
        
        {/* Hero Section */}
        <div className="row align-items-center justify-content-between min-vh-75 mb-5 py-4">
          
          {/* Profile Picture Column */}
          <div className="col-12 col-lg-5 text-center mb-5 mb-lg-0 order-1 order-lg-2">
            <div className="avatar-glow-ring">
              <img 
                src={hero_image}
                alt="Hussein Barakat" 
                className="img-fluid"
                style={{ width: '250px', height: '250px', objectFit: 'cover' }}
                loading="eager"
              />
            </div>
            
            {/* Quick Tech Badge Below Avatar */}
            <div className="mt-3">
              <span className="badge-tech d-inline-block px-3 py-2">
                React • PHP • MySQL • QA Testing
              </span>
            </div>
          </div>

          {/* Text Content Column */}
          <div className="col-12 col-lg-7 text-center text-lg-start order-2 order-lg-1">
            <div className="mb-3">
              <span className="pulse-badge">
                <span className="pulse-dot"></span>
                Available for Full-Time & Freelance Roles
              </span>
            </div>

            <h2 className="fw-bold mb-2 fs-5" style={{ color: '#0284c7' }}>Hello, I'm</h2>
            <h1 className="fw-bold mb-3 display-4" style={{ color: '#0f172a' }}>
              Hussein Barakat <span className="fs-3 fw-medium" style={{ color: '#334155' }}>/ Adunni</span>
            </h1>
            
            <h3 className="fw-bold mb-3 fs-4 text-gradient-sky">
              Full-Stack Web Developer & Software QA Specialist
            </h3>

            <p className="lead mb-4 fs-6 lh-lg fw-normal" style={{ color: '#1e293b' }}>
              I architect responsive, production-ready web applications using React, modern JavaScript, PHP PDO, and secure relational databases. By uniting full-stack engineering with rigorous manual QA and API error auditing, I build software that is fast, resilient, and dependable.
            </p>

            <div className="d-flex justify-content-center justify-content-lg-start gap-3 flex-wrap">
              <Link to="/projects" className="btn btn-sky px-4 py-2">
                <span>Explore Projects</span>
                <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </Link>
              <Link to="/contact" className="btn btn-sky-outline px-4 py-2">
                Contact Me
              </Link>
              <Link to="/skills" className="btn btn-neutral-pill px-4 py-2">
                View Tech Stack
              </Link>
            </div>
          </div>

        </div>

        {/* Quick Highlights / Metrics Strip */}
        <div className="row g-3 mb-5 text-center">
          <div className="col-6 col-md-3">
            <div className="card card-modern p-3 h-100">
              <span className="fw-bold fs-3" style={{ color: '#0284c7' }}>6+</span>
              <span className="small fw-semibold" style={{ color: '#1e293b' }}>Production Projects</span>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card card-modern p-3 h-100">
              <span className="fw-bold fs-3" style={{ color: '#0284c7' }}>100%</span>
              <span className="small fw-semibold" style={{ color: '#1e293b' }}>Mobile Responsive</span>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card card-modern p-3 h-100">
              <span className="fw-bold fs-3" style={{ color: '#0284c7' }}>PDO / SQL</span>
              <span className="small fw-semibold" style={{ color: '#1e293b' }}>Defensive Security</span>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="card card-modern p-3 h-100">
              <span className="fw-bold fs-3" style={{ color: '#0284c7' }}>QA Audited</span>
              <span className="small fw-semibold" style={{ color: '#1e293b' }}>Manual & API Testing</span>
            </div>
          </div>
        </div>

        {/* Engineering Profile Card Section */}
        <div className="pt-4 mt-2">
          <div className="text-center mb-4">
            <h2 className="fw-bold text-uppercase fs-2 mb-2" style={{ color: '#0f172a' }}>Engineering Profile</h2>
            <div className="mx-auto divider-sky mb-3"></div>
            <p className="fw-medium" style={{ color: '#334155' }}>Bridging high-performance backend architecture with fluid client experiences</p>
          </div>

          <div className="card profile-card p-4 p-md-5">
            <div className="row align-items-center g-4">
              {/* Left Column */}
              <div className="col-12 col-lg-4 text-center text-lg-start border-bottom border-bottom-lg-0 border-end-0 border-end-lg pb-4 pb-lg-0 pe-lg-4" style={{ borderColor: '#cbd5e1' }}>
                <span className="badge-category mb-3 d-inline-block">
                  Full-Stack & QA
                </span>
                <h3 className="fw-bold fs-3 mb-2" style={{ color: '#0f172a' }}>Hussein Barakat</h3>
                <p className="small mb-0 fw-medium" style={{ color: '#334155' }}>
                  Focused on building clean components, secure database transactions, and rigorous QA verification.
                </p>
              </div>

              {/* Right Column */}
              <div className="col-12 col-lg-8 ps-lg-4 text-center text-lg-start">
                <p className="fs-6 lh-lg mb-0 fw-normal" style={{ color: '#1e293b' }}>
                  I design and build end-to-end web applications—from crafting dynamic user interfaces with React and Bootstrap to engineering server-side logic with PHP and MySQL. With a strong discipline in manual software testing, bug documentation, and network HTTP analysis, I eliminate regressions and deliver seamless performance across desktop and mobile browsers.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Projects Section */}
        <div className="pt-5 mt-5">
          <div className="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-5">
            <div>
              <span className="fw-bold small text-uppercase" style={{ color: '#0284c7', letterSpacing: '1px' }}>Showcase</span>
              <h2 className="fw-bold fs-2 mb-1" style={{ color: '#0f172a' }}>Featured Projects</h2>
              <div className="divider-sky mb-2"></div>
              <p className="mb-0 fw-medium" style={{ color: '#334155' }}>Production-ready applications, e-commerce storefronts, and QA audit suites.</p>
            </div>
            <div>
              <Link to="/projects" className="btn btn-sky-outline btn-sm">
                <span>View All Projects ({projectsData.length})</span>
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className="row g-4">
            {featuredProjects.map((project) => (
              <div key={project.id} className="col-12 col-lg-6">
                <div className="card project-card h-100 d-flex flex-column overflow-hidden">
                  
                  {/* Thumbnail */}
                  <div className="project-img-wrapper" style={{ height: '220px' }}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-100 h-100 object-fit-cover"
                      loading="lazy"
                    />
                    <div className="position-absolute top-0 end-0 m-3 d-flex gap-2">
                      <span className="badge-category shadow-sm">
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="card-body p-4 d-flex flex-column justify-content-between flex-grow-1">
                    <div>
                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="small fw-bold" style={{ color: '#0284c7' }}>{project.categoryLabel}</span>
                        <span className="small fw-semibold" style={{ color: '#334155' }}>{project.type}</span>
                      </div>
                      
                      <h3 className="fw-bold fs-5 mb-2" style={{ color: '#0f172a' }}>{project.title}</h3>
                      <p className="small lh-lg mb-3 fw-normal" style={{ color: '#1e293b' }}>
                        {project.summary}
                      </p>
                      
                      {/* Tech Badges */}
                      <div className="d-flex flex-wrap gap-2 mb-4">
                        {project.techStack.map((tag, i) => (
                          <span key={i} className="badge-tech">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions with REVAMPED BUTTONS & DUMMY LINKS */}
                    <div className="pt-3 border-top d-flex flex-wrap justify-content-between align-items-center gap-2" style={{ borderColor: '#cbd5e1' }}>
                      {/* Live Demo Dummy Link */}
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-sky btn-sm"
                        title="Open Live Demo (Dummy link - replace later)"
                      >
                        <span>Live Demo</span>
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                      </a>

                      {/* GitHub Repo Dummy Link */}
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn btn-dark-pill btn-sm"
                        title="View GitHub Repository (Dummy link - replace later)"
                      >
                        <svg width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.22 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                        <span>GitHub</span>
                      </a>

                      {/* Modal Architecture Trigger */}
                      <button 
                        onClick={() => setActiveProject(project)} 
                        className="btn btn-neutral-pill btn-sm"
                      >
                        Details
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for Project Highlights */}
        {activeProject && (
          <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(15, 23, 42, 0.65)' }} tabIndex="-1">
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content modal-content-light">
                <div className="modal-header border-bottom px-4 py-3" style={{ borderColor: '#cbd5e1' }}>
                  <div>
                    <span className="badge-category me-2">{activeProject.categoryLabel}</span>
                    <h5 className="modal-title fw-bold d-inline-block fs-5" style={{ color: '#0f172a' }}>{activeProject.title}</h5>
                  </div>
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setActiveProject(null)}
                  ></button>
                </div>

                <div className="modal-body p-4">
                  {/* Screenshot Container */}
                  <div className="mb-4 rounded-3 overflow-hidden border shadow-sm" style={{ maxHeight: '340px', borderColor: '#cbd5e1' }}>
                    <img 
                      src={activeProject.image} 
                      alt={activeProject.title} 
                      className="img-fluid w-100 object-fit-cover" 
                    />
                  </div>

                  <p className="small lh-lg mb-4 fw-normal" style={{ color: '#1e293b' }}>
                    {activeProject.description}
                  </p>

                  <h6 className="fw-bold mb-2 fs-6" style={{ color: '#0284c7' }}>Key Highlights & Architecture</h6>
                  <ul className="small lh-lg mb-4 list-unstyled" style={{ color: '#1e293b' }}>
                    {activeProject.features.map((feature, id) => (
                      <li key={id} className="d-flex align-items-start gap-2 mb-2">
                        <span className="fw-bold" style={{ color: '#0284c7' }}>✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <h6 className="fw-bold mb-2 fs-6" style={{ color: '#0284c7' }}>Technologies Used</h6>
                  <div className="d-flex flex-wrap gap-2 mb-2">
                    {activeProject.techStack.map((tag, i) => (
                      <span key={i} className="badge-tech">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-footer border-top d-flex justify-content-between flex-wrap gap-2 px-4 py-3" style={{ borderColor: '#cbd5e1' }}>
                  <a 
                    href={activeProject.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-dark-pill btn-sm"
                  >
                    View Repository
                  </a>
                  <div className="d-flex gap-2">
                    <button onClick={() => setActiveProject(null)} className="btn btn-neutral-pill btn-sm">
                      Close
                    </button>
                    <a 
                      href={activeProject.demoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-sky btn-sm"
                    >
                      Open Live Demo ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services Overview Section */}
        <div className="pt-5 mt-5">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-uppercase fs-2 mb-2" style={{ color: '#0f172a' }}>Core Services</h2>
            <div className="mx-auto divider-sky mb-3"></div>
            <p className="fw-medium" style={{ color: '#334155' }}>Comprehensive web engineering and testing solutions</p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="card service-card p-4 h-100 text-center text-md-start">
                <div className="fs-1 mb-3" style={{ color: '#0284c7' }}>💻</div>
                <h4 className="fw-bold fs-5 mb-2" style={{ color: '#0f172a' }}>Frontend Engineering</h4>
                <p className="small mb-0 lh-base fw-normal" style={{ color: '#334155' }}>
                  Fast, reactive, and responsive SPAs engineered with React, JavaScript ES6+, and Bootstrap 5.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="card service-card p-4 h-100 text-center text-md-start">
                <div className="fs-1 mb-3" style={{ color: '#0284c7' }}>⚙️</div>
                <h4 className="fw-bold fs-5 mb-2" style={{ color: '#0f172a' }}>Backend & Database</h4>
                <p className="small mb-0 lh-base fw-normal" style={{ color: '#334155' }}>
                  Server-side logic, secure PDO prepared queries, REST APIs, and MySQL relational schemas.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="card service-card p-4 h-100 text-center text-md-start">
                <div className="fs-1 mb-3" style={{ color: '#0284c7' }}>🔍</div>
                <h4 className="fw-bold fs-5 mb-2" style={{ color: '#0f172a' }}>QA & Software Testing</h4>
                <p className="small mb-0 lh-base fw-normal" style={{ color: '#334155' }}>
                  Manual testing logs, bug reproduction, HTTP network error analysis, and cross-browser audits.
                </p>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-3">
              <div className="card service-card p-4 h-100 text-center text-md-start">
                <div className="fs-1 mb-3" style={{ color: '#0284c7' }}>📱</div>
                <h4 className="fw-bold fs-5 mb-2" style={{ color: '#0f172a' }}>Mobile-First UI/UX</h4>
                <p className="small mb-0 lh-base fw-normal" style={{ color: '#334155' }}>
                  Ensuring zero layout shifts, fluid handheld ergonomics, and adaptive design across all screen widths.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="pt-5 mt-5 pb-4">
          <div className="card profile-card p-4 p-md-5 text-center">
            <span className="pulse-badge mx-auto mb-3">
              <span className="pulse-dot"></span>
              Let's Build Together
            </span>
            <h2 className="fw-bold fs-3 mb-2" style={{ color: '#0f172a' }}>Have a project in mind or an open role?</h2>
            <p className="col-lg-7 mx-auto mb-4 fw-normal" style={{ color: '#1e293b' }}>
              I am available for full-stack engineering roles, freelance web development, and QA testing contracts. Let's discuss your requirements.
            </p>
            <div className="d-flex justify-content-center gap-3 flex-wrap">
              <Link to="/contact" className="btn btn-sky px-5 py-2">
                Get In Touch Now
              </Link>
              <a 
                href="https://mail.google.com/mail/?view=cm&fs=1&to=abiodunhussein0@gmail.com" 
                target="_blank" 
                rel="noreferrer" 
                className="btn btn-sky-outline px-4 py-2"
              >
                Send Direct Email
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
