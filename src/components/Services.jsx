import React from 'react';

const Services = ({service}) => {
    const {id,city,date,description,img,organizer,ticket_price,time,title,type,venue} = service
    
    return (
        <div>

            <div className="card card-side shadow-xl">
                <figure className='lg:h-96'><img src={img} className='lg:w-96' alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>






        </div>
    );
};

export default Services;