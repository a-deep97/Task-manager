import React from "react";
import { useNavigate } from 'react-router-dom';
import '../../../css/list-view.css';

/**
 * This component represents a list view of projects.
 */
function ProjectsListView(props) {

  const navigate=useNavigate();
  
  function handleRowClick(data){
    const state={key:'id',param:data}
    navigate('/project/',{state})
  }
  const listProjects = () => {
    /**
     * Function to define project row components
     */
    let projectRows = [];
    if (props.projectlist == null) {
      return null;
    }
    
      
    for (let i = 0; i < props.projectlist.length; i++) {
      const project = props.projectlist[i];

      // Create JSX representing the <tr> element and its children for a project row
      const rowJSX = (
        <tr className="project-table-row" key={i} onClick={() => handleRowClick(project.id)} >
          <td className="project-row-data">{project.id}</td>
          <td className="project-row-data">{project.title}</td>
          <td className="project-row-data">{project.description}</td>
          <td className="project-row-data">{project.status}</td>
          <td className="project-row-data">{project.owner}</td>
        </tr>
      );

      // Push the JSX into the array
      projectRows.push(rowJSX);
    }
    return projectRows;
  };

  const projectRows = listProjects();
  console.log("props",props)
  return (
    <table id="table" className="table">
      <thead>
        <tr id="table-row">
          <th className="col-id">Project ID</th>
          <th className="col-title">Title</th>
          <th className="col-owner">Description</th>
          <th className="col-target">Status</th>
          <th className="col-progress">Owner</th>
          <th className="col-status">Target</th>
        </tr>
      </thead>
      <tbody>
        {projectRows}
      </tbody>
    </table>
  );
}

export default ProjectsListView;
