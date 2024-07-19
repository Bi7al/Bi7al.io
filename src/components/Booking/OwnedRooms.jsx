import React from 'react'
import { Link } from 'react-router-dom';
import "./OwnedRooms.css"
function OwnedRooms() {
    return (
        <div className="containerCustom">
            <div className="owned">
                <h4 className='m-0-xs'>My Rooms</h4>
                <div className="ownedRooms  d-lg-flex">
                    <Link to={"/OwnedRoom/Office"}>
                        <div className="ownedRoom  office">
                            <p>OFFICE</p>
                        </div>
                    </Link>
                    <Link to={"/OwnedRoom/Room"}>
                        <div className="ownedRoom  room mt-sm-2 mt-lg-0">
                            <p>Room 001</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default OwnedRooms