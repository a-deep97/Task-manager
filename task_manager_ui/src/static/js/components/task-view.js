
/**
 * This component is used to show task contents on a page
 */

import { Component } from "react";

class TaskView extends Component{
    
    render(){
        return(
            <div id="task-view">
                <div id="task-info">
                    <div id="id-bar"></div>
                    <div id="title-bar"></div>
                    <div id="other-info-bar"></div>
                </div>
                <div id="task-description">

                </div>
            </div>
        )
    }
}

export default TaskView;