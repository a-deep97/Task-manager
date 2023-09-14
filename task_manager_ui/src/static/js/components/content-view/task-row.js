import React from "react";
import { useNavigate } from 'react-router-dom';
/**
 * This component represents a row data for project details
 */
function TaskRow(props) {

    return (
    <tr className="task-table-row">
        <td className="task-row-data">{props.task.id}</td>
        <td className="task-row-data">{props.task.title}</td>
        <td className="task-row-data">{props.task.owner}</td>
        <td className="task-row-data">{props.task.description}</td>
        <td className="task-row-data">{props.task.status}</td>
        <td className="task-row-data">{props.task.target}</td>
        <td className="task-row-data">{props.task.project}</td>
    </tr>
    );
}

export default TaskRow;