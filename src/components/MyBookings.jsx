import React, { useContext } from 'react';
import { FaArrowRight, FaDollarSign, FaMapMarkerAlt, FaRegBuilding } from 'react-icons/fa';
import { AuthContex } from '../providers/AuthProviders';

const MyBookings = ({ bookedEvent }) => {

    const { id, city, date, description, img, organizer, ticket_price, time, title, type, venue } = bookedEvent

    const { handleCancelBooking } = useContext(AuthContex)



    return (
        <div>

            <main className='grid lg:grid-cols-2 gap-20 mb-6 p-6'>
                <div>
                    <div className="lg:card lg:card-side border-b-2 shadow-sm rounded-none p-6">
                        <figure className='lg:h-96 rounded'><img src={img} className='lg:w-64 rounded' alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-3xl font-poppins">{title}</h2>

                            <div className='flex items-center'>
                                <FaRegBuilding className='text-orange-500'></FaRegBuilding>
                                <p className='ml-4 text-lg'>Organizer : {organizer}</p>

                            </div>
                            <div className='flex items-center'>
                                <FaDollarSign></FaDollarSign>
                                <p className='ml-4 text-lg'>Ticket Price : {ticket_price}$</p>
                            </div>
                            <div className="card-actions justify-center mt-auto">
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn btn-warning w-full" onClick={() => document.getElementById('my_modal_5').showModal()}>Cancel Booking</button>
                                <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Are you sure?</h3>
                                        
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn mr-3 w-20">Close</button>
                                                <button onClick={()=>handleCancelBooking(bookedEvent)} className="btn btn-warning w-20">Yes</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                                {/* <button onClick={()=>handleCancelBooking(bookedEvent)} className='btn btn-warning w-full'>
                                    Cancel booking
                                </button> */}
                            </div>
                        </div>
                    </div>
                </div>








                <div>

                    <div className="card w-3/4 h-full border-b-2 rounded-none hidden lg:block mx-auto">
                        <div className="card-body">
                            <div className="card-title">

                                <div className='bg-yellow-400 text-3xl p-6 rounded-full mr-4'>
                                    <FaMapMarkerAlt></FaMapMarkerAlt>
                                </div>
                                <div>
                                    <p className='text-slate-400'>event location</p>
                                    <p className='text-3xl font-bold'>{venue}</p>
                                </div>


                            </div>
                            <div className='flex items-center mt-4 text-lg'>
                                <div className='bg-yellow-400 p-1 rounded-full text-white'>
                                    <FaArrowRight></FaArrowRight>
                                </div>
                                <p className='ml-4'>City : {city}</p>
                            </div>
                            <div className='flex items-center mt-4 text-lg'>
                                <div className='bg-yellow-400 p-1 rounded-full text-white'>
                                    <FaArrowRight></FaArrowRight>
                                </div>
                                <p className='ml-4'>Date : {date}</p>
                            </div>
                            <div className='flex items-center mt-4 text-lg'>
                                <div className='bg-yellow-400 p-1 rounded-full text-white'>
                                    <FaArrowRight></FaArrowRight>
                                </div>
                                <p className='ml-4'>Time : {time} [EST]</p>
                            </div>

                        </div>
                    </div>
                </div>
            </main>






        </div>
    );
};

export default MyBookings;