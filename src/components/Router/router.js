import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../../pages/homeScreen'
import About from '../../pages/aboutScreen'
import Contact from '../../pages/contactScreen'
import Navbar from '../navbar/navbar'
import Skills from '../../pages/skillsScreen'
import Profile from '../../pages/profileScreen'

export default function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </Router>
    )
}
