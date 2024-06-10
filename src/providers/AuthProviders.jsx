/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';




export const AuthContex = createContext(null)

const AuthProviders = ({children}) => {

    const [booked,setBooked] = useState([])

    const handleBooking = (event) =>{
        let newBooking =[];
        const exists = booked.find(e=>e.id === event.id )

        if(!exists){
            newBooking = [...booked, event]
            
            

        }
        else{
            const remaining = booked.filter(e=>e.id !==event.id);
            newBooking = [...remaining,exists]
            
            
        }
        setBooked(newBooking);
        console.log(newBooking);
    }




    const authInfo = {booked,handleBooking}

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProviders;