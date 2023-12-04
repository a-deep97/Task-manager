
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../css/login-form.css';

function Login(props){

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    function handleLogin(e){
        e.preventDefault();
        const formData={
            'username':username,
            'password':password
        }
        const csrfToken = getCookie('csrftoken');
        fetch('http://127.0.0.1:8000/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrfToken,
                },
                body: JSON.stringify(formData),
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
            navigate('/tasks/')
      })
      .catch((error) => {
        console.error('There was a problem with the login operation:', error);
        window.alert("There's a problem with the login :( \n\n "+ error.message)
      });

    };
    return(
        <form className="login-form" onSubmit={handleLogin}>
            <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            <button type="submit" className="login-btn">Login</button>
        </form>
    )
}
export default Login;
