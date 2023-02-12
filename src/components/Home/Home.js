import React from 'react';
import useAuth from '../../context/useAuth';

const Home = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2>Home</h2>
            <h6>WELCOME {user.displayName}</h6>
            <div>
                This is you
                <img src={user.photoURL} alt="" />
            </div>
        </div>
    );
};

export default Home;