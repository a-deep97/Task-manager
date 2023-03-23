
import { Component } from 'react';
import '../../css/content-view.css'
/*
    This component represents view for the project/task data
    inside main-container  , apart from side panel
*/

class ContentView extends Component{
    render(){
        return(
            <div className="content-view">
                <div id='content-heading'>
                    <h2>This is heading section</h2>
                </div>
            </div>
        );
    };
};

export default ContentView