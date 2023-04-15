import { Component } from "react";

/**
 * This component represents a row data for project details
 */

class TaskRow extends Component{
    
    constructor(props){
        super(props)
    }

    render(){
        console.log(this.props.task.id)
        return(
            <tr className="task-table-row">
                <td className="task-row-data">{this.props.task.id}</td>
                <td className="task-row-data" >{this.props.task.title}</td>
                <td className="task-row-data" >{this.props.task.owner}</td>
                <td className="task-row-data" >{this.props.task.description}</td>
                <td className="task-row-data" >{this.props.task.status}</td>
                <td className="task-row-data" >{this.props.task.target}</td>
                <td className="task-row-data" >{this.props.task.project}</td>
            </tr>
        );
    }
}

export default TaskRow