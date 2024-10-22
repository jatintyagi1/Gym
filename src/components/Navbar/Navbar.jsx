import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import '../../styles/Navbar.css'; 

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
        return () => window.removeEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <nav className={`navbar ${scrollNav ? 'scroll-nav' : ''}`}>
            <div className="navbar-container">
                <a href="/" className="nav-logo" onClick={toggleHome}>FlexZone</a>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <a href="/" className="nav-links">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="/men" className="nav-links">Men</a>
                    </li>
                    <li className="nav-item">
                        <a href="/women" className="nav-links">Women</a>
                    </li>
                    <li className="nav-item">
                        <a href="/why-us" className="nav-links">Why US</a>
                    </li>
                    <li className="nav-item">
                        <a href="/membership" className="nav-links-contact">Membership</a>
                    </li>
                    <li className="nav-item">
                        <a href='/testimonial' className="nav-links">Testimonial</a>
                    </li>
                    <li className="nav-item">
                        <a href='/contact-us' className="nav-links">Contact Us</a>
                    </li>
                </ul>
                <div className="nav-btn">
                    <a href="/login" className="nav-btn-link">Log In</a>
                </div>
                <div className="mobile-icon" onClick={toggle}>
                    <FaBars />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
