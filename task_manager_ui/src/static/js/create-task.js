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
    const componentToRender= "create-task"
         
    function handleFormSubmit(data){
        postTaskForm(data);
    }
    function postTaskForm(formData){
        const now = new Date();
        const date = now.toISOString().slice(0,10);
        const time = now.toISOString().slice(11,19);
        formData["creation_date"]=date
        formData["creation_time"]=time
        fetch('http://127.0.0.1:8000/task/create', {
            method: 'POST',
            credentials: 'include',
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
        <MainContainer componentToRender={componentToRender}  onSubmit={handleFormSubmit}/>
        <Footer />
        </div>
    );
};

export default CreateTask;
