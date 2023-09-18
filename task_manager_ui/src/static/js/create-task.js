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
        fetch('http://127.0.0.1:8000/task/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Specify the content type as JSON
            },
            body: JSON.stringify(formData), // Convert the form data to JSON
            })
            .then((response) => {
                if (!response.ok) {
                throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                console.log('Response from server:', data);
                navigate('/tasks/')
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
                window.alert("Task could not be created :( \n\n "+ error.message)
        });
        
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
