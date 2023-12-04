

import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Login from './components/forms/login';
import '../css/login.css';
import '../css/common.css';

const LoginPage = () => {

  return (
    <div id='login-page' className='main-view'>
        <Navbar/>
        <div className="login-container">
            <h2> Login</h2>
            <Login/>
        </div>
    </div>
  );
};

export default LoginPage;
