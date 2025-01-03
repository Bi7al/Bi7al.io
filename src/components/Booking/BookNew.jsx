import React, { useState } from 'react';
import "./book.css";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import TvIcon from '@mui/icons-material/Tv';
import SettingsInputHdmiIcon from '@mui/icons-material/SettingsInputHdmi';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MonitorIcon from '@mui/icons-material/Monitor';

function BookNew() {
    // State to manage the invited user
    const [invited, setInvited] = useState("Invite a User");
    // State to manage the selected room number
    const [roomNO, setRoomNO] = useState();

    // Function to handle room selection
    function handleRoom(roomno) {
        setRoomNO(roomno);
    }

    // Function to handle invite selection
    function handleInvite(e) {
        setInvited(e.target.innerHTML);
    }

    return (
        <div className="book">
            <h4>Book a Room</h4>
            {/* Form for inputting Dates, Room Number, etc */}
            <form action="">
                <div className="datesInput">
                    {/* Input for check-in date */}
                    <div className="date">
                        <label htmlFor="checkIn">Beginning</label>
                        <input
                            type='text'
                            onFocus={(e) => { e.target.type = "date" }}
                            name="checkIn"
                            id="checkIn"
                            placeholder="MM-DD-YY"
                        />
                    </div>
                    {/* Input for check-out date */}
                    <div className="date">
                        <label htmlFor="checkOut">Ending</label>
                        <input
                            type="text"
                            onFocus={(e) => { e.target.type = "date" }}
                            name="checkOut"
                            id="checkOut"
                            placeholder="MM-DD-YY"
                        />
                    </div>
                </div>
                <div className="inputgroup">
                    {/* Dropdown for selecting a room */}
                    <div className="selectInput">
                        <label>Reserve a Room</label>
                        <div className="dropdown">
                            <button className="select" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p>Room {roomNO}</p><ArrowDropDownIcon />
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={(e) => handleRoom(1)}>Room 1</a></li>
                                <li><a className="dropdown-item" href="#" onClick={(e) => handleRoom(2)}>Room 2</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* Dropdown for inviting a user */}
                    <div className="selectInput">
                        <label>Invite another user</label>
                        <div className="dropdown">
                            <button className="select" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <p>{invited}</p><ArrowDropDownIcon />
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#" onClick={handleInvite}>Marie</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Submit button for the form */}
                <button type='submit' className='BookingSubmit'>Submit</button>
            </form>
            {/* Icon section for room equipment */}
            <div className="equipment">
                <p>Room Equipment</p>
                <div className="icon-group">
                    <div className="equipmentIcon"><TvIcon sx={{ color: 'black' }} /><p>Screen</p></div>
                    <div className="equipmentIcon"><SettingsInputHdmiIcon sx={{ color: 'black' }} /><p>HDMI</p></div>
                </div>
                <div className="icon-group">
                    <div className="equipmentIcon"><VolumeUpIcon sx={{ color: 'black' }} /><p>Speakers</p></div>
                    <div className="equipmentIcon"><MonitorIcon sx={{ color: 'black' }} /><p>Interactive Whiteboard</p></div>
                    <div className="equipmentIcon"><KeyboardVoiceIcon sx={{ color: 'black' }} /><p>Visio Conference</p></div>
                </div>
            </div>
        </div>
    );
}

export default BookNew;
