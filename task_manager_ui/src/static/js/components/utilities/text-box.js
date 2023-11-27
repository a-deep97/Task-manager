import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import '../../../css/utilities/text-box.css'

function TextBox(props) {
  
  return (
      <ReactQuill
        theme="snow" // (snow/bubble)
        value={props.text}
        onChange={props.setText}
        />
  );
}

export default TextBox;
