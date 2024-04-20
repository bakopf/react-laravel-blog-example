// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img src="/logo.png" alt="Logo" width="30" height="30" className="d-inline-block align-top me-2" />
          BestBlogEU
        </Link>
        <button className="navbar-toggler" type="button" onClick={toggleMenu}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${showMenu ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/add-post">Create Post</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
