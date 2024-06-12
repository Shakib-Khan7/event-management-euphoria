import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import EventDetails from "../pages/event/EventDetails";
import Bookings from "../pages/bookings/Bookings";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import PrivateRoute from "./PrivateRoute";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: '/about',
        element: <div>elemets</div>
      },
      {
        path: '/event/:id',
        element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,

      },
      {
        path: '/mybookings',
        element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
      },

    ]
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    path: '/register',
    element: <Register></Register>
  }
]);
export default router