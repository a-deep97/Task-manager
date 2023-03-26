import { Component } from "react";

/**
 * This component represents a row data for project details
 */

class ProjectRow extends Component{
    render(){
        return(
            <tr className="project-table-row">
                <td className="project-row-data" placeholder="project id">project id</td>
                <td className="project-row-data" placeholder="project id">title</td>
                <td className="project-row-data" placeholder="project id">owner</td>
                <td className="project-row-data" placeholder="project id">target</td>
                <td className="project-row-data" placeholder="project id">Progress</td>
                <td className="project-row-data" placeholder="project id">status</td>
            </tr>
        );
    }
}

export default ProjectRow