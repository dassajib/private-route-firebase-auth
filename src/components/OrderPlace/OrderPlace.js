import React from 'react';
import useAuth from '../../context/useAuth';

const OrderPlace = () => {
    const {user} = useAuth();
    return (
        <div>
            <h2>Sir {user.displayName} Please place your order</h2>
        </div>
    );
};

export default OrderPlace;