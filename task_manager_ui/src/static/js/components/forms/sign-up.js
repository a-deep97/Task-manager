
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../css/signup-form.css';

function SignUp(props){

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [firstname,setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }
    function handleSignup(e){
        e.preventDefault();
        debugger;
        const formData={
            "username":username,
            "firstname":firstname,
            "lastname":lastname,
            "email":email,
            "password":password
        }
        const csrfToken = getCookie('csrftoken');
        fetch('http://127.0.0.1:8000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Specify the content type as JSON
                'X-CSRFToken': csrfToken,
            },
            body: JSON.stringify(formData), // Convert the form data to JSON
            credentials : 'include',
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
                console.error('There was a problem with the signup operation:', error);
                window.alert("User could not be registered :( \n\n "+ error.message)
        });
    }    
    return(
        <form className="signup-form" onSubmit={handleSignup}>
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
                <label htmlFor="username">First name:</label>
                <input
                    type="text"
                    id="firstname"
                    name="firstname"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="username">Last name:</label>
                <input
                    type="text"
                    id="lastname"
                    name="lastname"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    autoComplete='off'
                    required
                />
            </div>
            <button type="submit" className="sign-up-btn">Register</button>
        </form>
    )
}
export default SignUp;