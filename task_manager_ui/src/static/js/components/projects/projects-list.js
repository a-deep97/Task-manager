import { Component } from "react";
import '../../../css/projects/projects-list.css';
import ProjectRow from './project-row';
/**
 * This component represents container to list projects
 */
class ProjectsList extends Component{
    render(){
        return(
            <div id="projects-list">
                <ProjectRow />
            </div>
        );
    };
};

export default ProjectsList