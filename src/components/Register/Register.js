import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <h2>Register</h2>
            <input type="email" />
            <br />
            <input type="password" />
            <br />
            <input type="submit" value="submit" />
            <br />
            <Link to="/login">Have account?Please Login</Link>
        </div>
    );
};

export default Register;