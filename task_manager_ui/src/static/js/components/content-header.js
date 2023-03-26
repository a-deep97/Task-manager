import { Component } from "react";
import '../../css/content-view.css'
import ProjectsHeader from "./projects/projects-headers";

/**
 * Component representing columns headers in contents
 */

class ContentHeader extends Component{
    render(){
        return(
            <div id="content-header">
                <ProjectsHeader />
            </div>
        );
    };
};

export default ContentHeader