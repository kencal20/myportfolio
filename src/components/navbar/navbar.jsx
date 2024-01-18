import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.png';
import { ThemeContext } from '../../App';
import ReactSwitch from 'react-switch';

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isNavbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className={`navbar navbar-expand-lg ${isNavbarOpen ? 'navbar-open' : ''}`}>
      <div className="container-fluid">
        <img src={logo} alt="logo" className="logo" id="logo" />
        <button
          className={`navbar-toggler ${isNavbarOpen ? 'collapsed' : ''}`}
          type="button"
          aria-controls="navbarNav"
          aria-expanded={isNavbarOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          {isNavbarOpen ? (
            <span>&times;</span>
          ) : (
            <span className="navbar-toggler-icon"></span>
          )}
        </button>
        <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav_button btn btn-primary" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
                            <Link className='nav_button btn btn-success' to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav_button btn btn-info ' to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav_button btn btn-warning ' to="/skills">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav_button btn btn-dark' to="/profile">Profile</Link>
                        </li>
          </ul>
        </div>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <div className={`App ${theme}`}>
            <div id="switch" style={{ display: 'flex', flexDirection: 'row' }}>
              <label style={{ paddingRight: 10 }}>
                {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
              </label>
              <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
            </div>
          </div>
        </ThemeContext.Provider>
      </div>
    </nav>
  );
}
