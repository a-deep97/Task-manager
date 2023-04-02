import './../css/variables.css';
import '../css/common.css';
import { Component } from "react";
import Navbar from "./components/navbar";
import MainContainer from './components/main-container';
import Footer from './components/footer';

class Projects extends Component{
    
    constructor(props){
        super(props);
        this.state={
            data:this.projectList()
        }
    }
    projectList() {
        try{
            fetch('http://127.0.0.1:8000/projects').then(response=>response.json()).then((data)=>{
                console.log(data)
                return data
            }).catch((error)=>{

            })
        }
        catch(error){
            console.log(error)
        }
    }

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