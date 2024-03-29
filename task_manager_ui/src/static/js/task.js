import '../css/common.css';
import Navbar from "./components/navbar";
import MainContainer from './components/main-container';
import Footer from './components/footer';

import { useState, useEffect } from 'react';
import { useLocation , useNavigate} from 'react-router-dom';

/**
 * This component represents task page
 */

function Task() {
    const location = useLocation();
    const navigate = useNavigate();
    const [taskdetail, setTaskDetail] = useState(null);
    const {key=null , param=null} = location.state || {};
    const componentToRender= "task"

    useEffect(() => {
        taskData();
    }, [key, param]);

    const taskData = () => {
        fetch(`http://127.0.0.1:8000/task?key=${key}&param=${param}`,{
            method:'GET',
            credentials: 'include',
          })
        .then((response) => {
            if(response.ok){
                return response.json();
              }
              else{
                navigate('/login')
              }
        })
        .then((data) => {
            setTaskDetail(data);
        })
        .catch((error) => {
            console.log(error);
        });
  };

    return (
        <div id="task" className="main-view">
        <Navbar />
        <MainContainer componentToRender={componentToRender} data={taskdetail}/>
        <Footer />
        </div>
    );
};

export default Task;
