
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/logout.css';

function LogOut(props){

    const navigate = useNavigate();

    function handleLogout(e){
        e.preventDefault();
//        const csrfToken = getCookie('csrftoken');
        fetch('http://127.0.0.1:8000/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
  //                  'X-CSRFToken': csrfToken,
                },
                credentials: 'include', // Include credentials (cookies) in the request
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Response from server:', data);
            navigate('/login/')
      })
      .catch((error) => {
        console.error('There was a problem with the logout operation:', error);
        window.alert("There's a problem with the logout :( \n\n "+ error.message)
      });

    };
    return(
        <button className='logout-button' onClick={handleLogout}>Logout</button>
    )
}
export default LogOut;
