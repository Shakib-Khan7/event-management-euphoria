/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';




export const AuthContex = createContext(null)
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const AuthProviders = ({children}) => {
    
    const [user,setUser] = useState()
    const [name,setName] = useState('')

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

    const handleCancelBooking = (event) =>{
        let newBookings = [];

        const remaining = booked.filter(e=>e.id !== event.id )
        setBooked(remaining)
    }


    //firebase authentications

    const googleLogin = ()=>{
       return signInWithPopup(auth,provider)

    }

    const createUser = (email,password,name)=>{
        setName(name)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logIn = (email,password)=>{

        
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,currentUser=>{
            console.log('user in auth state changed');
            
            setUser(currentUser)
            
        })
        return ()=>{
            unSubscribe();
        }
    },[])









    const authInfo = {user,booked,handleBooking,handleCancelBooking,googleLogin,createUser,logIn,logOut,name}

    return (
        <AuthContex.Provider value={authInfo}>
            {children}
        </AuthContex.Provider>
    );
};

export default AuthProviders;