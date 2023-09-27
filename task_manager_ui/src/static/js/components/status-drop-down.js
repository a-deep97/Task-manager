import React from 'react';
import '../../css/status-drop-down.css';

function StatusDropdown(props) {
  const handleStatusChange = (event) => {
    props.setSelectedStatus(event.target.value);
  };

  // Function to save the selected status (you can replace this with your save logic)
  const saveStatus = () => {
    // Replace this with your logic to save the selected status
    alert(`Selected status: ${props.selectedStatus} saved!`);
  };

  function getStatusColor(status) {
    switch (status) {
      case 'Planned':
        return 'blue';
      case 'Progress':
        return 'green';
      case 'None':
        return 'white';
      case 'Completed':
        return 'grey';
      default:
        return 'white'; // Default color for other statuses
    }
  }

  const taskStatuses = ['Planned', 'Progress', 'Completed', 'None'];

  return (
    <div>
      <select value={props.selectedStatus} onChange={handleStatusChange} className="custom-dropdown">
        {taskStatuses.map((status) => (
          <option
            key={status}
            value={status}
            style={{ backgroundColor: getStatusColor(status) }}
          >
            {status}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StatusDropdown;
