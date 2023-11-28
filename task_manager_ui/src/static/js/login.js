

import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import '../css/login.css';
import '../css/common.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

  };

  return (
    <div id='login-page' className='main-view'>
        <Navbar/>
        <div className="login-container">
            <h2> Login</h2>
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
        </div>
        <Footer/>
    </div>
  );
};

export default Login;
