import React from 'react'
import "./TaskDescription.css"
function TaskDescription({ task }) {
    return (
        <>
            {
                task ? <div className='Cover'>

                    <div className="Description">
                        <div className="Title-Description">
                            <h1>{task.title}</h1>
                            <p>{task.date}|Invited By:{task.invitedBy}</p>
                        </div>
                        <div className="Description-body">
                            <p>Description</p>
                            <div className="Description-Area">
                                <p>{task.description}</p>
                            </div>
                        </div>

                    </div>
                </div> : null
            }

        </>
    )
}

export default TaskDescription