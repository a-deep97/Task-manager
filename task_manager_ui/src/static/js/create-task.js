import '../css/common.css';
import { Component } from "react";
import Navbar from "./components/navbar";
import MainContainer from './components/main-container';
import Footer from './components/footer';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * This component represents create task page
 */

function CreateTask() {
    const location = useLocation();
    const navigate=useNavigate();
    // State to hold the form data
    const [formData, setFormData] = useState({});
    const componentToRender= "create-task"
         
    function handleFormSubmit(data){
        setFormData(data);
        postTaskForm(formData);
    }
    function postTaskForm(data){
        console.log("posting task data...")
        try{
            //throw new Error("Not implemented error")
        }
        catch (error){
            window.alert("Task could not be created :( \n\n "+ error.message)
        }
        
        //navigating to created task
        const state={key:'id',param:1}
        navigate('/task/',{state})
    }
    return (
        <div id="create-task" className="main-view">
        <Navbar />
        <MainContainer componentToRender={componentToRender} data={null} onSubmit={handleFormSubmit}/>
        <Footer />
        </div>
    );
};

export default CreateTask;
