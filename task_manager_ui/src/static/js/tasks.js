import '../css/common.css';
import { Component } from "react";
import Navbar from "./components/navbar";
import MainContainer from './components/main-container';
import Footer from './components/footer';

/**
 * This component represents tasks page
 */

class Tasks extends Component{
    
    constructor(props){
        super(props)
        this.state={
            tasklist:null,
            listtype:"tasks"
        }
    }
    //  lifecycle method
    componentDidMount(){
        console.debug("mounting taskList method...")
        this.taskList()
    }
    // method to fetch project list
    taskList() {
        
        fetch('http://127.0.0.1:8000/tasks').then((response)=>{
                return response.json()
            }).then((data)=>{
                this.setState({ tasklist: data }, () => {
                    //console.log('state:', this.state.tasklist)
                  })
                }).catch((error)=>{
                    console.log(error)
        })
    }
    render(){
        return(
            <div id="tasks" className="main-view">
                <Navbar />
                <MainContainer listtype={this.state.listtype} datalist={this.state.tasklist} />
                <Footer />
            </div>
        );
    }
};

export default Tasks