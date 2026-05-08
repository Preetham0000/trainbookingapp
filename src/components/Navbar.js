import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-brand">
          <Link to="/" className="nav-logo">
            <span className="nav-icon"></span>
            <span className="nav-text">IRCTC</span>
          </Link>
        </div>


        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${isActive('/') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="nav-icon-small"></span>
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/my-bookings"
              className={`nav-link ${isActive('/my-bookings') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >

              <span>My Bookings</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/pnr-status"
              className={`nav-link ${isActive('/pnr-status') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="nav-icon-small"></span>
              <span>PNR Status</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/profile"
              className={`nav-link ${isActive('/profile') ? 'active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
