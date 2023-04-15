import { Component } from "react";
import '../../../css/projects-list-view.css';
import ProjectRow from './project-row';

/**
 * this component represent list view od projects
 */
class ProjectsListView extends Component{
    constructor(props){
        super(props)
    }

    list_project(){
        /**
         * function to define project row components
         */
        let project_rows=[]
        if (this.props.projectlist == null){
            return null
        }
        for (let i=0;i<this.props.projectlist.length;i++){
            project_rows.push(<ProjectRow project={this.props.projectlist[i]} />)
        }
        return project_rows
    }

    render(){
        const project_rows=this.list_project()
        return(
            <table id="project-table" className="table">
                <thead>
                    <tr id="project-table-row">
                        <th className="col-project-id">Project ID</th>
                        <th className="col-title">Title</th>
                        <th className="col-owner">Description</th>
                        <th className="col-target">Status</th>
                        <th className="col-progress">Owner</th>
                        <th className="col-status">Target</th>
                    </tr>
                </thead>
                <tbody>
                    {project_rows}
                </tbody>
            </table>
        );
    }
}

export default ProjectsListView