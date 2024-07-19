import React from 'react'
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import HomeIcon from '@mui/icons-material/Home';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AddBoxIcon from '@mui/icons-material/AddBox';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';
import "./Sidebar.css"




export default function Sidebar() {

    return (

        <div className="pane">
            <div className="title">
                <h1>Horus </h1>
                <i><WbSunnyIcon /></i>
            </div>

            <ul>
                <li><i><HomeIcon /></i><Link to={"/"}>Home</Link></li>
                <li><i><CalendarTodayIcon /></i><Link to={`/Calendar/${null}`}>Calendar</Link></li>
                <li><i><AddBoxIcon /></i><Link to={"/Booking"}>Book a Room</Link></li>
                <li><i><TaskAltIcon /></i><Link to={"/Task"}>Tasks</Link></li>
                <li><i><MenuBookIcon /></i><Link to={"/Company"}>My Company</Link></li>
                <li><i><AccountBoxIcon /></i><Link to={"/Profile"}>My Profile</Link></li>
            </ul>
        </div>

    )
}

Sidebar