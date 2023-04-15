
import { Component } from 'react';
import '../../../css/content-view.css';
import ProjectsListView from './projects-list-view';

/*
    This component represents view for the project/task data
    inside main-container  , apart from side panel
*/

class ContentView extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="content-view">
                <ProjectsListView projectlist={this.props.projectlist}/>
            </div>
        );
    };
};

export default ContentView