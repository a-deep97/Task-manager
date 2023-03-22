import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Projects from './static/js/projects'
import User from './static/js/user';
import Tasks from './static/js/tasks';
import './static/css/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <h1>Hello , this is home page</h1>} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </BrowserRouter> 
  );

}

export default App;
