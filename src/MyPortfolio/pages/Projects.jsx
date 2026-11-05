import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { projectsData } from "../data/projectsData";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState(null);

  // Filter & Search logic
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        activeFilter === "all" || project.category === activeFilter;

      const matchesSearch =
        searchQuery.trim() === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) =>
          tech.toLowerCase().includes(searchQuery.toLowerCase())
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <div className="bg-light-main min-vh-100 py-5">
      <div className="container px-3 px-md-4">
        
        {/* Page Header */}
        <div className="text-center mb-5">
          <span className="pulse-badge mb-3">
            <span className="pulse-dot"></span>
            Production Ready & QA Tested
          </span>
          <h1 className="fw-bold fs-2 mb-2" style={{ color: '#0f172a' }}>Featured Projects & Systems</h1>
          <div className="mx-auto divider-sky mb-3"></div>
          <p className="col-lg-8 mx-auto fw-medium" style={{ color: '#334155' }}>
            Explore a curated selection of full-stack web applications, dynamic frontends, secure PHP/MySQL database architectures, and rigorous QA software testing suites.
          </p>
        </div>

        {/* Filter & Search Bar Controls */}
        <div className="row g-3 justify-content-between align-items-center mb-5">
          {/* Category Filter Pills */}
          <div className="col-12 col-lg-8">
            <div className="d-flex gap-2 flex-wrap justify-content-center justify-content-lg-start">
              <button 
                onClick={() => setActiveFilter('all')}
                className={`btn btn-tab-filter btn-sm ${activeFilter === 'all' ? 'active' : ''}`}
              >
                All ({projectsData.length})
              </button>
              <button 
                onClick={() => setActiveFilter('fullstack')}
                className={`btn btn-tab-filter btn-sm ${activeFilter === 'fullstack' ? 'active' : ''}`}
              >
                Full-Stack & Frontend
              </button>
              <button 
                onClick={() => setActiveFilter('backend')}
                className={`btn btn-tab-filter btn-sm ${activeFilter === 'backend' ? 'active' : ''}`}
              >
                Backend & Database
              </button>
              <button 
                onClick={() => setActiveFilter('qa')}
                className={`btn btn-tab-filter btn-sm ${activeFilter === 'qa' ? 'active' : ''}`}
              >
                QA & Testing
              </button>
            </div>
          </div>

          {/* Search Input Filter */}
          <div className="col-12 col-lg-4">
            <div className="position-relative">
              <input
                type="text"
                placeholder="Search projects (e.g. React, PHP, QA)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-control form-control-sm form-control-modern px-3 py-2"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="btn btn-sm btn-link position-absolute end-0 top-50 translate-middle-y me-2 text-decoration-none"
                  style={{ color: '#94a3b8' }}
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Empty state if search returns nothing */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-5">
            <h4 className="fw-bold mb-2" style={{ color: '#0f172a' }}>No projects found</h4>
            <p className="small" style={{ color: '#64748b' }}>No results matching "{searchQuery}". Try a different keyword or reset filters.</p>
            <button 
              onClick={() => { setActiveFilter('all'); setSearchQuery(''); }}
              className="btn btn-sky-outline btn-sm px-4 mt-2"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Projects Grid */}
        <div className="row g-4 mb-5">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col-12 col-md-6 col-lg-4">
              <div className="card project-card h-100 d-flex flex-column overflow-hidden">
                
                {/* Project Image Thumbnail */}
                <div className="project-img-wrapper" style={{ height: '210px' }}>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-100 h-100 object-fit-cover"
                    loading="lazy"
                  />
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge-category shadow-sm">
                      {project.badge}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 d-flex flex-column flex-grow-1 justify-content-between">
                  <div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <span className="small fw-bold" style={{ color: '#0284c7' }}>{project.categoryLabel}</span>
                      <span className="small fw-semibold" style={{ color: '#334155' }}>{project.type}</span>
                    </div>

                    <h3 className="fw-bold fs-5 mb-2" style={{ color: '#0f172a' }}>{project.title}</h3>
                    <p className="small mb-3 lh-lg fw-normal" style={{ color: '#1e293b' }}>{project.summary}</p>
                    
                    {/* Tech Stack Badges */}
                    <div className="d-flex gap-1 flex-wrap mb-4">
                      {project.techStack.map((tech, techIdx) => (
                        <span key={techIdx} className="badge-tech">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons Row with REVAMPED BUTTONS & DUMMY LINKS */}
                  <div className="pt-3 border-top d-flex flex-wrap gap-2 align-items-center justify-content-between mt-auto" style={{ borderColor: '#e2e8f0' }}>
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
                      <span>Code</span>
                    </a>

                    {/* Modal Details Trigger Button */}
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

        {/* Project Details Modal */}
        {activeProject && (
          <div className="modal show fade d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(15, 23, 42, 0.65)' }}>
            <div className="modal-dialog modal-dialog-centered modal-lg">
              <div className="modal-content modal-content-light">
                
                {/* Modal Header */}
                <div className="modal-header border-bottom px-4 py-3" style={{ borderColor: '#e2e8f0' }}>
                  <div>
                    <span className="badge-category me-2">{activeProject.categoryLabel}</span>
                    <h5 className="modal-title fw-bold fs-5 d-inline-block" style={{ color: '#0f172a' }}>{activeProject.title}</h5>
                  </div>
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setActiveProject(null)}
                  ></button>
                </div>

                {/* Modal Body */}
                <div className="modal-body p-4">
                  <div className="mb-4 rounded-3 overflow-hidden border shadow-sm" style={{ maxHeight: '340px', borderColor: '#e2e8f0' }}>
                    <img 
                      src={activeProject.image} 
                      alt={activeProject.title} 
                      className="img-fluid w-100 object-fit-cover"
                    />
                  </div>

                  <p className="lh-lg mb-4" style={{ color: '#334155' }}>{activeProject.description}</p>

                  <h6 className="fw-semibold mb-3" style={{ color: '#0284c7' }}>Key Features & Architecture Highlights:</h6>
                  <ul className="list-unstyled mb-4" style={{ color: '#1e293b' }}>
                    {activeProject.features.map((feat, fIdx) => (
                      <li key={fIdx} className="mb-2 d-flex align-items-start gap-2 small">
                        <span className="fw-bold" style={{ color: '#0284c7' }}>✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <h6 className="fw-semibold mb-2" style={{ color: '#0284c7' }}>Technologies Used:</h6>
                  <div className="d-flex gap-2 flex-wrap">
                    {activeProject.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="badge-tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Modal Footer with DUMMY ACTION LINKS */}
                <div className="modal-footer border-top px-4 py-3 d-flex justify-content-between flex-wrap gap-2" style={{ borderColor: '#e2e8f0' }}>
                  <a 
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-dark-pill btn-sm"
                  >
                    View Source Code
                  </a>
                  
                  <div className="d-flex gap-2">
                    <button 
                      type="button" 
                      className="btn btn-neutral-pill btn-sm" 
                      onClick={() => setActiveProject(null)}
                    >
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

        {/* CTA Banner */}
        <div className="card profile-card p-4 p-md-5 text-center mt-5">
          <h3 className="fw-bold fs-3 mb-2" style={{ color: '#0f172a' }}>Have a custom web solution or QA test cycle in mind?</h3>
          <p className="mb-4 col-lg-8 mx-auto fw-medium" style={{ color: '#1e293b' }}>
            Whether you need a dynamic React frontend, a secure PHP/MySQL backend, or an end-to-end QA audit, I am ready to collaborate.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/contact" className="btn btn-sky px-5 py-2">
              Get In Touch
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
