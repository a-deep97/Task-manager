import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Projects from './static/js/projects'
import User from './static/js/user';
import Tasks from './static/js/tasks';
//import Task from './static/js/task';
import Project from './static/js/project';
import './static/css/App.css';
import Task from './static/js/task';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <h1>Hello , this is home page</h1>} />
        <Route path='/projects'  element={<Projects />} />
        <Route path='/project' element={<Project/>} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/task' element={<Task/>} />
        <Route path='/user' element={<User />} />
      </Routes>
    </BrowserRouter> 
  );

}

export default App;
