import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import "./Profile.css"
function ProfileCard() {
    return (
        <div className="coverage">
            <div className="profile-card">
                <div className="gradient"></div>
                <div className="profileBody">
                    <div className="profile-header">
                        <div className="profile-image">
                            <img src="https://via.placeholder.com/150" alt="Profile" />
                        </div>
                        <div className="profile-info">
                            <h3>Alexa Rawles</h3>
                            <p>alexarawles@gmail.com</p>
                        </div>
                    </div>
                    <div className="profile-form">
                        <div className="Row">
                            <div className="formgroup">
                                <label htmlFor="first-name">First Name</label>
                                <input type="text" id="first-name" placeholder="Your First Name" />
                            </div>

                            <div className="formgroup">
                                <label htmlFor="nick-name">Nick Name</label>
                                <input type="text" id="nick-name" placeholder="Your First Name" />
                            </div>
                        </div>
                        <div className="Row">
                            <div className="formgroup">
                                <label htmlFor="last-name">Last Name</label>
                                <input type="text" id="last-name" placeholder="Your Last Name" />
                            </div>
                            <div className="formgroup">
                                <label htmlFor="office-location">Office Location</label>
                                <select id="office-location">
                                    <option value="">Select location</option>
                                    <option value="location1">Location 1</option>
                                    <option value="location2">Location 2</option>
                                    <option value="location3">Location 3</option>
                                </select>
                            </div>
                        </div>

                        <div className="formgroup">
                            <label htmlFor="contact">Contact</label>
                            <div className="contact-info">
                                <span><div className="contact-item">
                                    <i className="fas fa-phone"></i>
                                    <span><LocalPhoneIcon />+33.89.93.93.04</span>
                                </div>
                                    <div className="contact-item">
                                        <i className="fas fa-envelope"></i>
                                        <span><AlternateEmailIcon />alexarawles@gmail.com</span>
                                    </div>
                                </span>
                                <br />
                                <div className="contact-item">
                                    <i className="fas fa-phone"></i>
                                    <span><LocalPhoneIcon />635</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
