import './../css/variables.css';
import '../css/common.css';
import Navbar from "./components/navbar";
import MainContainer from './components/main-container';
import Footer from './components/footer';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Projects() {
    const [projectlist, setProjectList] = useState(null);
    const componentToRender = "projects";
    const location = useLocation();
    const {key=null , param=null} = location.state || {};
    useEffect(() => {
        projectList();
    }, [key, param]);

    // method to fetch project list
    const projectList = () => {
        fetch(`http://127.0.0.1:8000/projects?key=${key}&param=${param}`)
        .then(response => {
            return response.json();
        })
        .then(data => {
            setProjectList(data);
        })
        .catch(error => console.log(error));
    };

    return (
        <div id="projects" className="main-view">
        <Navbar />
        <MainContainer componentToRender={componentToRender} data={projectlist}/>
        <Footer />
        </div>
    );
};

export default Projects;
