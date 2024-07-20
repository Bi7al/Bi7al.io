import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx';
import Home from './components/Home/Home.jsx';
import Calendar from "./components/Calendar/Calendar.jsx"
import Booking from "./components/Booking/Booking.jsx";
import Task from "./components/Task/Task.jsx";
import Company from "./components/Company/Company.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Room from './components/Booking/Room.jsx';
import { loader as RoomLoader } from "./components/Booking/Room.jsx";
const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <h1>Oops</h1>,
  children: [{
    path: '/',
    element: <Home />
  },
  {
    path: '/Calendar',
    element: <Calendar />
  },
  {
    path: '/Calendar/:Invitation',
    //loader: CalendarLoader,
    element: < Calendar />
  },
  {
    path: '/Booking',
    element: <Booking />
  }
    ,
  {
    path: '/Task',
    element: <Task />,

  }
    ,
  {
    path: '/Company',
    element: <Company />
  }

    ,
  {
    path: '/Profile',
    element: <Profile />
  },
  {
    path: '/OwnedRoom/:roomType',
    loader: RoomLoader,
    element: <Room />
  }

  ]

}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
