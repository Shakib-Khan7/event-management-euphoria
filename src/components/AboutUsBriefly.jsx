import React from 'react';
import { FaGlassCheers, FaGolfBall, FaHatWizard, FaLightbulb, FaRegHandshake, FaWhatsapp } from 'react-icons/fa';

const AboutUsBriefly = () => {
    return (
        <div>
            <div className=''>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center lg:w-2/3'>
                    <div className='w-full border text-center p-8 h-72  bg-white cursor-pointer hover:bg-gradient-to-br from-orange-200 to-orange-600 transform hover:scale-105 transition-all duration-300 hover:z-50 hover:text-white'>


                        <FaRegHandshake className='text-orange-500 mx-auto text-5xl'></FaRegHandshake>


                        <div className=''>
                            <h1 className='font-bold text-black text-2xl mt-6 font-serif'>Friendly Team</h1>
                            <p className='font-serif mt-2'>More than 200 teams</p>

                        </div>

                    </div>
                    <div className='w-full border text-center p-8 h-72  bg-white cursor-pointer hover:bg-gradient-to-br from-orange-200 to-orange-600 transform hover:scale-105 transition-all duration-300 hover:z-50 hover:text-white'>


                        <FaGolfBall className='text-orange-500 mx-auto text-5xl'></FaGolfBall>


                        <div className=' '>
                            <h1 className='font-bold text-black text-2xl mt-6 font-serif'>Perfect Venues</h1>
                            <p className='font-serif mt-2'>Perfect venues</p>

                        </div>

                    </div>
                    <div className='w-full border text-center p-8 h-72  bg-white cursor-pointer hover:bg-gradient-to-br from-orange-200 to-orange-600 transform hover:scale-105 transition-all duration-300 hover:z-50 hover:text-white'>


                        <FaGlassCheers className='text-orange-500 mx-auto text-5xl'></FaGlassCheers>


                        <div className=' '>
                            <h1 className='font-bold text-black text-2xl mt-6 font-serif'>Unique Scenario</h1>
                            <p className='font-serif mt-2'>We think out of the box</p>

                        </div>

                    </div>
                    <div className='w-full border text-center p-8 h-72  bg-white cursor-pointer hover:bg-gradient-to-br from-orange-200 to-orange-600 transform hover:scale-105 transition-all duration-300 hover:z-50 hover:text-white'>


                        <FaHatWizard className='text-orange-500 mx-auto text-5xl'></FaHatWizard>


                        <div className=' '>
                            <h1 className='font-bold text-black text-2xl mt-6 font-serif'>Unforgettable Time</h1>
                            <p className='font-serif mt-2'>We make perfect events</p>

                        </div>

                    </div>
                    <div className='w-full border text-center p-8 h-72  bg-white cursor-pointer hover:bg-gradient-to-br from-orange-200 to-orange-600 transform hover:scale-105 transition-all duration-300 hover:z-50 hover:text-white'>


                        <FaWhatsapp className='text-orange-500 mx-auto text-5xl'></FaWhatsapp>


                        <div className=' '>
                            <h1 className='font-bold text-black text-2xl mt-6 font-serif'>24/7 Service</h1>
                            <p className='font-serif mt-2'>Anytime,anywhere</p>

                        </div>

                    </div>
                    <div className='w-full border text-center p-8 h-72  bg-white cursor-pointer hover:bg-gradient-to-br from-orange-200 to-orange-600 transform hover:scale-105 transition-all duration-300 hover:z-50 hover:text-white'>


                        <FaLightbulb className='text-orange-500 mx-auto text-5xl'></FaLightbulb>


                        <div className=' '>
                            <h1 className='font-bold text-black text-2xl mt-6 font-serif'>Brilliant idea</h1>
                            <p className='font-serif mt-2'>We have million ideas</p>

                        </div>

                    </div>




                </div>
            </div>
        </div>
    );
};

export default AboutUsBriefly;