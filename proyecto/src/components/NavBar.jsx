import React from "react";
import "../styles/NavBar.css";

function NavBar({ pages, activePage, onNavigate }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 814 1000" width="18" height="22" fill="currentColor">
          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-155.5-127.4C46.5 763.4 0 656.4 0 555.9c0-173.1 112.9-264.7 223.4-264.7 59.2 0 108.5 38.8 145.5 38.8 35.5 0 90.5-41.2 156.8-41.2 24.6 0 111.4 2.3 168.1 83.1zm-170.3-139.4c32.1-38.2 55.4-91.4 55.4-144.6 0-7.4-.6-14.9-1.9-21.3-52.5 1.9-114.9 34.9-152.4 78.1-29.5 33.6-57.8 86.8-57.8 140.7 0 8.3 1.3 16.6 1.9 19.2 3.2.6 8.4 1.3 13.6 1.3 47.1 0 106.4-31.6 141.2-73.4z"/>
        </svg>
      </div>
      <ul className="navbar-links">
        {pages.map((page) => (
          <li key={page.id}>
            <button
              className={`nav-btn ${activePage === page.id ? "active" : ""}`}
              onClick={() => onNavigate(page.id)}
            >
              {page.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;