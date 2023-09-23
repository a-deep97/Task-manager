import '../../css/main-container.css'
import { Component } from "react";
import MainView from "./content-view/content-view";
import SidePanel from "./side-panel";

/*
    THis component represents main container other than navbar  and footer
*/


function MainContainer(props) {
    return (
            <div className="main-container">
                <SidePanel />
                <MainView componentToRender={props.componentToRender} data={props.data} onSubmit={props.onSubmit} />
            </div>
    );
}

export default MainContainer;
