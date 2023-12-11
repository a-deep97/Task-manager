import React from 'react';
import LogOut from './logout';

function Navbar() {
    return (
        <div className="navbar">
            <div id="navbar-title">Task Manager</div>
            <div className="navbar-links">
                <LogOut />
            </div>
        </div>
    );
}

export default Navbar;
