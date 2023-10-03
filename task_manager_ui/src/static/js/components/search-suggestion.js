import React, { useState, useEffect } from "react";

import '../../css/search-suggestions.css';

function SearchSuggestions(props) {
  
    const [suggestions, setSuggestions] = useState([]);
    
    const handleInputChange = (event) => {
      const inputValue = event.target.value;
      
      //fetching suggestion from DB
      fetch(`http://127.0.0.1:8000/suggestions?column=${props.column}&table=${props.table}&input=${props.inputValue}`)
        .then((response) => {
          console.log(response)
          return response.json()
        })
        .then((data) => {
          console.log("suggestion data",data)
            setSuggestions(data.suggestions);
        })
        .catch((error) => {
            console.error("Error fetching suggestions:", error);
        });
      // Update the input value
      props.setinputValue(inputValue);
      console.log(props.column,props.table,props.inputValue)
    };
    
  const handleSuggestionClick = (suggestion) => {

      // Set the selected suggestion as the input value
      props.setinputValue(suggestion);
      // Clear the suggestions
      setSuggestions([]);
  };

  return (
    <div className="search-suggestions">
      <input
        type="text"
        value={props.inputValue}
        onChange={handleInputChange}
        placeholder="Type here..."
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchSuggestions;
