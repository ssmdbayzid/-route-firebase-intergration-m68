import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav>
                <Link to='/shop'>Shop</Link>
                <Link to='/service'>Service</Link>
                <Link to='/project'>Project</Link>
                <Link to='/contact'>Contact</Link>
                <Link to='/review'>Review</Link>
                <Link to='/log-in'>Log In</Link>
                <Link to='/log-out'>Log Out</Link>
            </nav>
        </div>
    );
};

export default Header;