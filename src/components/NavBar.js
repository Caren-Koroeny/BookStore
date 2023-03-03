import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu = () => (
  <section className="header-container">
    <div className="header-section">
      <h1 style={{ color: '#0290ff' }}>Bookstore CMS</h1>
      <ul className="nav-links">
        <li className="link"><Link to="/">BOOKS</Link></li>

        <li className="link"><Link to="/category" style={{ opacity: '0.5' }}>CATEGORIES</Link></li>
      </ul>
    </div>
    <img className="user-logo" src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="user" />
  </section>
);

export default NavigationMenu;
