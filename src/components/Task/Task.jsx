
import { useState } from "react";
import TaskList from "./TaskList";
import TaskDescription from "./TaskDescription";
import "./Task.css"
export default function Task() {
    const [tasks, addTask] = useState([]);

    const [task, setTask] = useState();
    function getTask(id) {
        const task = tasks.find((task) => task.id === id);
        setTask(task);
    }

    return (<>

        <div className="taskContainer">

            <div className="Task-Listing">
                <TaskList tasks={tasks} addTask={addTask} getTask={getTask} />

            </div>
            <div className="Task-Description">
                <TaskDescription task={task} />
            </div>
        </div>



    </>
    );
}