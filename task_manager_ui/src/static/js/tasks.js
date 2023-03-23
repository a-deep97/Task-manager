import { Component } from "react";
import Navbar from "./components/navbar";
import '../css/common.css';

class Tasks extends Component{
    render(){
        return(
            <div className="tasks">
                <Navbar />
                <h1>This is tasks page</h1>
            </div>
        );
    }
};

export default Tasks