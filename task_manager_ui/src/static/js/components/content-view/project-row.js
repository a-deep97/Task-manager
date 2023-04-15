import { Component } from "react";

/**
 * This component represents a row data for project details
 */

class ProjectRow extends Component{
    
    constructor(props){
        super(props)
    }

    render(){
        return(
            <tr className="project-table-row">
                <td className="project-row-data">{this.props.project.id}</td>
                <td className="project-row-data" >{this.props.project.title}</td>
                <td className="project-row-data" >{this.props.project.description}</td>
                <td className="project-row-data" >{this.props.project.status}</td>
                <td className="project-row-data" >{this.props.project.owner}</td>
            </tr>
        );
    }
}

export default ProjectRow