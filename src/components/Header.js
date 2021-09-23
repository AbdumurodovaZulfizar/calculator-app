import React from 'react';
import '../index.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header data-testid="header" className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
    <Link to="/" className="d-flex align-items-center text-dark text-decoration-none font fs-2">
      Math Magicians
    </Link>
    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <NavLink exact to="/" className="me-3 py-2 text-dark text-decoration-none font fs-5">
        Home
      </NavLink>
      <NavLink exact to="/calculator" className="me-3 py-2 text-dark text-decoration-none font fs-5">
        Calculator
      </NavLink>
      <NavLink exact to="/quote" className="py-2 text-dark text-decoration-none font fs-5">
        Quote
      </NavLink>
    </nav>
  </header>
);

export default Header;
