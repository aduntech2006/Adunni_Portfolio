import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

export const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const closeNav = () => setNavOpen(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-light-glass sticky-top py-3">
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand d-flex align-items-center brand-title fs-4" to="/" onClick={closeNav}>
          <span style={{ color: '#0284c7' }} className="me-1">&lt;</span>
          <span>Adunni</span>
          <span style={{ color: '#0284c7' }} className="ms-1">/&gt;</span>
        </Link>

        {/* Mobile Hamburger Toggler Button */}
        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          onClick={() => setNavOpen(!navOpen)}
          aria-controls="navbarNav" 
          aria-expanded={navOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Links Container */}
        <div className={`collapse navbar-collapse ${navOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center gap-1 gap-lg-2 my-3 my-lg-0">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`} 
                to="/"
                onClick={closeNav}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`} 
                to="/about"
                onClick={closeNav}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`} 
                to="/skills"
                onClick={closeNav}
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`} 
                to="/services"
                onClick={closeNav}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`} 
                to="/projects"
                onClick={closeNav}
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => `nav-link nav-link-custom ${isActive ? 'active' : ''}`} 
                to="/contact"
                onClick={closeNav}
              >
                Contact Me
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
