import { Modal } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState, useEffect, useRef } from 'react';
import { Calendar as BigCalendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "./Calendar.css"
import { useLoaderData, useParams } from 'react-router-dom';
const localizer = momentLocalizer(moment);

function Calendar() {
    const [events, setEvents] = useState([]);
    const [newEvent, setNewEvent] = useState();
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);//For Displaying the Event
    const [NewEventModal, setNewEventModal] = useState(false);//To record a new Event
    const selectedDate = new Date();
    let { Invitation } = useParams();// Needs Proper Backend
    useEffect(() => {
        const RecievedEvent = JSON.parse(Invitation);
        if (RecievedEvent != null && RecievedEvent != undefined) {
            const date = moment(RecievedEvent.start);
            const start = date.toDate();
            const end = moment(start).add(1, 'days').toDate();
            end.setHours(0, 0, 0, 0)
            const temp = {
                title: RecievedEvent.title,
                start: start,
                end: end,
            }
            setEvents([...events, temp]);


        }
    }, [Invitation]);

    function handleModelClose() {
        setModalOpen(false);
    }

    const handleSelectEvent = (event) => {
        setSelectedEvent(event);
        setModalOpen(true);
    };

    const handleSelectSlot = (slotInfo) => {
        handleNewEventModalOpen();
        const start = slotInfo.start;
        const end = slotInfo.end;
        setNewEvent({ ...newEvent, start, end });
    };

    function remove() {
        const newEvents = events.filter((event) => event.title !== selectedEvent.title);
        setEvents(newEvents);
        setModalOpen(false);

    }
    const handleNewEventModalOpen = () => {
        setNewEventModal(true);
    };
    const handleNewEventModalClose = () => {
        setNewEventModal(false);
    };
    const handleNewEventSubmit = (e) => {
        e.preventDefault();
        const title = e.target[0].value;
        setNewEvent((prev) => {
            const temp = prev;
            temp.title = title;
            return temp;
        });
        setNewEventModal(false);
        setEvents([...events, newEvent]);
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
                onClose={handleModelClose}
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
                            <h3>Event Title: {selectedEvent && selectedEvent.title}</h3>
                        </div>
                        {selectedEvent && <div className="Event-Description">
                            <p><b>Start:</b> {selectedEvent.start.toLocaleString()}</p>
                            <p><b>End:</b> {selectedEvent.end.toLocaleString()}</p>
                            <button onClick={remove}>Remove Event</button>
                        </div>}
                    </div>
                </Box>
            </Modal>

            {/* Modal For New Event */}
            <Modal
                open={NewEventModal}
                onClose={handleNewEventModalClose}
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
                    <form action="" onSubmit={handleNewEventSubmit}>
                        <div className="Event-Input-Modal">
                            <div>
                                <label htmlFor="title">Enter Event</label>
                                <input type="text" name='title' required={true} />
                            </div>
                            <button type='submit' >Add</button>

                        </div>
                    </form>
                </Box>
            </Modal>

        </>
    );
};

export default Calendar;





