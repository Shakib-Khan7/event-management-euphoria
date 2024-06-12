/* eslint-disable react/no-unescaped-entities */
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { AuthContex } from '../../providers/AuthProviders';
import { FaArrowRight, FaCalendarAlt, FaMapMarkerAlt, FaRegCalendar, FaRegClock } from 'react-icons/fa';

const EventDetails = () => {

    const [events, setEvents] = useState([])
    const [selectedEvent, setSelectedEvent] = useState()

    const { handleBooking } = useContext(AuthContex)

    const eventID = useParams()


    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => {
                setEvents(data.events)

            })
    }, [])

    useEffect(() => {
        if (events.length > 0) {
            const event = events.find(event => event.id == eventID.id);  // Use == for comparison
            setSelectedEvent(event);
        }
    }, [events, eventID.id]);













    if (!selectedEvent) {
        return <div className='text-center mt-80'>
            <span className="loading loading-bars loading-xs"></span>
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>; // Show a loading message or spinner while fetching data
    }






    return (
        <div>
            <div className='bg-gradient-to-bl from-orange-300 to-orange-600 shadow-md'>
                <Navbar></Navbar>
            </div>

            <div className='w-full relative' style={{ backgroundColor: 'black' }} >
                <img className='w-full h-[500px] opacity-50' src="https://i.ibb.co/gDrhqVt/andreas-gabler-XEW-Wd4240c-unsplash.jpg" alt="" />

                <div className='text-white'>
                <p className='absolute top-20 left-[35%] lg:top-32 lg:left-[42%] text-2xl tracking-[12px]'>EVENT SINGLE</p>
                <h2 className=' absolute top-52 left-5 lg:top-[40%] lg:left-[30%] text-3xl lg:text-6xl'>EUPHORIA <span className='text-orange-500 font-bold'>EVENT DETAILS</span></h2>
                </div>
            </div>


            <main className='grid lg:grid-cols-2 mt-20'>
                <div className='lg:ml-20'>

                    <h2 className='text-5xl'></h2>
                    <div className='lg:flex items-center'>
                        <img className='h-96 lg:h-full lg:w-96 mb-10 rounded-lg mx-auto' src={selectedEvent.img} alt="" />

                        <div>
                            <p className='text-3xl ml-10 font-poppins font-bold mb-10'>{selectedEvent.title}</p>
                        <p className='text-xl lg:ml-10'>"{selectedEvent.full_description}"</p>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-3 gap-5 mt-5 lg:mt-0 '>
                        <div className='h-20 w-full bg-slate-100 flex items-center font-poppins rounded-xl '>
                            <div className='h-12 w-12 bg-orange-300 ml-5  rounded-full relative'>
                                <FaRegCalendar className='text-2xl text-white absolute left-3 top-2' ></FaRegCalendar>
                            </div>
                            <div className='ml-4'>
                                <h2 className='text-md font-semibold text-slate-500 tracking-wider'>Event Date</h2>
                                <p className='text-md font-bold tracking-wider'>{selectedEvent.date}</p>
                            </div>
                        </div>
                        <div className='h-20 w-full bg-slate-100 flex items-center font-poppins rounded-xl '>
                            <div className='h-12 w-12 bg-orange-300 ml-5  rounded-full relative'>
                                <FaRegClock className='text-2xl text-white absolute left-3 top-2' ></FaRegClock>
                            </div>
                            <div className='ml-4'>
                                <h2 className='text-md font-semibold text-slate-500 tracking-wider'>Event Time</h2>
                                <p className='text-md font-bold tracking-wider'>{selectedEvent.time}  [EST]</p>
                            </div>
                        </div>
                        <div className='h-20 w-full bg-slate-100 flex items-center font-poppins rounded-xl '>
                            <div className='h-12 w-12 bg-orange-300 ml-5  rounded-full relative'>
                                <FaMapMarkerAlt className='text-2xl text-white absolute left-3 top-2' ></FaMapMarkerAlt>
                            </div>
                            <div className='ml-4'>
                                <h2 className='text-md font-semibold text-slate-500 tracking-wider'>Event Location</h2>
                                <p className='text-md font-bold tracking-wider'>{selectedEvent.venue}</p>
                            </div>
                        </div>

                    </div>

                </div>






                {/* booking part below */}




                <div>
                    <div className="card w-2/4 h-3/4 border-b-1 rounded-none mx-auto bg-slate-100 mt-auto hidden lg:block ">
                        <div className="card-body ">
                            <div className="card-title">

                                <div className='bg-yellow-400 text-3xl p-6 rounded-full mr-4'>
                                    <FaMapMarkerAlt></FaMapMarkerAlt>
                                </div>
                                <div>
                                    <p className='text-slate-400'>event location</p>
                                    <p className='text-3xl font-bold'>{selectedEvent.venue}</p>
                                </div>


                            </div>
                            <div className='flex items-center mt-4 text-lg'>
                                <div className='bg-yellow-400 p-1 rounded-full text-white'>
                                    <FaArrowRight></FaArrowRight>
                                </div>
                                <p className='ml-4'>City : {selectedEvent.city}</p>
                            </div>
                            <div className='flex items-center mt-4 text-lg'>
                                <div className='bg-yellow-400 p-1 rounded-full text-white'>
                                    <FaArrowRight></FaArrowRight>
                                </div>
                                <p className='ml-4'>Date : {selectedEvent.date}</p>
                            </div>
                            <div className='flex items-center mt-4 text-lg'>
                                <div className='bg-yellow-400 p-1 rounded-full text-white'>
                                    <FaArrowRight></FaArrowRight>
                                </div>
                                <p className='ml-4'>Time : {selectedEvent.time} [EST]</p>
                            </div>
                            <div className='flex items-center mt-4 text-lg'>
                                <div className='bg-yellow-400 p-1 rounded-full text-white'>
                                    <FaArrowRight></FaArrowRight>
                                </div>
                                <p className='ml-4'>Ticket Price : {selectedEvent.ticket_price}$</p>
                            </div>


                        </div>
                        <button onClick={() => handleBooking(selectedEvent)} className='btn btn-warning w-full absolute bottom-0'>Book Now</button>

                    </div>
                    <button onClick={() => handleBooking(selectedEvent)} className='btn btn-warning lg:hidden w-full mt-5'>Book Now</button>



















                </div>

            </main>








        </div>
    );
};

export default EventDetails;