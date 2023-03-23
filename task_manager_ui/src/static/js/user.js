import { Component } from "react";
import Navbar from "./components/navbar";
import '../css/common.css';

class User extends Component{
    render(){
        return(
            <div className="user">
                <Navbar />
                <h1>This is user page</h1>
            </div>
        );
    }
};

export default User