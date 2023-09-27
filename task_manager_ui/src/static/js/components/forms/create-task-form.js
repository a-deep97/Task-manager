import React, { useState } from "react";
import '../../../css/task-content-view.css';

function CreateTaskForm(props) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [owner, setOwner] = useState("");
  const [project, setProject] = useState("");
  const [target, setTarget] = useState("");
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
    }    
    props.onSubmit(formData)
  };

  return (
    <form className="task-view" onSubmit={handleSubmit}>
        <div className="task-title" >
          <input
          className="form-field"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="task-header">
          <input
              className="task-status form-field"
              type="text"
              placeholder="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
          />
          <input
            className="task-owner form-field"
            type="text"
            placeholder="Owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
          <input
            className="task-project form-field"
            type="text"
            placeholder="Project"
            value={project}
            onChange={(e) => setProject(e.target.value)}
          />
          <input
            className="task-target form-field"
            type="text"
            placeholder="Target"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
        </div>
        <div className="task-body">
          <textarea
            className="task-description form-field"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit" className="save-btn" >Save</button>
        </div>
    </form>
  )
}

export default CreateTaskForm;
