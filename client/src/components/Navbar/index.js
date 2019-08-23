import React from 'react';
import './style.css';

function Navbar() {
    return (
        <nav id="navbar">
            <div className="nav-wrapper">
                <a href="/" className="brand-logo blue-text text-darken-2">Google Books</a>
                <ul className="right">
                    <li><a href="/">Search</a></li>
                    <li><a href="/saved">Saved</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;