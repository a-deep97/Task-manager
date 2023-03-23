import './../css/variables.css';
import '../css/common.css';
import { Component } from "react";
import Navbar from "./components/navbar";
import MainContainer from './components/main-container';
import Footer from './components/footer';

class Projects extends Component{
    render(){
        return(
            <div id="projects" className="main-view">
                <Navbar />
                <MainContainer />
                <Footer />
            </div>        
        );
    };
};

export default Projects