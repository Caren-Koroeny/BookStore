import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => (
  <section className="header-container">
    <div className="header-section">
      <h1>Bookstore CMS</h1>
      <ul className="nav-links">
        <li className="link"><Link to="/">BOOKS</Link></li>

        <li className="link"><Link to="/category" style={{ opacity: '0.5' }}>CATEGORIES</Link></li>
      </ul>
    </div>
  </section>
);

export default NavigationMenu;
