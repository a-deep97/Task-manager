import React, { useState } from 'react';
import '../../../css/comment-form.css';

function CreateCommentForm(props){
  // State to track form input values
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');

  // Handle form submission
  function handleSubmit(e){
    e.preventDefault();

    // Create a comment object with input values
    const newComment = {
      author: author,
      comment: comment,
      // You might include other fields like timestamp, postId, etc.
    };

    // Call the onCommentSubmit function defined within the component
    onCommentSubmit(newComment);

    // Clear the form after submission
    setAuthor('');
    setComment('');
  };

  // Define the onCommentSubmit function within the component
  function onCommentSubmit(comment){
    // TODO: Implement the logic to handle the submission of the comment
    console.log('Comment submitted:', comment);
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
