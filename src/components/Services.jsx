import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Services = ({service}) => {
    const {id,city,date,description,img,organizer,ticket_price,time,title,type,venue} = service
    
    return (
        <div>

            <div className="card card-side shadow-xl">
                <figure className='lg:h-96'><img src={img} className='lg:w-64' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{type}</h2>
                    <div>
                    <p>Ongoing event : {title}</p>
                    </div>
                    <div className='flex items-center'>
                    <FaMapMarkerAlt></FaMapMarkerAlt>
                    <p className='ml-4'>{city}</p>

                    </div>
                    <div className="card-actions justify-center mt-auto">
                        <Link className='w-full' to={`/event/${id}`}>
                        <button className="btn bg-slate-100 border-none w-full">Details</button>
                        </Link>
                    </div>
                </div>
            </div>






        </div>
    );
};

export default Services;