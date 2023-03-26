
import { Component } from 'react';
import '../../css/content-view.css'
import ContentHeader from './content-header';
import ProjectsList from './projects/projects-list';

/*
    This component represents view for the project/task data
    inside main-container  , apart from side panel
*/

class ContentView extends Component{
    render(){
        return(
            <div id="content-view">
                <ContentHeader />
                <ProjectsList />
            </div>
        );
    };
};

export default ContentView