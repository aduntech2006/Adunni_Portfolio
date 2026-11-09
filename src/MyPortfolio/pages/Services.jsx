import { Link } from 'react-router-dom';

export const Services = () => {
  const servicesData = [
    {
      id: 'frontend',
      icon: (
        <svg style={{ color: '#0284c7' }} width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
      ),
      title: 'Front-End Web Development',
      badge: 'React & UI/UX',
      description: 'Building modern, responsive web applications with clean component architecture, dynamic state synchronization, and accessible styling.',
      deliverables: [
        'React & Vite Single-Page Application Setup',
        'Bootstrap 5 Grid & Custom CSS Micro-Interactions',
        'Interactive Shopping Cart Drawers & Product Grids',
        'Strict Cross-Browser & Mobile Responsiveness'
      ]
    },
    {
      id: 'backend',
      icon: (
        <svg style={{ color: '#0284c7' }} width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
        </svg>
      ),
      title: 'Back-End & API Integration',
      badge: 'Node.js & SQL',
      description: 'Engineering clean server-side APIs, database schemas, and persistent data storage using Node.js, Express, MySQL, and PostgreSQL.',
      deliverables: [
        'Node.js & Express.js RESTful API Routing',
        'Relational Database Modeling (MySQL & PostgreSQL)',
        'Form Boundary Validation & Input Sanitization',
        'Asynchronous Axios JSON Data Synchronization'
      ]
    },
    {
      id: 'qa-testing',
      icon: (
        <svg style={{ color: '#0284c7' }} width="36" height="36" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
      title: 'Software Quality Assurance',
      badge: 'Testing & Auditing',
      description: 'Rigorously testing web applications to identify bugs, verify boundary edge cases, and ensure production release reliability.',
      deliverables: [
        'Detailed Manual Test Execution & Smoke Passes',
        'Bug Identification, Reproducible Steps & Error Logs',
        'Basic Website Functionality & Form Input Testing',
        'Usability, Responsiveness & Cross-Browser Verification'
      ]
    }
  ];

  return (
    <div className="bg-light-main min-vh-100 py-5">
      <div className="container px-3 px-md-4">
        
        {/* Page Header */}
        <div className="text-center mb-5">
          <span className="pulse-badge mb-3">
            <span className="pulse-dot"></span>
            End-to-End Solutions
          </span>
          <h1 className="fw-bold fs-2 mb-2" style={{ color: '#0f172a' }}>Services & Capabilities</h1>
          <div className="mx-auto divider-sky mb-3"></div>
          <p className="col-lg-8 mx-auto fw-medium" style={{ color: '#334155' }}>
            Comprehensive web engineering and testing solutions designed to build, secure, and deliver dependable software applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4 mb-5">
          {servicesData.map((service) => (
            <div key={service.id} className="col-12 col-lg-4">
              <div className="card service-card p-4 h-100 d-flex flex-column">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <div className="p-2 rounded-3" style={{ background: '#f0f9ff' }}>
                    {service.icon}
                  </div>
                  <span className="badge-category">
                    {service.badge}
                  </span>
                </div>
                <h3 className="fw-bold fs-5 mb-2" style={{ color: '#0f172a' }}>{service.title}</h3>
                <p className="small mb-4 lh-lg fw-normal" style={{ color: '#1e293b' }}>{service.description}</p>
                
                {/* Deliverables List */}
                <div className="mt-auto border-top pt-3" style={{ borderColor: '#e2e8f0' }}>
                  <h5 className="fs-6 fw-semibold mb-3" style={{ color: '#0284c7' }}>Key Deliverables:</h5>
                  <ul className="list-unstyled mb-0 small" style={{ color: '#1e293b' }}>
                    {service.deliverables.map((item, itemIdx) => (
                      <li key={itemIdx} className="mb-2 d-flex align-items-start gap-2">
                        <span className="fw-bold" style={{ color: '#0284c7' }}>✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Workflow Process Banner */}
        <div className="card card-modern p-4 p-md-5 mb-5">
          <div className="text-center mb-4">
            <h3 className="fw-bold fs-3 mb-2" style={{ color: '#0f172a' }}>Execution Process</h3>
            <div className="mx-auto divider-sky mb-3"></div>
            <p className="small fw-semibold" style={{ color: '#334155' }}>From concept to production-verified deployment</p>
          </div>
          <div className="row g-4 text-center">
            <div className="col-12 col-md-3">
              <div className="fw-bold fs-2 mb-1" style={{ color: '#0284c7' }}>01</div>
              <h5 className="fs-6 mb-2 fw-bold" style={{ color: '#0f172a' }}>Architecture</h5>
              <p className="small mb-0 fw-medium" style={{ color: '#334155' }}>Planning modular React component hierarchy & normalized SQL relational schema.</p>
            </div>
            <div className="col-12 col-md-3">
              <div className="fw-bold fs-2 mb-1" style={{ color: '#0284c7' }}>02</div>
              <h5 className="fs-6 mb-2 fw-bold" style={{ color: '#0f172a' }}>Development</h5>
              <p className="small mb-0 fw-medium" style={{ color: '#334155' }}>Coding responsive frontends with React & Bootstrap and backend Node.js APIs.</p>
            </div>
            <div className="col-12 col-md-3">
              <div className="fw-bold fs-2 mb-1" style={{ color: '#0284c7' }}>03</div>
              <h5 className="fs-6 mb-2 fw-bold" style={{ color: '#0f172a' }}>QA Audit</h5>
              <p className="small mb-0 fw-medium" style={{ color: '#334155' }}>Executing manual testing passes, error identification, and bug reporting.</p>
            </div>
            <div className="col-12 col-md-3">
              <div className="fw-bold fs-2 mb-1" style={{ color: '#0284c7' }}>04</div>
              <h5 className="fs-6 mb-2 fw-bold" style={{ color: '#0f172a' }}>Deployment</h5>
              <p className="small mb-0 fw-medium" style={{ color: '#334155' }}>Final cross-browser verification, asset optimization, and live release validation.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="card profile-card p-4 p-md-5 text-center">
          <h3 className="fw-bold fs-3 mb-2" style={{ color: '#0f172a' }}>Need a custom web project or a dedicated QA audit?</h3>
          <p className="mb-4 col-lg-8 mx-auto fw-medium" style={{ color: '#1e293b' }}>
            Let's discuss your requirements, tech stack, and timeline to build high quality software together.
          </p>
          <div className="d-flex justify-content-center gap-3">
            <Link to="/contact" className="btn btn-sky px-5 py-2">
              Start a Conversation
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};