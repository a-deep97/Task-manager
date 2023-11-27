
import React , { useEffect, useState } from "react";
import TaskStatusDropdown from '../status-drop-down';
import CreateCommentForm from '../forms/create-comment-form';
import DateSelector from '../date-selector';
import ActivityView from '../content-view/activity-view';
import '../../../css/content-view.css';
/**
 * Component to show task details in content view
 */


function TaskContentView(props){


    const [status, setStatus] = useState(null);
    const [target,setTarget] = useState('');
    
    if(props.taskdata==null){
        console.log("No task data was found")
        return
    }
    
    if(status==null){
        setStatus(props.taskdata.status)
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
    return (
        <div className="view">
            <div className="info">
                <div className="title">
                    Task {props.taskdata.id} {props.taskdata.title}
                </div>
                <div className="header">
                    <div className="status"><TaskStatusDropdown selectedStatus={status} setSelectedStatus={setStatus} status_for="task" for_id={props.taskdata.id} update_status={true}/></div>
                    <div className="owner">{props.taskdata.owner}</div>
                    <div className="project">{props.taskdata.project}</div>
                    <div className="target"><DateSelector selectedDate ={target?target:props.taskdata.target} setSelectedDate={setTarget} saveSelectedDate={update_task_target}/></div>
                </div>
                <div className="body">
                    <div className="description">
                        <div dangerouslySetInnerHTML={{ __html: props.taskdata.description }}/>
                    </div>
                </div>
            </div>
            <div className="activity">
                <h4 className="activity-header">
                    comments and activity
                </h4>
            <ActivityView task_id = {props.taskdata.id}/>
        </div>
 </div>
    );
};
export default TaskContentView;