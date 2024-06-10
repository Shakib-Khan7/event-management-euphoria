import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { AuthContex } from '../../providers/AuthProviders';

const EventDetails = () => {

    const [events, setEvents] = useState([])
    const [selectedEvent, setSelectedEvent] = useState()

    const {handleBooking} = useContext(AuthContex)

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
            <div className='bg-orange-500 text-white'>
                <Navbar></Navbar>
            </div>

            <div className='w-full relative' style={{ backgroundColor: 'black' }} >
                <img className='w-full h-[500px] opacity-70' src="https://i.ibb.co/gDrhqVt/andreas-gabler-XEW-Wd4240c-unsplash.jpg" alt="" />

                <p className='absolute top-0'>sadsad</p>
            </div>


            <main className='grid lg:grid-cols-2'>
                <div>

                    <h2 className='text-5xl'></h2>
                    <div className='lg:flex'>
                        <img className='h-96 lg:h-full lg:w-96 mb-10 rounded' src={selectedEvent.img} alt="" />

                        <p>{selectedEvent.full_description}</p>
                    </div>

                    <div className='grid grid-cols-3 gap-10'>
                        <div className='h-32 w-full bg-slate-200'>

                        </div>
                        <div className='h-32 w-full bg-slate-200'>

                        </div>
                        <div className='h-32 w-full bg-slate-200'>

                        </div>
                    </div>

                </div>






            {/* booking part below */}




                <div>
                    <button onClick={()=>handleBooking(selectedEvent)} className='btn btn-warning'>Book Now</button>
                </div>

            </main>








        </div>
    );
};

export default EventDetails;