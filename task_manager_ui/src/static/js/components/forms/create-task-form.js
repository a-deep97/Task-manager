import React, { useState } from "react";
import StatusDropdown from '../status-drop-down';
import DateSelector from '../date-selector';
import CustomButton from '../utilities/button';
import TextBox from '../utilities/text-box';
import '../../../css/form-view.css'

function CreateTaskForm(props) {

  const today = new Date().toISOString().slice(0, 10); 
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState('None');
  const [owner, setOwner] = useState("");
  const [project, setProject] = useState("");
  const [target, setTarget] = useState(today);
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      title,
      status,
      owner,
      project,
      target,
      description,
    };
    if (!formData.title){
      window.alert("Task title cannot be empty")
      return
    };
    props.onSubmit(formData);
  };

  return (
    <form className="view" onSubmit={handleSubmit}>
      <div className="info">
        <div className="title" >
          <input
          className="form-field"
            type="text"
            placeholder="Give it a title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="header">
          <StatusDropdown selectedStatus={status} setSelectedStatus={setStatus} update_status={false}/>
          <input
            className="owner form-field"
            type="text"
            placeholder="Owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
          <input
            className="project form-field"
            type="text"
            placeholder="Project"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          />
         <DateSelector selectedDate={target} setSelectedDate={setTarget} />
        </div>
        <div className="body">
          <TextBox className ="description" text={description} setText={setDescription}/>
          <button type="submit" className="save-btn" >Save</button>
        </div>
      </div>
    </form>
  )
}

export default CreateTaskForm;
