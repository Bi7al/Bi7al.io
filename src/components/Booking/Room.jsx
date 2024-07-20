import React, { useState } from 'react';
import "./Room.css";
import TvIcon from '@mui/icons-material/Tv';
import SettingsInputHdmiIcon from '@mui/icons-material/SettingsInputHdmi';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MonitorIcon from '@mui/icons-material/Monitor';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import { Height, WbIncandescentOutlined } from '@mui/icons-material';
import { AcUnitOutlined } from '@mui/icons-material';
import { useLoaderData } from 'react-router-dom';
import ArcGauge from './Thermostat';
import Wave from "../../assets/Subtract.png";
import Eco from "../../assets/Eco.png"
export async function loader({ params }) {
    const { roomType } = params;
    return { roomType };
}
function Room() {

    const [heaterOn, setOn] = useState(false);
    ///////////////////////MODAL LOGIC/////////////////////////////////
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
    function turnOn() {
        setOn(!heaterOn);
        setOpen(!heaterOn)
    }
    ///////////////////////////////////////////////////////
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bg: "white",
        height: "33rem",
        width: "47rem",
        backgroundColor: "#F6E6CB",
        borderRadius: "10px",


    };
    const { roomType } = useLoaderData();
    return (
        <div className='roomControls '>
            <h3>{roomType}</h3>
            <div className='control mt-5'>
                <div className="buttons">
                    <div className="controlButton">
                        <span className='span'>
                            <WbIncandescentOutlined sx={{ color: 'rgb(145, 145, 145)', fontWeight: "100" }} fontSize='large' />
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            </div>
                        </span>
                        <p>Light</p>
                    </div>
                    <div className="controlButton">
                        <span className='span'>
                            <AcUnitOutlined sx={{ color: 'rgb(145, 145, 145)', fontWeight: "100" }} fontSize='large' />
                            <div className="form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            </div>
                        </span>
                        <p>AC</p>
                    </div>
                </div>
                <div className="heaterToggle">
                    <span className='span'>
                        <AcUnitOutlined sx={{ color: 'rgb(145, 145, 145)', fontWeight: "100" }} fontSize='large' />
                        <div className="form-check form-switch">
                            <input className="form-check-input" checked={heaterOn} type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={turnOn} />
                        </div>
                    </span>
                    <p>Heater</p>
                </div>
                <div className="Owned equipment">
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
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <div className="thermals">
                            <ArcGauge />
                            <div className='modes'>
                                <div className='button'>
                                    <div className="btn1"><button><img src={Wave} alt="" /></button></div>
                                    <label htmlFor="">Mode</label>
                                </div>
                                <div className='button'>
                                    <div className="btn2"> <button><img src={Eco} alt="" /></button></div>
                                    <label htmlFor="">Eco</label>
                                </div>
                            </div>
                        </div>
                    </Box>
                </Modal >

            </div >
        </div >

    )
}

export default Room