import React, { useContext } from 'react';
import { AuthContex } from '../../providers/AuthProviders';

const Bookings = () => {

    const {booked} = useContext(AuthContex)
    console.log(booked);
    return (
        <div>
            agfg
        </div>
    );
};

export default Bookings;