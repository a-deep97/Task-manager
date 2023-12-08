
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../css/logout.css';

function LogOut(props){

    const navigate = useNavigate();
    const [LoggedOut, setLoggedOut] = useState(false);
    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    function handleLogout(e){
        e.preventDefault();
        if(LoggedOut === true){
            return
        }
        const csrfToken = getCookie('csrftoken');
        fetch('http://127.0.0.1:8000/logout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
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
      })
      .finally(()=>{
        window.location.reload();
      });

    };
    return(
        <button className='logout-button' onClick={handleLogout} disabled={LoggedOut}>Logout</button>
    )
}
export default LogOut;
