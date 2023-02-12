import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
    return (
        <div>
            <Link className="link-class" to="/home">
                Home
            </Link>
            <Link className="link-class" to="/login">
                Log in
            </Link>
            <Link className="link-class" to="/shopping">
                Shooping
            </Link>
            <Link className="link-class" to="/orderPlace">
                Order Place
            </Link>
            <Link className="link-class" to="/register">
                Register
            </Link>
        </div>
    );
};

export default Header;