import React from "react";
import { useNavigate } from 'react-router-dom';
import '../../../css/list-view.css';

/**
 * This component represents a list view of tasks.
 */
function TaskListView(props) {

    const navigate=useNavigate();
    function handleRowClick(data){
        const state={key:'id',param:data}
        navigate('/task/',{state})
      }

    const listTasks = () => {
        /**
         * Function to define task row components
         */
        let taskRows = [];
        if (props.tasklist == null) {
        return null;
        }
        for (let i = 0; i < props.tasklist.length; i++) {
            const task = props.tasklist[i];
            // Create JSX representing the <tr> element and its children
            const rowJSX = (
                <tr className="task-table-row" key={i} onClick={() => handleRowClick(task.id)} >
                    <td className="row-data">{task.id}</td>
                    <td className="row-data">{task.title}</td>
                    <td className="row-data">{task.owner}</td>
                    <td className="row-data">{task.description}</td>
                    <td className="row-data">{task.status}</td>
                    <td className="row-data">{task.target}</td>
                    <td className="row-data">{task.project}</td>
                </tr>
            );

            // Push the JSX into the array
            taskRows.push(rowJSX);
        }
        return taskRows;
    };
    const taskRows = listTasks();

    return (
        <table id="table" className="table">
        <thead>
            <tr id="table-row">
            <th className="col-id">Task ID</th>
            <th className="col-title">Title</th>
            <th className="col-owner">Owner</th>
            <th className="col-description">Description</th>
            <th className="col-status">Status</th>
            <th className="col-target">Target</th>
            <th className="col-project">Project</th>
            </tr>
        </thead>
        <tbody>
            {taskRows}
        </tbody>
        </table>
    );
}

export default TaskListView;
