
import React , { useState } from "react";
import TaskStatusDropdown from '../status-drop-down';
import DateSelector from '../date-selector';
import '../../../css/task-content-view.css';
/**
 * Component to show task details in content view
 */


function TaskContentView(props){


    const [status, setStatus] = useState('');
    const [target,setTarget] = useState('')
    if(props.taskdata==null){
        console.log("No task data was found")
        return
    }
    function update_task_target(date){
        const formData={
            "target":date,
            "target_for": "task",
            "id": props.taskdata.id
        }
        fetch('http://127.0.0.1:8000/target_update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Specify the content type as JSON
        },
        body: JSON.stringify(formData), // Convert the form data to JSON
        })
        .then((response) => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Response from server:', data);
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
            window.alert("Target could not be updated :( \n\n "+ error.message)
    });
    }
    const task=props.taskdata;
    
    return (
        <div className="task-view">
            <div className="task-title">
                Task {task.id} {task.title}
            </div>
            <div className="task-header">
                <div className="task-status"><TaskStatusDropdown selectedStatus={status} setSelectedStatus={setStatus} status_for="task" for_id={props.taskdata.id}/></div>
                <div className="task-owner">{task.owner}</div>
                <div className="task-project">{task.project}</div>
                <div className="task-target"><DateSelector selectedDate ={target?target:task.target} setSelectedDate={setTarget} saveSelectedDate={update_task_target}/></div>
            </div>
            <div className="task-body">
                <div className="task-description">
                    {task.description}
                </div>
                <div className="activity">
                    <h4 className="activity-header">
                        comments and activity
                    </h4>
                    <div className="activity-body">

                    </div>
                </div>
            </div>
        </div>
    );
};


export default TaskContentView;