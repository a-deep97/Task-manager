import { Component } from "react";
import '../../css/navbar.css';
import LogOut from "./logout";

class Navbar extends Component{
    render(){
        return(
            <div className="navbar">
                <div id="navbar-title">Task Manager</div>
                <div className="navbar-links">
                    <LogOut/>
                </div>      
            </div>
        );
    }
};

export default Navbar