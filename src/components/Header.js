import React from 'react';
import '../index.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header data-testid="header">
    <Link to="/">
      Math Magicians
    </Link>
    <div>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/calculator">
        Calculator
      </NavLink>
      <NavLink exact to="/quote">
        Quote
      </NavLink>
    </div>
  </header>
);

export default Header;
