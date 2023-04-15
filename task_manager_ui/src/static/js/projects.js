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
            projectlist:null,
        }
    }
    //  lifecycle method
    componentDidMount(){
        console.debug("mounting projectList method...")
        this.projectList()
    }
    // method to fetch project list
    projectList() {
        
        fetch('http://127.0.0.1:8000/projects').then((response)=>{
                return response.json()
            }).then((data)=>{
                this.setState({ projectlist: data }, () => {
                    console.log('state:', this.state.projectlist)
                  })
                }).catch((error)=>{
                    console.log(error)
        })
        
    }

    render(){
        return(
            <div id="projects" className="main-view">
                <Navbar />
                <MainContainer projectlist={this.state.projectlist}/>
                <Footer />
            </div>        
        );
    };
};

export default Projects