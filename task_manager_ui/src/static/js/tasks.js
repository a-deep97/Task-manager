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

function Tasks() {
  const [tasklist, setTaskList] = useState(null);
  const listtype = "tasks";
  const location = useLocation();
  const {key=null , param=null} = location.state || {};
  console.log("projet page loaded")
  useEffect(() => {
      taskList();
  }, [key, param]);

  useEffect(() => {
    taskList();
  }, []);

  const taskList = () => {
    fetch(`http://127.0.0.1:8000/tasks?key=${key}&param=${param}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setTaskList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="tasks" className="main-view">
      <Navbar />
      <MainContainer listtype={listtype} datalist={tasklist} />
      <Footer />
    </div>
  );
};

export default Tasks;
