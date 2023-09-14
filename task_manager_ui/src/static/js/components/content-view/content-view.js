
import { Component } from 'react';
import '../../../css/content-view.css';
import ProjectsListView from './projects-list-view';
import TaskListView from './tasks-list-view'; 
import Search from '../search';
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
    } else if (props.componentToRender === "task") {
        // Handle additional conditions as needed
    }

    return (
        <div id="content-view">
        {componentToRender}
        </div>
    );
}

export default ContentView;
