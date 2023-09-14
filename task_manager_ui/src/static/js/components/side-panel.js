import { Component } from "react";
import { useNavigate } from 'react-router-dom';

import '../../css/side-panel.css'

/*
    This component represents the left side panel for main container
*/

function SidePanel(props){

    const navigate=useNavigate();
    function handleSubmit(event){
        /** Function to handle even in search button submit */
        event.preventDefault()
        if(props.view_type=="projects"){
            navigate('/projects')
        }
        else if(props.view_type=="tasks"){
            navigate('/tasks')
        } 
    }

    return(
            <div className="side-panel">
                <div id="side-panel-heading">Tasks</div>
                <button id="create-task-btn"> Create Task</button>
                <div id="side-panel-contents">
                    <div id="side-panel-link-container">
                        <div id="my-tasks" className="side-panel-links" onClick={handleSubmit}>My Tasks</div>
                        <div id="my-projects" className="side-panel-links">My Projects</div>
                    </div>
                </div>
            </div>
        )
}

export default SidePanel