import React, { useState } from 'react';
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import News from './News';
import './main.css';
import MessageComponent from './MessageComponent';

function Feed() {
    // State for controlling the modal visibility
    const [open, setOpen] = useState(false);

    // State for holding the current data being inputted
    const [data, setData] = useState({
        type: "",
        title: "",
        description: "",
        date: "",
        rating: "",
    });

    // State for holding the list of news items
    const [feed, setFeed] = useState([]);

    // Style for the modal
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
    };

    // Function to open the modal
    const handleOpen = () => setOpen(true);

    // Function to close the modal and reset the data
    const handleClose = () => {
        setOpen(false);
        setData({
            type: "",
            title: "",
            description: "",
            date: "",
            rating: "",
        });
    };

    // Function to handle changes in the input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setOpen(false);
        addFeed();
    };

    // Function to add a new news item to the feed
    const addFeed = () => {
        const dateNow = new Date();
        const newFeedItem = data.date ? { ...data, id: dateNow.getTime() } : { ...data, id: dateNow.getTime(), date: dateNow };
        setFeed([...feed, newFeedItem]);
        setData({
            type: "",
            title: "",
            description: "",
            date: "",
            rating: "",
        });
    };

    // Function to remove a news item from the feed
    const remove = (id) => {
        const newFeed = feed.filter((item) => item.id !== id);
        setFeed(newFeed);
    };

    return (
        <>
            <div className='Feed-Header'>
                <p >News Feed</p>
                <button onClick={handleOpen}>+ <b>Write a News</b></button>
            </div>

            <div className='NewsFeedContainer'>
                {feed.map((news, index) => (
                    <News key={news.id} news={news} remove={remove} />
                ))}
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group'>
                            <div className="radios">
                                Type of Post:
                                <label htmlFor="Message">Message</label>
                                <input type="radio" name='type' id='Message' value="Message" onChange={handleChange} required />
                                <label htmlFor="Survey">Survey</label>
                                <input type="radio" name='type' id='Survey' value="Survey" onChange={handleChange} required />
                                <label htmlFor="Event">Invitation</label>
                                <input type="radio" name='type' id='Event' value="Invitation" onChange={handleChange} required />
                            </div>
                            <div className="title">
                                <label htmlFor="title">Title:</label>
                                <input type="text" id='title' name='title' onChange={handleChange} required />
                                <MessageComponent data={data} setData={setData} />
                            </div>
                        </div>
                        <button type='submit' className='submitButton'>Submit</button>
                        <button type='button' className='submitButton' onClick={handleClose}>Close</button>
                    </form>
                </Box>
            </Modal>
        </>
    );
}

export default Feed;
