import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Sidebar.css';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <div className={`sidebar-container ${isOpen ? 'open' : ''}`} onClick={toggle}>
            <div className="icon" onClick={toggle}>
                <span className="close-icon">&times;</span>
            </div>
            <div className="sidebar-wrapper">
                <ul className="sidebar-menu">
                    <li>
                        <Link to='/' className="sidebar-link" onClick={toggle}>Home</Link>
                    </li>
                    <li>
                        <Link to='/men' className="sidebar-link" onClick={toggle}>Men</Link>
                    </li>
                    <li>
                        <Link to='/women' className="sidebar-link" onClick={toggle}>Women</Link>
                    </li>
                    <li>
                        <Link to='/why-us' className="sidebar-link" onClick={toggle}>Why Us</Link>
                    </li>
                    <li>
                        <Link to='/membership' className="sidebar-link contact-link" onClick={toggle}>Membership</Link>
                    </li>
                    <li>
                        <Link to='/testimonial' className="sidebar-link" onClick={toggle}>Testimonial</Link>
                    </li>
                    <li>
                        <Link to='/contact-us' className="sidebar-link" onClick={toggle}>Contact Us</Link>
                    </li>
                </ul>
                <div className="side-btn-wrap">
                    <Link to='/login' className="sidebar-route">Log In</Link>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
