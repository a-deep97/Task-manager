
import React from "react";
import '../../../css/project-content-view.css';
/**
 * Component to show project details in content view
 */


function ProjectContentView(props){

    if(props.projectdata===null){
        console.log("No project data was found")
        return
    }
    const project=props.projectdata;
    console.log(project)
    return (
        <div className="project-view">
            <div className="project-title">
                Project {project.id} {project.title}
            </div>
            <div className="project-header">
                <div className="project-status">{project.status}</div>
                <div className="project-owner">{project.owner}</div>
            </div>
            <div className="project-body">
                <div className="project-description">
                    {project.description}
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


export default ProjectContentView;