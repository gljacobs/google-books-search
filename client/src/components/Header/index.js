import React from 'react';
import './style.css';

function Header() {
    return (
        // <div class="container">
            <div className="row">
                <div id="header" className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title center-align">React Google Books Search</span>
                            <p className="center-align">
                                Search and save books of self interest...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
};

export default Header;