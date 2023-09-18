import { Component } from "react";
import { useNavigate } from 'react-router-dom';

import '../../css/side-panel.css'

/*
    This component represents the left side panel for main container
*/

function SidePanel(props){

    const navigate=useNavigate();
    function handleSubmit(navigateTO){
        /** Function to handle click event on side panel lists */
        if (navigateTO=="projects"){
            navigate('/projects/',{param:null,key:null})
        }
        else if(navigateTO=="tasks"){
            navigate('/tasks/')
        } 
    }

    return(
            <div className="side-panel">
                <div id="side-panel-heading">Tasks</div>
                <button id="create-task-btn"> Create Task</button>
                <div id="side-panel-contents">
                    <div id="side-panel-link-container">
                        <div id="my-tasks" className="side-panel-links" onClick={() => handleSubmit("tasks")}>My Tasks</div>
                        <div id="my-projects" className="side-panel-links" onClick={() => handleSubmit("projects")}>My Projects</div>
                    </div>
                </div>
            </div>
        )
}

export default SidePanel