import React, { useState } from 'react'
import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import News from './News';
import './main.css'
import MessageComponent from './MessageComponent';
function Feed() {
    //For MODAL
    const [open, setOpen] = React.useState(false);

    const [data, SetData] = useState({
        type: "",
        title: "",
        description: "",
        date: "",
        rating: "",
    })
    const [feed, SetFeed] = useState([]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        bg: "white",


    };
    const handleOpen = () => setOpen(true);
    function handleClose() {
        setOpen(false);
        SetData({
            type: "",
            title: "",
            description: "",
            date: "",
            rating: "",
        });
    }

    function handleChange(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        SetData({ ...data, [fieldName]: fieldValue })
    }

    //prevents default behaviour of form
    function handleSubmit(e) {
        e.preventDefault();
        setOpen(false);
        addFeed();

    }
    //NewsFeed Container
    function addFeed() {
        const dateNow = new Date();
        SetFeed([...feed, { ...data, id: dateNow.getTime(), date: dateNow }]);
        SetData({
            type: "",
            title: "",
            description: "",
            date: "",
            rating: "",
        });


    }
    function remove(id) {
        const newFeed = feed.filter((item) => item.id !== id)
        SetFeed(newFeed);

    }

    return (
        <>
            <div className='header'>
                <p>News Feed</p>
                <button onClick={handleOpen}>+ <b>Write a News</b></button>
            </div>


            <div className='newsFeedContainer'>
                {
                    feed.map((news, index) => {
                        return (
                            <News key={index} news={news} remove={remove} />
                        )
                    })
                }
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
                                <input type="radio" name='type' id='Message' value={"Message"} onChange={handleChange} required={true} />
                                <label htmlFor="Survey">Survey</label>
                                <input type="radio" name='type' id='Survey' value={"Survey"} onChange={handleChange} required={true} />
                                <label htmlFor="Event">Invitation</label>
                                <input type="radio" name='type' id='Event' value={"Invitation"} onChange={handleChange} required={true} />
                            </div>
                            <div className="title">
                                <label htmlFor="title">Title:</label>
                                <input type="text" id='title' name='title' onChange={handleChange} required={true} />

                                <MessageComponent data={data} SetData={SetData} />
                            </div>
                        </div>
                        <button type='submit' className='submitButton'>Submit</button>
                        <button className='submitButton' onClick={handleClose}>Close</button>
                    </form>
                </Box>
            </Modal >
        </>
    )
}

export default Feed