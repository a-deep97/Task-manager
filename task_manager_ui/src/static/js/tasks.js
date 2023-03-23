import '../css/common.css';
import { Component } from "react";
import Navbar from "./components/navbar";
import MainContainer from './components/main-container';
import Footer from './components/footer';

/**
 * This component represents tasks page
 */

class Tasks extends Component{
    render(){
        return(
            <div id="tasks" className="main-view">
                <Navbar />
                <MainContainer />
                <Footer />
            </div>
        );
    }
};

export default Tasks