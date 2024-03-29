
import React , { useState } from "react";
import TaskStatusDropdown from '../status-drop-down';
import DateSelector from '../date-selector';
import ActivityView from '../content-view/activity-view';
import { useNavigate } from 'react-router-dom';
import '../../../css/content-view.css';
/**
 * Component to show project details in content view
 */


function ProjectContentView(props){

    const [status, setStatus] = useState('');
    const [target,setTarget] = useState('')
    const navigate=useNavigate();
    if(props.projectdata===null){
        console.log("No project data was found")
        return
    }
    function update_project_target(date){
        const formData={
            "target":date,
            "target_for": "project",
            "id": props.projectdata.id
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
    const project=props.projectdata;
    return (
        <div className="view">
            <div className="info">
                <div className="title">Project {project.id} {project.title}</div>
                <div className="header">
                    <div className="status"><TaskStatusDropdown  selectedStatus={status} setSelectedStatus={setStatus} status_for="project" for_id={props.projectdata.id}/></div>
                    <div className="owner">{project.owner}</div>
                    <div className="target"><DateSelector selectedDate ={target?target:project.target} setSelectedDate={setTarget} saveSelectedDate={update_project_target}/></div>
                </div>
                <div className="body">
                    <div className="description">
                        <div dangerouslySetInnerHTML={{ __html: props.projectdata.description }}/>
                    </div>
                </div>
            </div>
            <div className="activity">
                <h4 className="activity-header">
                    comments and activity
                </h4>
                <ActivityView id = {props.projectdata.id}/>
            </div>            
        </div>
    );
};


export default ProjectContentView;