import { Component } from "react";
import { Form, useNavigate } from 'react-router-dom';
import CustomButton from "./utilities/button"; 
import '../../css/side-panel.css'

/*
    This component represents the left side panel for main container
*/

function SidePanel(props){

    const navigate=useNavigate();
    function handleSubmit(navigateTO){
        
        /** Function to handle click event on side panel lists */
        if (navigateTO==="projects"){
            navigate('/projects/',{param:null,key:null})
        }
        else if (navigateTO==="tasks"){
            navigate('/tasks/')
        } 
        else if (navigateTO==="create-task"){
            navigate("/task/create/")
        }
        else if (navigateTO==="create-project"){
            navigate("/project/create")
        }
    }

    return(
            <div className="side-panel">
                <div id="side-panel-heading">Tasks</div>
                <div className="panel-section">
                    <CustomButton onClick={() => handleSubmit('create-task')} value="Create Task"/>
                    <CustomButton onClick={() => handleSubmit('create-project')} value="Create Project"/>
                </div>
                <hr></hr>
                <div className="panel-section">
                    <div id="my-tasks" className="side-panel-links" onClick={() => handleSubmit("tasks")}>My Tasks</div>
                    <div id="my-projects" className="side-panel-links" onClick={() => handleSubmit("projects")}>My Projects</div>
                </div>
            </div>
        )
}

export default SidePanel