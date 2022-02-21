import React from 'react';
import './style.scss'

function Header() {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">
          Where in the world?
        </a>
        <section className="right hide-on-med-and-down">
          <a href="/">Dark Mode</a>
        </section>
      </div>
    </nav>
  );
}

export default Header;
