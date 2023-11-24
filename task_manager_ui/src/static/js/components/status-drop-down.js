import React from 'react';
import '../../css/status-drop-down.css';

function StatusDropdown(props) {
  const handleStatusChange = (event) => {
    console.log(props)
    if (props.update_status==true){
      saveStatus(event.target.value,props.status_for,props.for_id)
    }
    props.setSelectedStatus(event.target.value);
  };

  // Function to save the selected status (you can replace this with your save logic)
  const saveStatus = (status,status_for,for_id) => {
    // Replace this with your logic to save the selected status
    //alert(`Selected status: ${status} saved!`);
    postStatusUpdate({
      "status":status,
      "status_for":status_for,
      "id":for_id
    })
  };
  function postStatusUpdate(formData){
    fetch('http://127.0.0.1:8000/status_update', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Specify the content type as JSON
        },
        body: JSON.stringify(formData), // Convert the form data to JSON
        })
        .then((response) => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Response from server:', data);
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
            window.alert("Progress Status could not be updated :( \n\n "+ error.message)
    });
    
}

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
