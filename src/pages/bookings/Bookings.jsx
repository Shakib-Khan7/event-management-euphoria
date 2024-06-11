import React, { useContext } from 'react';
import { AuthContex } from '../../providers/AuthProviders';
import Navbar from '../../components/Navbar';
import MyBookings from '../../components/MyBookings';

const Bookings = () => {

    const {booked} = useContext(AuthContex)
    console.log(booked);
    return (
        <div>
            <div className='bg-gradient-to-bl from-orange-300 to-orange-600'>
            <Navbar></Navbar>
            </div>
            <center>
                <h2 className='text-5xl mt-10 font-poppins shadow-lg pb-6'>My Bookings</h2>
            </center>

            <main>
                {
                    booked.map(b=>

                        <MyBookings key={b.id}

                        bookedEvent = {b}
                        
                        
                        ></MyBookings>
                    )
                }
            </main>





        </div>
    );
};

export default Bookings;