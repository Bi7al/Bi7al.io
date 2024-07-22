import React from 'react';

export default function MessageComponent({ data, setData }) {
    // Extract the message type from the data prop
    const messageType = data.type;

    // Handler for text and select inputs
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    // Handler for date inputs
    const handleInvitation = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: new Date(value) });
    };

    // Initialize the message component variable
    let messageComponent;

    // Determine which component to render based on the message type
    switch (messageType) {
        case 'Message':
            messageComponent = (
                <>
                    <label htmlFor="description">Description:</label>
                    <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="10"
                        onChange={handleChange}
                        required
                    />
                </>
            );
            break;
        case 'Survey':
            messageComponent = (
                <>
                    <label>Rating (out of 5 stars):</label>
                    <select name="rating" onChange={handleChange} required>
                        <option value="" hidden>Select</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </>
            );
            break;
        case 'Invitation':
            messageComponent = (
                <>
                    <label htmlFor="Event-Date">Date of Event:</label>
                    <input
                        type="date"
                        id="Event-Date"
                        className="Invitation-Date"
                        name="date"
                        onChange={handleInvitation}
                    />
                </>
            );
            break;
        default:
            messageComponent = <p>Select a message type</p>;
    }

    return messageComponent;
}
