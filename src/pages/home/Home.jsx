import React, { useEffect, useState } from 'react';
import './Home.css';
import Navbar from '../../components/Navbar';
import banner from '../../assets/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg';
import banner2 from '../../assets/yannis-papanastasopoulos-yWF2LLan-_o-unsplash.jpg';
import BannerText from '../../components/BannerText';
import LatestEvents from '../../components/LatestEvents';
import { FaGolfBall, FaRegHandshake } from 'react-icons/fa';
import AboutUsBriefly from '../../components/AboutUsBriefly';
import Services from '../../components/Services';
import { json, useLoaderData } from 'react-router-dom';

const Home = () => {

    const [myServices,setMyServices] = useState({})

    useEffect(()=>{
        fetch('/public/services.json')
        .then(res=>res.json())
        .then(data=>setMyServices(data))
    },[])
    
    
    

    return (
        <div className=''>
            <div className="carousel w-full relative ">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className='banner text-white' style={{ backgroundImage: `url(${banner})` }}>
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

            <div className='w-full bg-slate-100 grid grid-cols-1 lg:grid-cols-2 py-32'>
                <div className='text-center'>
                    <h1 className='tracking-widest text-2xl font-poppins mb-9 text-slate-500'>WE ARE EUPHORIA</h1>
                    <h1 className=' text-3xl lg:text-7xl text-slate-900 tracking-wider font-poppins'>
                        <span className='text-7xl font-bold text-slate-800 mr-3 '>No.1</span>
                        Entertainment <br /> Event Management
                    </h1>
                    <p className='px-20 mt-10 text-slate-600 text-xl mb-5'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit numquam rem illum repudiandae vero deleniti ducimus possimus unde voluptatibus assumenda iure cumque, eaque ex excepturi ipsum doloremque non quasi molestias.
                    </p>
                </div>
                <AboutUsBriefly></AboutUsBriefly>
            </div>

            <div>
                <h2 className='text-center text-5xl mb-10 tracking-wider'>Our Services</h2>
                <h2 className='text-7xl'>Euphoria <span>Expertise</span></h2>

                <div className='grid lg:grid-cols-2 lg:w-8/12 mx-auto h-full gap-10'>
                    {myServices && myServices.events ? (
                        myServices.events.map(myService => (
                            <Services key={myService.id} service={myService}></Services>
                        ))
                    ) : (
                        <p>Loading services...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Home;
