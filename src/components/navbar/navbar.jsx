import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                          
                            <Link to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/about">About Us</Link>
                        </li>
                        <li class="nav-item">
                  
                            <Link to="/contact">Contact Us</Link>
                        </li>
                        <li class="nav-item">
                        
                            <Link to="/skills">Skills</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/profile">Profile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
