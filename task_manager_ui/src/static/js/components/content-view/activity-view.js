
import React, { useState ,useEffect } from 'react';
import CreateCommentForm from '../forms/create-comment-form';
import '../../../css/activity-view.css'
import '../../../css/utilities/scrollbar.css';

function ActivityEntity(props){

    function onDelete(e){
        console.log("Deleting comment")
    }
    return (
        <div className="activity-entity">
            <div className="activity-message">
                <p>{props.comment}</p>
            </div>
            <div className="activity-options">
                <div className='activity-option'>
                    <small>{props.date}</small>
                </div>
                <div className='activity-option'>
                    <small>{props.time}</small>
                </div>
                <div className='activity-option' onClick={onDelete}>
                    <small>Delete</small>
                </div>
            </div>
        </div>
    );
};


function ActivityList(props){

    console.log(props.activities)
    return (
        <div className="activity-list"> 
        {props.activities.map((activity) => (
            <ActivityEntity
            comment={activity.comment}
            date={activity.activity_date}
            time={activity.activity_time}
            //person={activity.person}
            //onDelete={() => onDelete(activity.id)}
            />
        ))}
        </div>
    );
};

function ActivityView(props){

    const [activities, setActivities] = useState([]);
    function get_activities(task_id){
        console.log("fetching task activities...")
        fetch(`http://127.0.0.1:8000/task/activities/list?task_id=${task_id}`)
        .then((response) => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Response from server:', data);
            setActivities(data)
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
            window.alert("Target could not be updated :( \n\n "+ error.message)
    });
    }
    useEffect(() => {

        const activities = get_activities(props.task_id)
    },[]);
    const handleCommentSubmit = (comment) => {
        get_activities(props.task_id)
    };

    const handleDelete = (id) => {
        setActivities((prevActivities) => prevActivities.filter((activity) => activity.id !== id));
    };

    return (
        <div className="activity-component">
            <ActivityList activities={activities} onDelete={handleDelete} task_id = {props.task_id} />
            <CreateCommentForm onCommentSubmit={handleCommentSubmit} task_id = {props.task_id}/>
        </div>
    );
};

export default ActivityView;
