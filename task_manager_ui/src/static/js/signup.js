

import React, { useState } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import SignUp from './components/forms/sign-up';

import '../css/login.css';
import '../css/common.css';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div id='signup-page' className='main-view'>
        <Navbar/>
        <div className="signup-container">
            <h2> Login</h2>
            <SignUp/>
        </div>
    </div>
  );
};

export default SignUpPage;
