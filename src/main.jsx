import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/Home/Home.jsx';
import Calendar from "./components/Calendar/Calendar.jsx";
import Booking from "./components/Booking/Booking.jsx";
import Task from "./components/Task/Task.jsx";
import Company from "./components/Company/Company.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Room from './components/Booking/Room.jsx';
import { loader as RoomLoader } from "./components/Booking/Room.jsx";

// Create the router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <><h1>Oops</h1>
      <p>There Was an Error. Sorry For Inconvenience</p></>, // Element to display if route fails to load
    children: [
      {
        path: '/',
        element: <Home /> // Default route to the Home component
      },
      {
        path: '/Calendar',
        element: <Calendar /> // Route to the Calendar component
      },
      {
        path: '/Calendar/:Invitation',
        element: <Calendar /> // Route to the Calendar component with an invitation parameter
      },
      {
        path: '/Booking',
        element: <Booking /> // Route to the Booking component
      },
      {
        path: '/Task',
        element: <Task /> // Route to the Task component
      },
      {
        path: '/Company',
        element: <Company /> // Route to the Company component
      },
      {
        path: '/Profile',
        element: <Profile /> // Route to the Profile component
      },
      {
        path: '/OwnedRoom/:roomType',
        loader: RoomLoader, // Loader function for the Room component
        element: <Room /> // Route to the Room component with a roomType parameter
      }
    ]
  }
]);

// Render the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
