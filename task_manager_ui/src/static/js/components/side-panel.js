import { Component } from "react";
import '../../css/side-panel.css'

/*
    This component represents the left side panel for main container
*/

class SidePanel extends Component{
    render(){
        return(
            <div className="side-panel">
                <div id="side-panel-heading">Tasks</div>
                <button id="create-task-btn"> Create Task</button>
                <div id="side-panel-contents">
                    <div id="side-panel-link-container">
                        <div id="my-tasks" className="side-panel-links">My Tasks</div>
                        <div id="my-projects" className="side-panel-links">My Projects</div>
                        <div id="my-tasks" className="side-panel-links">My Tasks</div>
                    </div>
                </div>
            </div>
        );
    };
}

export default SidePanel