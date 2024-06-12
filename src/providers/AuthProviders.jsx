/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import toast from 'react-hot-toast';




export const AuthContex = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const AuthProviders = ({children}) => {
    
    const [user,setUser] = useState()
    const [name,setName] = useState('')
    const [loading,setLoading] = useState(true)
    const [booked,setBooked] = useState([])

    const handleBooking = (event) =>{
        let newBooking =[];
        const exists = booked.find(e=>e.id === event.id )

        if(!exists){
            newBooking = [...booked, event]
            toast.success('Booking Confirmed')
            
            

        }
        else{
            const remaining = booked.filter(e=>e.id !==event.id);
            newBooking = [...remaining,exists]
            toast.error('Already Booked')
            
            
        }
        setBooked(newBooking);
        console.log(newBooking);
    }

    const handleCancelBooking = (event) =>{
        let newBookings = [];

        const remaining = booked.filter(e=>e.id !== event.id )
        setBooked(remaining)
        toast.error('Booking Canceled')
    }


    //firebase authentications

    const googleLogin = ()=>{
        setLoading(true)
       return signInWithPopup(auth,provider)

    }

    const createUser = (email,password,name)=>{
        setLoading(true)
        setName(name)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password)=>{
        setLoading(true)

        
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('user in auth state changed');
            
            setUser(currentUser)
            setLoading(false)
            
        })
        return ()=>{
            unSubscribe();
        }
    },[])









    const authInfo = {user,booked,loading,handleBooking,handleCancelBooking,googleLogin,createUser,logIn,logOut,name}

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProviders;