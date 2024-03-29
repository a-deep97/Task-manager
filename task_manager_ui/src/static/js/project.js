import '../css/common.css';
import { Component } from "react";
import Navbar from "./components/navbar";
import MainContainer from './components/main-container';
import Footer from './components/footer';

import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * This component represents project page
 */

function Project() {
    const location = useLocation();
    const navigate = useNavigate();
    const [projectdetail, setProjectDetail] = useState(null);
    const {key=null , param=null} = location.state || {};
    const componentToRender = "project"

    useEffect(() => {
        projectData();
    }, [key, param]);

    const projectData = () => {
    fetch(`http://127.0.0.1:8000/project?key=${key}&param=${param}`,{
      method:'GET',
      credentials: 'include',
    })
      .then((response) => {
        if(response.ok){
          return response.json();
        }
        else{
          navigate('/login')
        }
      })
      .then((data) => {
        setProjectDetail(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
         
  return (
    <div id="project" className="main-view">
      <Navbar />
      <MainContainer componentToRender={componentToRender} data={projectdetail}/>
      <Footer />
    </div>
  );
};

export default Project;
