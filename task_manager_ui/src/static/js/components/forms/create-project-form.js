import React, { useState } from "react";
import StatusDropdown from '../status-drop-down';
import DateSelector from "../date-selector";  
import '../../../css/form-view.css';

function CreateProjectForm(props) {

  const today = new Date().toISOString().slice(0, 10);
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("None");
  const [owner, setOwner] = useState("");
  const [target, setTarget] = useState(today);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      status,
      owner,
      target,
      description,
    };
    if (!formData.title){
      window.alert("Project title cannot be empty")
      return
    } 
    props.onSubmit(formData)
  };

  return (
    <form className="view" onSubmit={handleSubmit}>
      <div className="info">
        <div className="title" >
          <input
          className="form-field"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="header">
        <StatusDropdown selectedStatus={status} setSelectedStatus={setStatus} />
          <input
            className="owner form-field"
            type="text"
            placeholder="Owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
          <DateSelector selectedDate={target} setSelectedDate={setTarget} />
        </div>
        <div className="body">
          <textarea
            className="description form-field"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button  type="submit" className="save-btn">Save</button>
        </div>
      </div>
    </form>
  )
}

export default CreateProjectForm;
