import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect, useRef } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "./Calendar.css"
import { useParams } from 'react-router-dom';

// Initialize the localizer with moment
const localizer = momentLocalizer(moment);

function Calendar() {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState({});
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [modalOpen, setModalOpen] = useState(false); // For displaying the event details
    const [newEventModalOpen, setNewEventModalOpen] = useState(false); // For adding a new event
    const selectedDate = new Date();
    let { Invitation } = useParams(); // Fetch invitation data from URL params

    useEffect(() => {
        const RecievedEvent = JSON.parse(Invitation);
        if (RecievedEvent != null && RecievedEvent != undefined) {
            const date = moment(RecievedEvent.start);
            const start = date.toDate();
            const end = date.add(1, 'days').toDate();
            start.setHours(0, 0, 0, 0);
            end.setHours(0, 0, 0, 0)
            const temp = {
                title: RecievedEvent.title,
                start: start,
                end: end,
            }
            setEvents([...events, temp]);


        }
    }, [Invitation]);

    // Function to close the event details modal
    const handleModalClose = () => {
        setModalOpen(false);
    };

    // Function to handle event selection and open the details modal
    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
        setModalOpen(true);
    };

    // Function to handle slot selection and open the new event modal
    const handleSelectSlot = (slotInfo) => {
        setNewEvent({ start: slotInfo.start, end: slotInfo.end });
        setNewEventModalOpen(true);
    };

    // Function to remove the selected event
    const handleRemoveEvent = () => {
        setEvents(events.filter(event => event !== selectedEvent));
        setModalOpen(false);
    };

    // Function to close the new event modal
    const handleNewEventModalClose = () => {
        setNewEventModalOpen(false);
    };

    // Function to handle submission of a new event
    const handleNewEventSubmit = (e) => {
        e.preventDefault();
        const title = e.target.title.value;
        const event = { ...newEvent, title };
        setEvents(prevEvents => [...prevEvents, event]);
        setNewEventModalOpen(false);
    };

    return (
        <>
            <div className="Background-cover">
                <div className='CalendarContainer'>
                    <BigCalendar
                        localizer={localizer}
                        events={events}
                        selectable={true}
                        onSelectEvent={handleSelectEvent}
                        onSelectSlot={handleSelectSlot}
                        views={['month']}
                        defaultDate={selectedDate}
                    />
                </div>
            </div>
            <Modal
                open={modalOpen}
                onClose={handleModalClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: "white",
                }}>
                    <div className="Event-Modal">
                        <div className="Event-Title">
                            <h3>Event Title: {selectedEvent?.title}</h3>
                        </div>
                        {selectedEvent && <div className="Event-Description">
                            <p><b>Start:</b> {selectedEvent.start.toLocaleString()}</p>
                            <p><b>End:</b> {selectedEvent.end.toLocaleString()}</p>
                            <button onClick={handleRemoveEvent}>Remove Event</button>
                        </div>}
                    </div>
                </Box>
            </Modal>

            {/* Modal For New Event */}
            <Modal
                open={newEventModalOpen}
                onClose={handleNewEventModalClose}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}>
                    <form onSubmit={handleNewEventSubmit}>
                        <div className="Event-Input-Modal">
                            <div className='d-flex flex-column m-0'>
                                <label htmlFor="title">Enter Event </label>
                                <input id='eventinput' type="text" name='title' required />
                            </div>
                            <button type='submit'>Add</button>
                        </div>
                    </form>
                </Box>
            </Modal>
        </>
    );
}

export default Calendar;
