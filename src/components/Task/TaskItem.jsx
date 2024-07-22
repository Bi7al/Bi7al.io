import React from 'react'
import "./Task-Item.css"
function TaskItem({ task, getTask }) {
    function sendID() {
        getTask(task.id);
    }
    return (
        <div className="task">
            <div className="task-header">
                <div className='task-title'><h3 onClick={sendID}>{task.title}</h3></div>
                <input type="checkbox" />
                <button></button>
            </div>
            <div className="task-body">
                <p>{task.date}|Invited By:{task.invitedBy}</p>
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default TaskItem