import React from 'react';

import './Home.css'
import Navbar from '../../components/Navbar';
import banner from '../../assets/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg'
import banner2 from '../../assets/yannis-papanastasopoulos-yWF2LLan-_o-unsplash.jpg'
import BannerText from '../../components/BannerText';
import LatestEvents from '../../components/LatestEvents';
import { FaGolfBall, FaRegHandshake } from 'react-icons/fa';

const Home = () => {
    return (
        <div className=''>




            <div className="carousel w-full relative ">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='banner' style={{ backgroundImage: `url(${banner})` }}>
                        <Navbar></Navbar>
                        <center className='my-auto'>
                            <BannerText></BannerText>
                        </center>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className='banner' style={{ backgroundImage: `url(${banner2})` }}>
                        <Navbar></Navbar>
                        <center>
                            <BannerText></BannerText>
                        </center>

                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>











            <div>
                <center>
                    <h2 className='mb-20'>UPCOMING EVENTS</h2>


                    <LatestEvents></LatestEvents>
                </center>
            </div>












            <div className='w-full bg-slate-200 grid grid-cols-1 lg:grid-cols-2'>
                <div className='text-center'>
                    WE ARE EUPHORIAeafaf
                </div>


                <div className=''>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        <div className="card w-96 shadow-xl bg-white text-black hover:bg-orange-400 transition duration-500 cursor-pointer">
                            <figure className="px-10 pt-10 text-5xl">
                                <FaRegHandshake className='text-orange-600'></FaRegHandshake>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                
                            </div>
                        </div>
                        <div className="card w-96 shadow-xl bg-white text-black hover:bg-orange-400 transition duration-500 cursor-pointer">
                            <figure className="px-10 pt-10 text-5xl">
                                <FaGolfBall className='text-orange-500'></FaGolfBall>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                
                            </div>
                        </div>
                        <div className="card w-96 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                
                            </div>
                        </div>
                        <div className="card w-96 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                
                            </div>
                        </div>
                        <div className="card w-96 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                
                            </div>
                        </div>
                        <div className="card w-96 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">Shoes!</h2>
                                <p>If a dog chews shoes whose shoes does he choose?</p>
                                
                            </div>
                        </div>




                    </div>
                </div>

            </div>











        </div>
    );
};

export default Home;