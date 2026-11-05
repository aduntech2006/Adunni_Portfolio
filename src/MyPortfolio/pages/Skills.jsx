import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const skillsCategories = [
    {
      category: 'frontend',
      categoryTitle: 'Frontend Development',
      icon: (
        <svg style={{ color: '#0284c7' }} width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      skills: [
        { name: 'React 19 & Vite', level: 'Advanced', description: 'Component-driven SPA architectures, hooks, custom states, dynamic routing, and fast HMR builds.' },
        { name: 'JavaScript (ES6+)', level: 'Advanced', description: 'Async/await, DOM manipulation, functional programming, event delegation, and JSON payload handling.' },
        { name: 'Bootstrap 5 & Custom CSS', level: 'Expert', description: 'Mobile-first responsive grids, flexbox layouts, utility systems, and bespoke light-theme micro-interactions.' },
        { name: 'HTML5 & Semantic Markup', level: 'Expert', description: 'Accessible DOM structuring, web standards, clean form validation, and SEO best practices.' },
        { name: 'AJAX & Fetch API', level: 'Advanced', description: 'Asynchronous HTTP communications, promise handling, and dynamic UI state synchronization.' }
      ]
    },
    {
      category: 'backend',
      categoryTitle: 'Backend & Database Systems',
      icon: (
        <svg style={{ color: '#0284c7' }} width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
      skills: [
        { name: 'PHP 8 Server Architecture', level: 'Advanced', description: 'Modular backend scripting, session handling, server-side data processing, and routing.' },
        { name: 'MySQL Databases', level: 'Advanced', description: 'Relational schema design, normalization, foreign keys, indexing, and aggregate data queries.' },
        { name: 'PHP PDO & Prepared Statements', level: 'Expert', description: 'Defensive database query execution, SQL injection mitigation, and transaction safety.' },
        { name: 'RESTful API Engineering', level: 'Advanced', description: 'Structured JSON endpoints, parameter sanitization, and standardized HTTP response codes.' },
        { name: 'Authentication & Security', level: 'Advanced', description: 'Bcrypt password hashing, token validation, CORS configuration, and security headers.' }
      ]
    },
    {
      category: 'qa',
      categoryTitle: 'Software QA & Testing',
      icon: (
        <svg style={{ color: '#0284c7' }} width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M9 11l3 3L22 4"></path>
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"></path>
        </svg>
      ),
      skills: [
        { name: 'Manual System & Smoke Testing', level: 'Expert', description: 'Systematic execution of test flows, edge cases, user story compliance, and bug discovery.' },
        { name: 'Bug Tracking & Documentation', level: 'Expert', description: 'Clear step-by-step reproduction steps, severity triage, logs, and resolution tracking.' },
        { name: 'HTTP & Network Error Auditing', level: 'Advanced', description: 'Diagnostic inspection of headers, payload sizes, 4xx/5xx responses, and network latency.' },
        { name: 'Postman API Testing', level: 'Advanced', description: 'Endpoint verification, payload validation, mock requests, and status code verification.' },
        { name: 'Cross-Device & Browser Audits', level: 'Expert', description: 'Viewport testing across desktop browsers (Chrome, Firefox, Safari) and iOS/Android viewports.' }
      ]
    },
    {
      category: 'tools',
      categoryTitle: 'Developer Tools & Workflow',
      icon: (
        <svg style={{ color: '#0284c7' }} width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      ),
      skills: [
        { name: 'Git & GitHub Version Control', level: 'Advanced', description: 'Branching models, atomic commits, pull requests, merge conflict resolution, and code reviews.' },
        { name: 'VS Code & Web Dev Ecosystem', level: 'Expert', description: 'Optimized workspace, extensions, linting, debugging, and terminal workflows.' },
        { name: 'Chrome Developer Tools', level: 'Expert', description: 'Console debugging, Network tab inspections, DOM inspection, and performance profiles.' },
        { name: 'NPM Package Management', level: 'Advanced', description: 'Dependency management, package.json scripts, lockfile consistency, and bundler configurations.' }
      ]
    }
  ];

  const filteredCategories = activeTab === 'all' 
    ? skillsCategories 
    : skillsCategories.filter(cat => cat.category === activeTab);

  return (
    <div className="bg-light-main min-vh-100 py-5">
      <div className="container px-3 px-md-4">
        
        {/* Page Header */}
        <div className="text-center mb-5">
          <span className="pulse-badge mb-3">
            <span className="pulse-dot"></span>
            Technical Competencies & Toolchain
          </span>
          <h1 className="fw-bold fs-2 mb-2" style={{ color: '#0f172a' }}>Technical Skills & Expertise</h1>
          <div className="mx-auto divider-sky mb-3"></div>
          <p className="col-lg-8 mx-auto fw-medium" style={{ color: '#334155' }}>
            A comprehensive breakdown of the languages, frameworks, backend architectures, and QA testing standards I leverage daily.
          </p>
        </div>

        {/* Tab Filters */}
        <div className="d-flex justify-content-center gap-2 flex-wrap mb-5">
          <button 
            onClick={() => setActiveTab('all')}
            className={`btn btn-tab-filter btn-sm ${activeTab === 'all' ? 'active' : ''}`}
          >
            All Disciplines
          </button>
          <button 
            onClick={() => setActiveTab('frontend')}
            className={`btn btn-tab-filter btn-sm ${activeTab === 'frontend' ? 'active' : ''}`}
          >
            Frontend
          </button>
          <button 
            onClick={() => setActiveTab('backend')}
            className={`btn btn-tab-filter btn-sm ${activeTab === 'backend' ? 'active' : ''}`}
          >
            Backend & Database
          </button>
          <button 
            onClick={() => setActiveTab('qa')}
            className={`btn btn-tab-filter btn-sm ${activeTab === 'qa' ? 'active' : ''}`}
          >
            QA & Testing
          </button>
          <button 
            onClick={() => setActiveTab('tools')}
            className={`btn btn-tab-filter btn-sm ${activeTab === 'tools' ? 'active' : ''}`}
          >
            Tools & Workflow
          </button>
        </div>

        {/* Categories & Skills Grid */}
        <div className="row g-4 mb-5">
          {filteredCategories.map((cat, idx) => (
            <div key={idx} className="col-12 col-lg-6">
              <div className="card card-modern h-100 p-4">
                <div className="d-flex align-items-center gap-3 mb-4 pb-3 border-bottom" style={{ borderColor: '#e2e8f0' }}>
                  <div className="p-2 rounded-3" style={{ background: '#f0f9ff' }}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="fw-bold fs-5 mb-0" style={{ color: '#0f172a' }}>{cat.categoryTitle}</h3>
                    <span className="small fw-semibold" style={{ color: '#334155' }}>{cat.skills.length} core proficiencies</span>
                  </div>
                </div>

                <div className="d-flex flex-column gap-3">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="p-3 rounded-3" style={{ background: '#f8fafc', border: '1px solid #cbd5e1' }}>
                      <div className="d-flex justify-content-between align-items-center mb-1">
                        <span className="fw-bold fs-6" style={{ color: '#0f172a' }}>{skill.name}</span>
                        <span className={`badge ${skill.level === 'Expert' ? 'bg-info text-dark' : 'bg-light text-secondary border'} fw-semibold small`}>
                          {skill.level}
                        </span>
                      </div>
                      <p className="small mb-0 lh-base fw-normal" style={{ color: '#1e293b' }}>{skill.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* QA Methodology Highlight Banner */}
        <div className="card profile-card p-4 p-md-5 mb-5">
          <div className="row align-items-center g-4">
            <div className="col-12 col-lg-7">
              <span className="badge-category mb-3 d-inline-block">Quality Engineering Standard</span>
              <h3 className="fw-bold fs-4 mb-3" style={{ color: '#0f172a' }}>Defensive Engineering & Systematic Testing</h3>
              <p className="small lh-lg mb-3 fw-normal" style={{ color: '#1e293b' }}>
                Quality isn't an afterthought in my workflow. Every web application undergoes thorough functional validation, boundary-case stress testing, SQL injection checks via PDO prepared statements, and HTTP network error audits.
              </p>
              <div className="d-flex flex-wrap gap-2">
                <span className="badge-tech">Zero Unhandled 500s</span>
                <span className="badge-tech">Structured Bug Reports</span>
                <span className="badge-tech">Input Sanitization</span>
                <span className="badge-tech">Responsive Edge Testing</span>
              </div>
            </div>
            <div className="col-12 col-lg-5 text-center text-lg-end">
              <Link to="/projects" className="btn btn-sky me-2 mb-2 mb-sm-0">
                Inspect Tested Projects
              </Link>
              <Link to="/contact" className="btn btn-sky-outline">
                Hire for QA Role
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
