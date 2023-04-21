
import { Component } from 'react';
import '../../../css/content-view.css';
import ProjectsListView from './projects-list-view';
import TaskListView from './tasks-list-view'; 
import Search from '../search';
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
                <Search listtype={this.props.listtype} />
                {this.props.listtype=="project"
                    ?<ProjectsListView projectlist={this.props.datalist} />
                    :<TaskListView tasklist={this.props.datalist} />}
            </div>
        );
    };
};

export default ContentView