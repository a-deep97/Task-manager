import '../css/common.css';
import { Component } from "react";
import Navbar from "./components/navbar";
import MainContainer from './components/main-container';
import Footer from './components/footer';

/**
 * THis component represents user page
 */

class User extends Component{
    render(){
        return(
            <div id="user" className="main-view">
                <Navbar />
                <MainContainer />
                <Footer />
            </div>
        );
    }
};

export default User