import { Component } from "react";
import '../../../css/projects-list-view.css';
import ProjectRow from './project-row';

/**
 * this component represent list view od projects
 */
class ProjectsListView extends Component{
    render(){
        return(
            <table id="project-table" className="table">
                <tr id="project-table-row">
                    <th className="col-project-id">Project ID</th>
                    <th className="col-title">Title</th>
                    <th className="col-owner">Owner</th>
                    <th className="col-target">Target</th>
                    <th className="col-progress">Progress</th>
                    <th className="col-status">Status</th>
                </tr>
                <ProjectRow />
            </table>
        );
    }
}

export default ProjectsListView