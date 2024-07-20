
export default function MessageComponent({ data, SetData }) {
    let messageType = data.type;
    let date;
    function handleChange(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        SetData({ ...data, [fieldName]: fieldValue })
    }
    function handleInvitation(e) {
        const fieldName = e.target.name;
        const fieldValue = new Date(e.target.value);
        SetData({ ...data, [fieldName]: fieldValue })
    }
    let messageComponent;

    switch (messageType) {
        case 'Message':
            messageComponent = (
                <>
                    <label htmlFor="description">Description:</label>
                    <textarea name="description" id="description" cols="30" rows="10" onChange={handleChange} required={true}></textarea>
                </>
            );

            break;
        case 'Survey':
            messageComponent = (

                <>
                    <label>Rating (out of 5 stars):</label>
                    <select name='rating' onChange={handleChange} required={true}>
                        <option value="" hidden={true} >Select</option>
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
            messageComponent = (<>
                <label htmlFor="Event-Date">Date of Event:</label>
                <input type="date" id='Event-Date' className='Invitation-Date' name='date' onChange={handleInvitation} />
            </>)
            break;
        default:
            messageComponent = <p>Select a message type</p>;
    }
    return (messageComponent);
};

