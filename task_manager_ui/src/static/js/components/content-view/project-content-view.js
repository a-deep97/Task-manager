
import React , { useState } from "react";
import TaskStatusDropdown from '../status-drop-down';
import { useNavigate } from 'react-router-dom';
import '../../../css/project-content-view.css';
/**
 * Component to show project details in content view
 */


function ProjectContentView(props){

    const [status, setStatus] = useState('');
    const navigate=useNavigate();
    if(props.projectdata===null){
        console.log("No project data was found")
        return
    }
    const project=props.projectdata;
    console.log(project)
    return (
        <div className="project-view">
            <div className="project-title">
                Project {project.id} {project.title}
            </div>
            <div className="project-header">
                <div className="project-status"><TaskStatusDropdown  selectedStatus={status} setSelectedStatus={setStatus} status_for="project" for_id={props.projectdata.id}/></div>
                <div className="project-owner">{project.owner}</div>
            </div>
            <div className="project-body">
                <div className="project-description">
                    {project.description}
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


export default ProjectContentView;