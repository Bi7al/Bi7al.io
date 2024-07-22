import React from 'react';
import "./main.css";
import user from "../../assets/Ellipse 36.png";
import CloseIcon from '@mui/icons-material/Close';
import { Rating } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';

function News({ news, remove }) {
    // Function to handle the removal of the news item
    function handleClose() {
        remove(news.id);
    }

    // Initialize variables to hold the body and source of the news item
    let body;
    let From;

    // Determine the type of news and set the body and source accordingly
    switch (news.type) {
        case "Message":
            body = <p>{news.description}</p>;
            From = <p>Message From XXX</p>;
            break;
        case "Invitation":
            // Create an invitation object for easier manipulation and readability
            const Invitation = {
                title: news.title,
                start: news.date,
            };
            body = (
                <div className="invitation">
                    <h6>{news.date.toDateString()}</h6>
                    <Link to={`calendar/${JSON.stringify(Invitation)}`}>
                        <CalendarMonthIcon />
                    </Link>
                </div>
            );
            From = <p>Invitation From XXX</p>;
            break;
        case "Survey":
            body = (
                <div className="Survey-Rating">
                    <Rating name="read-only" value={news.rating} size='large' readOnly />
                </div>
            );
            From = <p>Survey From XXX</p>;
            break;
        default:
            // Handle unexpected news types gracefully
            body = <p>Unknown news type</p>;
            From = <p>Unknown Source</p>;
            break;
    }

    return (
        <div className="news">
            <div className='newsHeader'>
                <div className="span">
                    <img src={user} alt="" />
                    <h3>{news.type}</h3>
                </div>
                <button onClick={handleClose}>
                    <CloseIcon />
                </button>
            </div>
            <div className="newsBody">
                <h4>{news.title}</h4>
                <div className="News-desc">
                    {body}
                </div>
            </div>
            <div className="newsFooter">
                {From} | {news.date.toDateString()}
            </div>
        </div>
    );
}

export default News;
