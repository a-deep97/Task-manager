import React, { useState } from "react";
import '../../../css/project-content-view.css';

function CreateProjectForm(props) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [owner, setOwner] = useState("");
  const [target, setTarget] = useState("");
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
    props.onSubmit(formData)
  };

  return (
    <form className="project-view" onSubmit={handleSubmit}>
        <div className="project-title" >
          <input
          className="form-field"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="project-header">
          <input
              className="project-status"
              type="text"
              placeholder="Status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
          />
          <input
            className="project-owner"
            type="text"
            placeholder="Owner"
            value={owner}
            onChange={(e) => setOwner(e.target.value)}
          />
          <input
            className="project-target"
            type="text"
            placeholder="Target"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          />
        </div>
        <div className="project-body">
          <textarea
            className="project-description"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="form-field">
            <button type="submit">Save</button>
          </div>
        </div>
    </form>
  )
}

export default CreateProjectForm;
