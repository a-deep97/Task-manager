import '../../css/main-container.css'
import { Component } from "react";
import MainView from "./content-view/content-view";
import SidePanel from "./side-panel";

/*
    THis component represents main container other than navbar  and footer
*/

class MainContainer extends Component{
    
    constructor(props){
        super(props)
        
    }
    render(){
        return(
            <div className="main-container">
                <SidePanel />
                <MainView projectlist={this.props.projectlist}/>
            </div>
        );
    };
};

export default MainContainer