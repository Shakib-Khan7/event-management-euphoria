import React, { useContext, useEffect } from 'react';
import {  Link } from 'react-router-dom';
import ActiveLink from './activeLink/ActiveLink';
import { AuthContex } from '../providers/AuthProviders';

import userPicture from '../../src/assets/services/user.png'

const Navbar = () => {
    const {user,logOut,name} = useContext(AuthContex)

    console.log(user);

    if(user){
        user.displayName = name
    }

    

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch()
    }


    return (
        <div className=''>
            <center><div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  text-black bg-white rounded-box w-52">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/mybookings'>My Bookings</Link>
                            </li>
                            <li>
                                <Link to='/login'>Login</Link>
                            </li>
                            <li>
                                <Link to='/register'>Sign Up</Link>
                            </li>
                           
                           
                        </ul>
                    </div>
                    <Link to='/' className='ml-2' >
                    <div>
                        <p className='tracking-[8px] text-2xl'>EUPHORIA</p>
                        <p className='text-yellow-500 font-poppins text-sm tracking-widest'>EVENT MANAGEMENT</p>
                    </div>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-md'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='text-md'>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li className='text-md'>
                            <Link to='/register'>Sign Up</Link>
                        </li>
                        <li className='text-md'>
                            <Link to='/mybookings'>My Bookings</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user && <div className="w-10 rounded-full mr-3">
                        <img className='rounded-full' alt="Tailwind CSS Navbar component" src={userPicture} />
                    </div>
                    }
                    {!user ? <Link to='/login'>
                    <button className='btn w-28 btn-warning'>Login</button>
                    </Link> : <button onClick={handleLogOut} className='btn w-28'>
                        Sign Out
                        
                        
                        </button>}
                </div>
            </div></center>
        </div>
    );
};

export default Navbar;