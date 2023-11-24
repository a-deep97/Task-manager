import React, { useState } from 'react';
import '../../../css/comment-form.css';

function CreateCommentForm(props){
  // State to track form input values
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');

  // Handle form submission
  function handleSubmit(e){
    e.preventDefault();

    // Create a comment dict with input values
    const now = new Date();
    const date = now.toISOString().slice(0,10);
    const time = now.toISOString().slice(11,19);
    const newComment = {
      "author": author,
      "comment": comment,
      "task_id": props.task_id,
      "activity_date": date,
      "activity_time": time,
    };

    // Call the onCommentSubmit function defined within the component
    onCommentSubmit(newComment)
    // Clear the form after submission
    setAuthor('');
    setComment('');
  };

  // Define the onCommentSubmit function within the component
  function onCommentSubmit(newComment){
    fetch('http://127.0.0.1:8000/task/activities/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Specify the content type as JSON
        },
        body: JSON.stringify(newComment), // Convert the form data to JSON
        })
        .then((response) => {
            if (!response.ok) {
            throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Response from server:', data);
            // Calling the parent submit event
            props.onCommentSubmit()
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
            window.alert("Comment could not be Added :( \n\n "+ error.message)
    });

    
  };

  return (
    <form className='comment-form' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type your message..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
};

export default CreateCommentForm;
