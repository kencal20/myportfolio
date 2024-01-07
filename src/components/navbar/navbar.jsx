import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/logo512.png'
export default function Navbar() {
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
            </div>
        </nav>
    )
}
