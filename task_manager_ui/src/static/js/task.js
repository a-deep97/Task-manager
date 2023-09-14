import '../css/common.css';
import { Component } from "react";
import Navbar from "./components/navbar";
import MainContainer from './components/main-container';
import Footer from './components/footer';

import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * This component represents tasks page
 */

function Task() {
  const location = useLocation();
  const [taskdetail, setTaskDEtail] = useState(null);
  const {key=null , param=null} = location.state || {};
  

  const task = () => {
    fetch(`http://127.0.0.1:8000/task?key=${key}&param=${param}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTaskDEtail(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="task" className="main-view">
      <Navbar />
      <MainContainer listtype={listtype} datalist={tasklist} />
      <Footer />
    </div>
  );
};

export default Tasks;
