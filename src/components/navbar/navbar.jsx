import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo512.png'
import { ThemeContext } from '../../App';
import ReactSwitch from 'react-switch';
export default function Navbar() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <nav className="navbar navbar-expand-lg " id="navbar">
        <div className="container-fluid">
            <img src={logo} alt="logo" className="logo" id="logo" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className='nav_button btn btn-primary' to="/">Home</Link>
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
                <ThemeContext.Provider value={{ theme, toggleTheme }} >
                        <div className={`App ${theme}`}>
                            <div id='switch' style={{ display: 'flex', flexDirection: 'row' }}>
                                <label>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</label>
                                <ReactSwitch onChange={toggleTheme} checked={theme === 'dark'} />
                            </div>
                        </div>
                    </ThemeContext.Provider>
            </div>
        </nav>
    )
}
