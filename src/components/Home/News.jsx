import React from 'react'
import "./main.css";
import user from "../../assets/Ellipse 36.png"
import CloseIcon from '@mui/icons-material/Close';
import { Rating } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { Link } from 'react-router-dom';
function News({ news, remove }) {
    function handleClose() {
        remove(news.id);
    }

    let body;
    let From;


    switch (news.type) {
        case "Message":
            body = <p>{news.description}</p>
            From = <p>Message From XXX</p>
            break;
        case "Invitation":
            const Invitation = {
                title: news.title,
                start: new Date(),
            }
            body = <div className="invitation">
                <h6>{news.date.toDateString()}</h6>
                <Link to={`calendar/${JSON.stringify(Invitation)}`}><CalendarMonthIcon /></Link>
            </div>
            From = <p>Invitation From XXX</p>
            break;
        case "Survey":
            body = <div className="Survey-Rating">
                <Rating name="read-only" value={news.rating} size='large' readOnly />
            </div>
            From = <p>Survey From XXX</p>
        default:
            break;
    }
    return (

        <div className="news">
            <div className='newsHeader'>
                <div className="span"><img src={user} alt="" /><h3>{news.type}</h3></div>
                <button onClick={handleClose}><CloseIcon /></button>
            </div>
            <div className="newsBody">
                <h4>{news.title}</h4>
                <div className="News-desc">
                    {body}
                </div>
            </div>
            <div className="newsFooter">
                {From}|
                {news.date.toDateString()}
            </div>

        </div>
    )
}

export default News