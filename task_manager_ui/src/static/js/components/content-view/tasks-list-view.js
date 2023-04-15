import { Component } from "react";
import '../../../css/list-view.css';
import TaskRow from './task-row';

/**
 * this component represent list view od projects
 */
class TaskListView extends Component{
    constructor(props){
        super(props)
    }

    list_task(){
        /**
         * function to define project row components
         */
        let task_rows=[]
        if (this.props.tasklist == null){
            return null
        }
        for (let i=0;i<this.props.tasklist.length;i++){
            task_rows.push(<TaskRow task={this.props.tasklist[i]} />)
        }
        return task_rows
    }

    render(){
        const task_rows=this.list_task()
        return(
            <table id="table" className="table">
                <thead>
                    <tr id="table-row">
                        <th className="col-id">Task ID</th>
                        <th className="col-title">Title</th>
                        <th className="col-description">Owner</th>
                        <th className="col-owner">Description</th>
                        <th className="col-status">Status</th>
                        <th className="col-target">Target</th>
                        <th className="col-project">Project</th>
                    </tr>
                </thead>
                <tbody>
                    {task_rows}
                </tbody>
            </table>
        );
    }
}

export default TaskListView