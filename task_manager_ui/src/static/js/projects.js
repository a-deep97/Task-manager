import './../css/variables.css';
import '../css/common.css';
import Navbar from "./components/navbar";
import MainContainer from './components/main-container';
import Footer from './components/footer';

import { useState, useEffect } from 'react';

function Projects() {
  const [projectlist, setProjectList] = useState(null);
  const listtype = "projects";

  useEffect(() => {
    console.debug("mounting projectList method...")
    projectList();
  }, []);

  // method to fetch project list
  const projectList = () => {
    fetch('http://127.0.0.1:8000/projects')
      .then(response => response.json())
      .then(data => {
        setProjectList(data);
        console.log('state:', projectlist);
      })
      .catch(error => console.log(error));
  };

  return (
    <div id="projects" className="main-view">
      <Navbar />
      <MainContainer listtype={listtype} datalist={projectlist}/>
      <Footer />
    </div>
  );
};

export default Projects;
