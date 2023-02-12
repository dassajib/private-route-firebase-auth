import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../context/useAuth';


const Login = () => {
    const {googleSignInUsing, githubSignInUsing, user, logout} = useAuth();
    return (
        <div>
            <h2>Log in</h2>
            <input type="email" />
            <br />
            <br />
            <input type="password" />
            <br />
            <br />
            <input type="submit" value="submit" />
            <br />
            <br />
            <button onClick={googleSignInUsing}>Sign in with Google</button>
            <br />
            <br />
            <button onClick={githubSignInUsing}>Sign in with Github</button>
            <br />
            <br />

            {
                user.email && <>
                        <h2>{user.displayName}</h2>
                        <h4>{user.email}</h4>
                        <img src={user.photoURL} alt="pic" />
                    </>
            }


            <br />
            <br />
            <button onClick={logout}>Log out</button>
            <br />
            <br />
            <Link to="/register">New user?Please Register</Link>
        </div>
    );
};

export default Login;