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
import { Toaster } from 'react-hot-toast';
import Aos from 'aos';
import 'aos/dist/aos.css'

const Home = () => {

    const [myServices, setMyServices] = useState({})

    useEffect(() => {
        Aos.init()
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setMyServices(data))
    }, [])




    return (
        <div className=''>

            <div className="carousel w-full relative " >
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
                    <div className='banner text-white' style={{ backgroundImage: `url(${banner2})` }}>
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

            <div data-aos="fade-in">
                <center>
                    <h2 className='mb-10 mt-20 text-xl tracking-[8px]'>UPCOMING EVENTS</h2>

                    <h2 className='mb-20 text-5xl'>Latest <span className='font-bold'>Awesome Events</span> </h2>
                    <LatestEvents></LatestEvents>
                </center>
            </div>

            <div className='w-full bg-slate-100 grid grid-cols-1 lg:grid-cols-2 py-32' >
                <div className='text-center'>
                    <h1 className='tracking-widest text-2xl font-poppins mb-9 text-slate-500'>WE ARE EUPHORIA</h1>
                    <h1 className=' text-3xl lg:text-7xl text-slate-900 tracking-wider font-poppins'>
                        <span className='text-7xl font-bold text-slate-800 mr-3 '>No.1</span>
                        Entertainment <br /> Event Management
                    </h1>
                    <p className='px-20 mt-10 text-slate-600 text-xl mb-5'>
                        Welcome to Euphoria Event Management, where we provide unparalleled services for organizing your entertainment events. Our expert team handles every aspect of your event, ensuring a seamless and unforgettable experience. Whether you're planning a concert, a private party, or a corporate gathering, we tailor our services to meet your specific needs.

                        Our website offers a top-tier online experience, allowing you to effortlessly book upcoming events of your choice. With Euphoria Event Management, you're guaranteed the best service and a flawless execution of your event from start to finish.
                    </p>
                </div>
                <div data-aos="zoom-in" >
                <AboutUsBriefly ></AboutUsBriefly>
                </div>
            </div>

            <div >
                <h2 className='text-center text-3xl mb-5 mt-20 tracking-widest text-slate-500'>Our Services</h2>
                <h2 className='text-5xl mb-20 text-center'>Euphoria <span className='font-bold'>Expertise</span></h2>

                <div className='grid lg:grid-cols-2 lg:w-8/12 mx-auto h-full gap-10 ' data-aos="fade-left" >
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
