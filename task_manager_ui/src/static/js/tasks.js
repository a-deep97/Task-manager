import '../css/common.css';
import { Component } from "react";
import Navbar from "./components/navbar";
import MainContainer from './components/main-container';
import Footer from './components/footer';

import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * This component represents tasks page
 */

function Tasks(props) {
    const [tasklist, setTaskList] = useState(null);
    const componentToRender = "tasks";  // prop variable to specify the page to be navigated to. i.e. tasks /projects/task/project etc
    const location = useLocation();
    const navigate = useNavigate();
    const {key=null , param=null} = location.state || {};
    useEffect(() => {
        taskList();
    }, [key, param]);

    useEffect(() => {
      taskList();
    }, []);

  const taskList = () => {
    fetch(`http://127.0.0.1:8000/tasks?key=${key}&param=${param}`,{
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
        setTaskList(data);
      })
      .catch((error) => {
        window.alert("something went wrong:",error.message)
      });
  };

  return (
    <div id="tasks" className="main-view">
      <Navbar />
      <MainContainer componentToRender={componentToRender} data={tasklist} />
      <Footer />
    </div>
  );
};

export default Tasks;
