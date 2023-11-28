import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Projects from './static/js/projects'
import User from './static/js/user';
import Tasks from './static/js/tasks';
import Project from './static/js/project';
import Task from './static/js/task';
import CreateTask from './static/js/create-task';
import CreateProject from './static/js/create-project';
import Login from './static/js/login';

import './static/css/App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/projects'  element={<Projects />} />
        <Route path='/project' element={<Project/>} />
        <Route path='/tasks' element={<Tasks />} />
        <Route path='/task' element={<Task/>} />
        <Route path='/user' element={<User />} />
        <Route path='/task/create' element={<CreateTask />} />
        <Route path='/project/create' element={<CreateProject/>} />
      </Routes>
    </BrowserRouter> 
  );

}

export default App;
