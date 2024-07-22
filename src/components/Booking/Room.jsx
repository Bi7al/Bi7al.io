import React, { useState } from 'react';
import "./Room.css";
import TvIcon from '@mui/icons-material/Tv';
import SettingsInputHdmiIcon from '@mui/icons-material/SettingsInputHdmi';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MonitorIcon from '@mui/icons-material/Monitor';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import { WbIncandescentOutlined, AcUnitOutlined } from '@mui/icons-material';
import { useLoaderData } from 'react-router-dom';
import ArcGauge from './Thermostat';
import Wave from "../../assets/Subtract.png";
import Eco from "../../assets/Eco.png";

// Loader function to fetch room type from params
export async function loader({ params }) {
    const { roomType } = params;
    return { roomType };
}

function Room() {
    // State to manage heater on/off status
    const [heaterOn, setHeaterOn] = useState(false);

    // State to manage modal open/close status
    const [open, setOpen] = useState(false);

    // Function to handle modal close
    const handleClose = () => setOpen(false);

    // Function to toggle heater and modal status
    function toggleHeater() {
        const newHeaterStatus = !heaterOn;
        setHeaterOn(newHeaterStatus);
        setOpen(newHeaterStatus);
    }

    // Styling for the modal
    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bgcolor: "white",
        height: "33rem",
        width: "47rem",
        backgroundColor: "#F6E6CB",
        borderRadius: "10px",
    };

    // Fetch room type from loader data
    const { roomType } = useLoaderData();

    return (
        <div className='roomControls'>
            <h3>{roomType}</h3>
            <div className='control mt-5'>
                <div className="buttons">
                    {/* Light control button */}
                    <div className="controlButton">
                        <span className='span'>
                            <WbIncandescentOutlined sx={{ color: 'rgb(145, 145, 145)', fontWeight: "100" }} fontSize='large' />
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="lightSwitch" />
                            </div>
                        </span>
                        <p>Light</p>
                    </div>
                    {/* AC control button */}
                    <div className="controlButton">
                        <span className='span'>
                            <AcUnitOutlined sx={{ color: 'rgb(145, 145, 145)', fontWeight: "100" }} fontSize='large' />
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="acSwitch" />
                            </div>
                        </span>
                        <p>AC</p>
                    </div>
                </div>
                {/* Heater control button */}
                <div className="heaterToggle">
                    <span className='span'>
                        <AcUnitOutlined sx={{ color: 'rgb(145, 145, 145)', fontWeight: "100" }} fontSize='large' />
                        <div className="form-check form-switch">
                            <input className="form-check-input" checked={heaterOn} type="checkbox" role="switch" id="heaterSwitch" onChange={toggleHeater} />
                        </div>
                    </span>
                    <p>Heater</p>
                </div>

                {/* Modal for heater settings */}
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle}>
                        <div className="thermals">
                            <ArcGauge />
                            <div className='modes'>
                                <div className='button'>
                                    <div className="btn1"><button><img src={Wave} alt="Mode" /></button></div>
                                    <label htmlFor="">Mode</label>
                                </div>
                                <div className='button'>
                                    <div className="btn2"> <button><img src={Eco} alt="Eco" /></button></div>
                                    <label htmlFor="">Eco</label>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Modal>
            </div>
        </div>
    );
}

export default Room;
