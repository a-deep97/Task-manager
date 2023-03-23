import { Component } from "react";
import '../../css/navbar.css';

class Navbar extends Component{
    render(){
        return(
            <div className="top-navbar">
                <div className="navbar-links">
                    <div id="title">Task Manager</div>
                </div>      
            </div>
        );
    }
};

export default Navbar