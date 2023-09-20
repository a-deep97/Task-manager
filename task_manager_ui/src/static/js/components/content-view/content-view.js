
import { Component } from 'react';
import '../../../css/content-view.css';
import ProjectsListView from './projects-list-view';
import TaskListView from './tasks-list-view'; 
import Search from '../search';
import TaskContentView from './task-content-view';
import ProjectContentView from './project-content-view';
import CreateTaskForm from '../forms/create-task-form';
import CreateProjectForm from '../forms/create-project-form';
/*
    This component represents view for the project/task data
    inside main-container  , apart from side panel
*/


function ContentView(props) {
    let componentToRender;

    if (props.componentToRender === "projects") {
        componentToRender = <ProjectsListView projectlist={props.data} />;
    } else if (props.componentToRender === "tasks") {
        componentToRender = <TaskListView tasklist={props.data} />;
    } else if (props.componentToRender === "project") {
        // Handle additional conditions as needed
        componentToRender= <ProjectContentView projectdata={props.data} />
    } else if (props.componentToRender === "task") {
        componentToRender = <TaskContentView taskdata={props.data}/>;
        // Handle additional conditions as needed
    } else if (props.componentToRender === 'create-task') {
        componentToRender = < CreateTaskForm onSubmit={props.onSubmit}/>
    } else if (props.componentToRender === "create-project") {
        componentToRender = < CreateProjectForm onSubmit={props.onSubmit} />
    }

    return (
        <div id="content-view">
        {componentToRender}
        </div>
    );
}

export default ContentView;
