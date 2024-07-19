import React, { useState, useRef } from 'react';
import "./TaskList.css";
import TaskItem from './TaskItem';


function TaskList({ tasks, addTask, getTask }) {
    console.log("I was re-Rendered")
    const ref = useRef();
    const [data, SetData] = useState({
        id: "",
        title: "",
        partner: "Invite a User",
        description: "",
        date: "",
        invitedBy: "User ",
    })
    function handleChange(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        SetData({ ...data, [fieldName]: fieldValue })
    }
    function handleDropdown(e) {
        const fieldName = e.target.name;
        const fieldValue = e.target.innerHTML;
        SetData({ ...data, [fieldName]: fieldValue })
    }
    function handleSubmit(e) {
        e.preventDefault();
        ref.current.click();

        const dateNow = new Date();
        const date = dateNow.toDateString();
        let id = dateNow.getTime();

        SetData((data) => {
            const temp = data;
            temp.id = id;
            temp.date = date;
            return temp;
        });
        addTask(
            [...tasks, data]
        );
        const temp = {
            id: "",
            title: "",
            partner: "Invite a User",
            description: "",
            date: "",
            invitedBy: "User "
        }
        SetData(temp);


    }




    return (
        <>
            <div className="List-container">
                <div className="List-header">
                    <button className='NewTask' data-bs-toggle="modal" data-bs-target="#inputForm">Create a Task +</button>
                </div>
                <div className="List-body">
                    {
                        tasks.map((taskItem) => {
                            return <TaskItem key={taskItem.id} task={taskItem} getTask={getTask} />
                        })
                    }
                </div>
            </div>



            {/* <!-- Modal-- > */}
            <div className="modal " id="inputForm" tabIndex="-1" aria-labelledby="New Task" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content modal-lg">
                        <form className='form' onSubmit={handleSubmit}>
                            <div className='New-Task'>
                                <div className='Task-info'>
                                    <div className='Header'>
                                        <label htmlFor="title"><h3>Task Title</h3></label>
                                        <input type="text" id='title' name='title' onChange={handleChange} value={data.title} placeholder='Enter Title' required={true} />
                                    </div>
                                    <div className="dropdown">
                                        <p>Invite Another User</p>
                                        <button className="select " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {data.partner}
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#" onClick={handleDropdown} name="partner">Marie </a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='Task-description'>
                                    <label htmlFor="description">Description:</label>
                                    <textarea name="description" id="description" cols="30" rows="10" onChange={handleChange} value={data.description} placeholder='Enter Description' required={true}></textarea>
                                </div>
                            </div>

                            <div className="form-btn">
                                <button type='submit' className='submitButton'>Submit</button>
                                <button data-bs-dismiss="modal" className='submitButton' type='button' >Close</button>
                            </div>
                        </form>

                    </div>
                    <button hidden={true} ref={ref} data-bs-dismiss="modal"></button>

                </div>
            </div>
        </>
    )
}

export default TaskList