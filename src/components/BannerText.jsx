import React from 'react';

const BannerText = () => {
    return (
        <div className='mt-28'>
            <h2 className='text-6xl mb-4 text-slate-300'>One Stop</h2>
            <h2 className='text-7xl font-poppins font-extrabold'>Event Planner</h2>
            <p className='tracking-[7px] text-sm mt-3'>EVERY EVENT SHOULD BE PERFECT</p>

            <div className='mt-10'>
                <button className='btn btn-warning mr-10 w-40 rounded-full'>
                    About us
                </button>
                <button className='btn btn-warning rounded-full w-40'>
                    Get Started
                </button>
                
            </div>
        </div>
    );
};

export default BannerText;