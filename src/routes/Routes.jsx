import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import EventDetails from "../pages/event/EventDetails";
import Bookings from "../pages/bookings/Bookings";




const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children : [
        {
            path : '/',
            element : <Home></Home>,
            loader : ()=>fetch("services.json")
        },
        {
            path : '/about',
            element : <div>elemets</div>
        },
        {
          path :'/event/:id',
          element : <EventDetails></EventDetails>,
          
        },
        {
          path : '/mybookings',
          element : <Bookings></Bookings>
        }
      ]
    },
  ]);
  export default router