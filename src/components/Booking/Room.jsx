import React, { useState } from 'react';
import "./Room.css";
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