import React from 'react';

const LatestEvents = () => {
    return (
        <div className=''>
            <div className="carousel w-2/3 ">
                <div id="item1" className="carousel-item w-56 lg:w-2/5 lg:h-96 lg:mr-10 relative">
                    <img src="https://jthemes.net/themes/html/harmony-event/assets/images/upcomming-events/event-3.jpg" className="w-full rounded-lg" />
                    <div className='absolute top-4 left-4 w-24 h-20 bg-gradient-to-bl from-orange-600 to-orange-300 rounded'>
                        <p className='text-white font-extrabold text-5xl'>26</p>
                        <p className='text-white font-bold'>May</p>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-56 lg:w-2/5 lg:h-96 lg:mr-10 relative">
                    <img src="https://jthemes.net/themes/html/harmony-event/assets/images/upcomming-events/event-1.jpg" className="w-full rounded-lg" />
                    <div className='absolute top-4 left-4 w-24 h-20 bg-gradient-to-bl from-orange-600 to-orange-300 rounded'>
                        <p className='text-white font-extrabold text-5xl'>1</p>
                        <p className='text-white font-bold'>June</p>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-56 lg:w-2/5 lg:h-96 relative">
                    <img src="https://jthemes.net/themes/html/harmony-event/assets/images/upcomming-events/event-2.jpg" className="w-full rounded-lg" />
                    <div className='absolute top-4 left-4 w-24 h-20 bg-gradient-to-bl from-orange-600 to-orange-300 rounded'>
                        <p className='text-white font-extrabold text-5xl'>28</p>
                        <p className='text-white font-bold'>June</p>
                    </div>
                </div>

                
                
                
                
            </div>
            
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs bg-white">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
               
            </div>
        </div>
    );
};

export default LatestEvents;