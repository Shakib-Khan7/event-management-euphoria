import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import { Toaster } from 'react-hot-toast';

const Root = () => {
    return (
        
        <div>
            <Toaster></Toaster>
            
            
            
            
            <Outlet></Outlet>
            
            <Footer></Footer>
        </div>
    );
};

export default Root;