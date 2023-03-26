import { Component } from "react";
import '../../css/projects-headers.css'

/**
 * This component represents headers for projects content
 */

class ProjectsHeader extends Component{
    render(){
        return(
            <div id="projects-headers">
                <div className="projects-header">Project ID</div>
                <div className="projects-header">Title</div>
                <div className="projects-header">Owner</div>
                <div className="projects-header">Target</div>
                <div className="projects-header">Progress</div>
                <div className="projects-header">Status</div>
            </div>
        )
    };
}

export default ProjectsHeader