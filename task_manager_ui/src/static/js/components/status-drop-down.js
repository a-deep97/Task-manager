
import React, { useState } from 'react';
import '../../css/status-drop-down.css';

function TaskStatusDropdown() {
  
    const initialStatus = null
    const [selectedStatus, setSelectedStatus] = useState(initialStatus);
    const taskStatus = {
        PLANNED: "Planned",
        PROGRESS: "Progress",
        COMPLETED: "Completed"
    }
    // Function to handle the selection of a status
    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    // Function to save the selected status (you can replace this with your save logic)
    const saveStatus = () => {
        // Replace this with your logic to save the selected status
        alert(`Selected status: ${selectedStatus} saved!`);
    };
    const taskStatuses = ['Planned', 'Progress', 'Completed', 'None'];
    return (
        <div >
        <select value={selectedStatus} onChange={handleStatusChange}>
            {taskStatuses.map((status) => (
            <option key={status} value={status}>
                {status}
            </option>
            ))}
        </select>
        </div>
    );
}

export default TaskStatusDropdown;
