import React from 'react';
import {  Link } from 'react-router-dom';
import ActiveLink from './activeLink/ActiveLink';

const Navbar = () => {
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
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-xl'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='text-xl'>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li className='text-xl'>
                            <Link to='/register'>Sign Up</Link>
                        </li>
                        <li className='text-xl'>
                            <Link to='/mybookings'>My Bookings</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div></center>
        </div>
    );
};

export default Navbar;