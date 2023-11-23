
import React, { useState } from 'react';
import CreateCommentForm from '../forms/create-comment-form';
import '../../../css/activity-view.css'

function ActivityEntity(props){

    const [message,setMessage] = useState('')
    const [date,setDate] = useState('')
    const [time,setTime] = useState('')
    const [author,setAuthor] = useState('')

    function onDelete(e){
        console.log("Deleting comment")
    }
    return (
        <div className="activity-entity">
            <div className="activity-info">
                <p>{message}</p>
                <p>Date: {date}</p>
                <p>Time: {time}</p>
            </div>
            <div className="delete-option" onClick={onDelete}>
                <small>Delete</small>
            </div>
        </div>
    );
};


function ActivityList(){

    return (
        <div className="activity-list">
        
        {activities.map((activity) => (
            <ActivityEntity
            key={activity.id}
            message={activity.message}
            dateCreated={activity.dateCreated}
            timeCreated={activity.timeCreated}
            person={activity.person}
            onDelete={() => onDelete(activity.id)}
            />
        ))}
        </div>
    );
};

function ActivityView(){

  const [activities, setActivities] = useState([]);

  const handleCommentSubmit = (comment) => {
    comment.id = new Date().getTime();
    setActivities((prevActivities) => [...prevActivities, comment]);
  };

  const handleDelete = (id) => {
    setActivities((prevActivities) => prevActivities.filter((activity) => activity.id !== id));
  };

  return (
    <div className="activity-component">
        <ActivityList activities={activities} onDelete={handleDelete} />
        <CreateCommentForm onCommentSubmit={handleCommentSubmit} />
    </div>
  );
};

export default ActivityView;
