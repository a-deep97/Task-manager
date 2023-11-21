
import React , { useState } from "react";
import TaskStatusDropdown from '../status-drop-down';
import '../../../css/task-content-view.css';
/**
 * Component to show task details in content view
 */


function TaskContentView(props){


    const [status, setStatus] = useState('');
    if(props.taskdata==null){
        console.log("No task data was found")
        return
    }
    const task=props.taskdata;
    return (
        <div className="task-view">
            <div className="task-title">
                Task {task.id} {task.title}
            </div>
            <div className="task-header">
                <div className="task-status"><TaskStatusDropdown selectedStatus={status} setSelectedStatus={setStatus} status_for="task" for_id={props.taskdata.id}/></div>
                <div className="task-owner">{task.owner}</div>
                <div className="task-project">{task.project}</div>
                <div className="task-target">{task.target}</div>
            </div>
            <div className="task-body">
                <div className="task-description">
                    {task.description}
                </div>
                <div className="activity">
                    <h4 className="activity-header">
                        comments and activity
                    </h4>
                    <div className="activity-body">

                    </div>
                </div>
            </div>
        </div>
    );
};


export default TaskContentView;