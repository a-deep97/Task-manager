
import { Component } from "react";
import '../../../css/projects/project-row.css';
/**
 * This class represents a row of project details
 */


class ProjectRow extends Component{
    render(){
        return(
            <div id="project-row">
                <div className="project-row">project id</div>
                <div className="project-row">title</div>
                <div className="project-row">owner</div>
                <div className="project-row">target</div>
                <div className="project-row">Progress</div>
                <div className="project-row">status</div>
            </div>
        );
    };
};

export default ProjectRow